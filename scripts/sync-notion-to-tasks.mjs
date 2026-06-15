import fs from "fs";

const config = JSON.parse(fs.readFileSync(".brasco-private/notion/config.json", "utf8"));
const tasksPath = ".brasco-private/tasks/tasks.md";

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

const response = await fetch(`https://api.notion.com/v1/databases/${config.databaseId}/query`, {
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

const data = await response.json();

if (!response.ok) {
  console.error("Notion lezen mislukt:");
  console.error(JSON.stringify(data, null, 2));
  process.exit(1);
}

let tasksText = fs.readFileSync(tasksPath, "utf8");
let added = 0;

for (const page of data.results) {
  const props = page.properties;

  const title = props.Name?.title?.map(t => t.plain_text).join("").trim() || "";
  const type = props.Type?.select?.name || "Note";
  const priority = props.Priority?.select?.name || "Normal";
  const due = props.Due?.date?.start || "";

  if (!title || title === "Standaard") {
    console.log(`Overgeslagen lege/default rij: ${page.id}`);
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

  const updateResponse = await fetch(`https://api.notion.com/v1/pages/${page.id}`, {
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

  const updateData = await updateResponse.json();

  if (!updateResponse.ok) {
    console.error(`Notion status updaten mislukt voor ${title}:`);
    console.error(JSON.stringify(updateData, null, 2));
    process.exit(1);
  }

  console.log(`Gekoppeld: ${taskId} ← ${title}`);
}

fs.writeFileSync(tasksPath, tasksText);

console.log(`Klaar. Nieuwe taken toegevoegd: ${added}`);
