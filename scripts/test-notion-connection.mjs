import fs from "fs";

const configPath = ".brasco-private/notion/config.json";
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

if (!config.notionToken || config.notionToken === "NIEUWE_TOKEN_HIER") {
  console.error("Notion token ontbreekt of is nog placeholder.");
  process.exit(1);
}

if (!config.databaseId) {
  console.error("Database ID ontbreekt.");
  process.exit(1);
}

const response = await fetch(`https://api.notion.com/v1/databases/${config.databaseId}`, {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${config.notionToken}`,
    "Notion-Version": "2022-06-28"
  }
});

const data = await response.json();

if (!response.ok) {
  console.error("Notion verbinding mislukt:");
  console.error(JSON.stringify(data, null, 2));
  process.exit(1);
}

console.log("Notion verbinding OK");
console.log("Database titel:", data.title?.map(t => t.plain_text).join("") || "(zonder titel)");
