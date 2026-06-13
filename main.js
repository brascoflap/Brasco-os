const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#0b0b0c",
    title: "Brasco OS",
    autoHideMenuBar: true
  });

  const startUrl = app.isPackaged
    ? `file://${path.join(__dirname, "dist/index.html")}`
    : "http://localhost:5173";

  mainWindow.loadURL(startUrl);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});