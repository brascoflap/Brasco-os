import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function nextTaskId(currentText) {
  const matches = [...currentText.matchAll(/TASK-(\d+)/g)];
  const max = matches.length
    ? Math.max(...matches.map(m => Number(m[1])))
    : 0;

  return `TASK-${String(max + 1).padStart(4, "0")}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

export async function syncNotionToTasks({ cwd = process.cwd(), log = console.log } = {}) {
  const configPath = path.join(cwd, ".brasco-private/notion/config.json");
  const tasksPath = path.join(cwd, ".brasco-private/tasks/tasks.md");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  let response;

  try {
    response = await fetch(`https://api.notion.com/v1/databases/${config.databaseId}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${config.notionToken}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        filter: {
          property: "Status",
          select: {
            equals: "New"
          }
        }
      })
    });
  } catch (error) {
    const cause = error.cause?.code || error.cause?.message || error.message;
    throw new Error(`Notion netwerkfout: ${cause}`);
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Notion lezen mislukt: ${data.message || response.statusText}`);
  }

  let tasksText = fs.readFileSync(tasksPath, "utf8");
  let added = 0;
  const linked = [];
  const skipped = [];

  for (const page of data.results) {
    const props = page.properties;

    const title = props.Name?.title?.map(t => t.plain_text).join("").trim() || "";
    const type = props.Type?.select?.name || "Note";
    const priority = props.Priority?.select?.name || "Normal";
    const due = props.Due?.date?.start || "";

    if (!title || title === "Standaard") {
      skipped.push(page.id);
      log(`Overgeslagen lege/default rij: ${page.id}`);
      continue;
    }

    const taskId = nextTaskId(tasksText);

    const block = `

## ${taskId}

Titel:
${title}

Status:
Open

Prioriteit:
${priority}

Categorie:
${type}

Bron:
Notion / ${page.id}

Beschrijving:
Aangemaakt vanuit Notion Inbox.

Aangemaakt:
${today()}

Deadline:
${due || "Geen"}

Volgende actie:
Beoordelen en koppelen aan Brasco OS planning.
`;

    tasksText += block;
    added++;

    let updateResponse;

    try {
      updateResponse = await fetch(`https://api.notion.com/v1/pages/${page.id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${config.notionToken}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          properties: {
            Status: {
              select: {
                name: "Linked"
              }
            },
            "Brasco ID": {
              rich_text: [
                {
                  text: {
                    content: taskId
                  }
                }
              ]
            }
          }
        })
      });
    } catch (error) {
      const cause = error.cause?.code || error.cause?.message || error.message;
      throw new Error(`Notion update netwerkfout voor ${title}: ${cause}`);
    }

    const updateData = await updateResponse.json();

    if (!updateResponse.ok) {
      throw new Error(`Notion status updaten mislukt voor ${title}: ${updateData.message || updateResponse.statusText}`);
    }

    linked.push({ taskId, title });
    log(`Gekoppeld: ${taskId} ← ${title}`);
  }

  fs.writeFileSync(tasksPath, tasksText);

  return {
    added,
    linked,
    skipped,
    message: `Klaar. Nieuwe taken toegevoegd: ${added}`
  };
}

const isCli = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isCli) {
  try {
    const result = await syncNotionToTasks();
    console.log(result.message);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
