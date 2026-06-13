import { useState } from "react";
import "./App.css";

import NowPanel from "./components/NowPanel.jsx";
import StatusPanel from "./components/StatusPanel.jsx";

export default function App() {
  const [mode, setMode] = useState(null);
  const [activeSection, setActiveSection] = useState("Commandor");
  const [commandInput, setCommandInput] = useState("");
  const [commandResult, setCommandResult] = useState("Wacht op opdracht.");

  const generateBackup = () => {
    const backup = `
Brasco_Backup:

datum: ${new Date().toLocaleString()}

status:
- app draait
- Commandor concept actief
- Executor / Watcher / Specialist / System zichtbaar

laatste acties:
- UI actief
- build succesvol
- Commandor structuur geladen

openstaande taken:
- echte data verder koppelen
- Executor acties definiëren
- Watcher status uitbreiden
- Specialist rollen koppelen

volgende stap:
- screenshot controleren

gebruikte apps:
- VS Code
- Electron
- Vite

technische status:
- app start: OK
`;

    const blob = new Blob([backup], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "BRASCO_BACKUP.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const runCommand = () => {
    if (!commandInput.trim()) {
      setCommandResult("Geen opdracht ingevoerd.");
      return;
    }

    setCommandResult(`Commandor heeft ontvangen: "${commandInput}"`);
  };

  const menuItems = ["Commandor", "Executor", "Watcher", "Specialist", "System"];

  // START SCHERM
  if (!mode) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#0b0b0c",
        color: "white"
      }}>
        <h1>Brasco OS</h1>

        <button onClick={() => setMode("denk")} style={{ margin: 10 }}>
          SCHONE DENK MODUS
        </button>

        <button onClick={() => setMode("build")} style={{ margin: 10 }}>
          BRASCO BUILD MODUS
        </button>
      </div>
    );
  }

  // DENK MODUS
  if (mode === "denk") {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#0b0b0c",
        color: "white",
        padding: 40
      }}>
        <h2>Denk modus actief</h2>
        <p style={{ color: "#777" }}>
          Schone denkmodus zonder projectruis.
        </p>
      </div>
    );
  }

  // BUILD MODUS
  if (mode === "build") {
    return (
      <div style={{
        display: "flex",
        height: "100vh",
        background: "#0b0b0c",
        color: "white"
      }}>

        {/* SIDEBAR */}
        <div style={{
          width: 260,
          borderRight: "1px solid #222",
          padding: 20,
          color: "white",
          boxSizing: "border-box"
        }}>
          <h2 style={{ marginBottom: 4 }}>Brasco OS</h2>
          <div style={{
            fontSize: 12,
            color: "#666",
            marginBottom: 24
          }}>
            Local Command System
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: activeSection === item ? "1px solid #555" : "1px solid #242428",
                  background: activeSection === item ? "#1f1f23" : "#121214",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={generateBackup}
            style={{
              marginTop: 24,
              width: "100%",
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid #333",
              background: "#18181b",
              color: "white",
              cursor: "pointer"
            }}
          >
            Maak Backup
          </button>
        </div>

        {/* MAIN */}
        <div style={{
          flex: 1,
          padding: 24,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 20,
          overflow: "auto"
        }}>

          {/* COMMANDOR */}
          <section style={{
            background: "#111113",
            borderRadius: 16,
            padding: 24,
            border: "1px solid #1f1f22"
          }}>
            <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
              COMMANDOR
            </div>

            <h1 style={{ fontSize: 26, marginBottom: 8 }}>
              Centrale opdrachtlaag
            </h1>

            <p style={{ color: "#777", marginBottom: 20 }}>
              Geef Brasco OS een opdracht. Echte acties worden later gekoppeld.
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              <input
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Geef Brasco OS een opdracht..."
                style={{
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid #333",
                  background: "#0b0b0c",
                  color: "white",
                  outline: "none"
                }}
              />

              <button
                onClick={runCommand}
                style={{
                  padding: "14px 18px",
                  borderRadius: 12,
                  border: "1px solid #444",
                  background: "#222226",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Uitvoeren
              </button>
            </div>

            <div style={{
              marginTop: 16,
              padding: 14,
              borderRadius: 12,
              background: "#18181b",
              border: "1px solid #26262a",
              color: "#bbb"
            }}>
              {commandResult}
            </div>
          </section>

          {/* EXECUTOR */}
          <section style={{
            background: "#111113",
            borderRadius: 16,
            padding: 24,
            border: "1px solid #1f1f22"
          }}>
            <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
              EXECUTOR
            </div>

            <h2 style={{ fontSize: 20, marginBottom: 8 }}>
              Ready
            </h2>

            <p style={{ color: "#777" }}>
              Wacht op opdracht. Later worden hier acties, backups en logs gekoppeld.
            </p>
          </section>

          {/* WATCHER */}
          <section style={{
            gridColumn: "1 / 2",
            display: "flex",
            gap: 20,
            alignItems: "flex-start"
          }}>
            <NowPanel onSelectTask={(task) => setCommandResult(`Watcher selecteerde taak: ${task.title}`)} />
            <StatusPanel />
          </section>

          {/* SPECIALIST */}
          <section style={{
            background: "#111113",
            borderRadius: 16,
            padding: 24,
            border: "1px solid #1f1f22"
          }}>
            <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
              SPECIALIST
            </div>

            <h2 style={{ fontSize: 20, marginBottom: 16 }}>
              Rollen
            </h2>

            {["Code", "Research", "Sales", "Design"].map((role) => (
              <div
                key={role}
                style={{
                  padding: 12,
                  marginBottom: 10,
                  borderRadius: 12,
                  background: "#18181b",
                  border: "1px solid #26262a"
                }}
              >
                {role}
              </div>
            ))}
          </section>

          {/* SYSTEM */}
          <section style={{
            gridColumn: "1 / -1",
            background: "#111113",
            borderRadius: 16,
            padding: 20,
            border: "1px solid #1f1f22",
            color: "#777",
            fontSize: 13
          }}>
            SYSTEM — Local-first. Geen externe server. Data wordt later lokaal gekoppeld.
          </section>
        </div>
      </div>
    );
  }
}
