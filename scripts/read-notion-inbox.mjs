import fs from "fs";

const config = JSON.parse(fs.readFileSync(".brasco-private/notion/config.json", "utf8"));

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
  console.error("Notion inbox lezen mislukt:");
  console.error(JSON.stringify(data, null, 2));
  process.exit(1);
}

console.log(`Nieuwe Notion-items gevonden: ${data.results.length}`);

for (const page of data.results) {
  const props = page.properties;

  const title = props.Name?.title?.map(t => t.plain_text).join("") || "(zonder titel)";
  const type = props.Type?.select?.name || "";
  const priority = props.Priority?.select?.name || "";
  const due = props.Due?.date?.start || "";

  console.log("---");
  console.log("Titel:", title);
  console.log("Type:", type);
  console.log("Prioriteit:", priority);
  console.log("Deadline:", due);
  console.log("Notion page ID:", page.id);
}
