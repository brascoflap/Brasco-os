const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

let mainWindow;
const projectRoot = __dirname;
const privateTasksPath = path.join(projectRoot, ".brasco-private/tasks/tasks.md");

function nextTaskId(currentText) {
  const matches = [...currentText.matchAll(/TASK-(\d+)/g)];
  const max = matches.length
    ? Math.max(...matches.map((match) => Number(match[1])))
    : 0;

  return `TASK-${String(max + 1).padStart(4, "0")}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function cleanValue(value, fallback = "") {
  return String(value || fallback).trim();
}

function ensureTasksFile() {
  fs.mkdirSync(path.dirname(privateTasksPath), { recursive: true });

  if (!fs.existsSync(privateTasksPath)) {
    fs.writeFileSync(privateTasksPath, "# Brasco OS Taken\n", "utf8");
  }
}

async function syncNotionInbox() {
  const scriptUrl = pathToFileURL(path.join(projectRoot, "scripts/sync-notion-to-tasks.mjs")).href;
  const { syncNotionToTasks } = await import(scriptUrl);

  return syncNotionToTasks({
    cwd: projectRoot,
    log: () => {}
  });
}

function createManualTask(task) {
  ensureTasksFile();

  const title = cleanValue(task.title);

  if (!title) {
    throw new Error("Titel is verplicht.");
  }

  const type = cleanValue(task.type, "Task");
  const priority = cleanValue(task.priority, "Normal");
  const deadline = cleanValue(task.deadline, "Geen");
  const description = cleanValue(task.description, "Handmatig aangemaakt vanuit Brasco OS.");
  const tasksText = fs.readFileSync(privateTasksPath, "utf8");
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
Brasco OS UI

Beschrijving:
${description}

Aangemaakt:
${today()}

Deadline:
${deadline || "Geen"}

Volgende actie:
Beoordelen en koppelen aan Brasco OS planning.
`;

  fs.writeFileSync(privateTasksPath, `${tasksText}${block}`, "utf8");

  return {
    taskId,
    title,
    message: `${taskId} aangemaakt: ${title}`
  };
}

ipcMain.handle("brasco:sync-notion-inbox", async () => {
  try {
    const result = await syncNotionInbox();

    return {
      ok: true,
      added: result.added,
      message: result.message
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message || "Notion sync mislukt."
    };
  }
});

ipcMain.handle("brasco:create-manual-task", async (_event, task) => {
  try {
    const result = createManualTask(task || {});

    return {
      ok: true,
      ...result
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message || "Taak aanmaken mislukt."
    };
  }
});

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#0b0b0c",
    title: "Brasco OS",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  const startUrl = app.isPackaged
    ? `file://${path.join(__dirname, "dist/index.html")}`
    : "http://localhost:5173";

  mainWindow.loadURL(startUrl);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
