const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("brascoOS", {
  syncNotionInbox: () => ipcRenderer.invoke("brasco:sync-notion-inbox"),
  createManualTask: (task) => ipcRenderer.invoke("brasco:create-manual-task", task)
});
