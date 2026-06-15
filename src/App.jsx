import { useState } from "react";
import "./App.css";

import NowPanel from "./components/NowPanel.jsx";
import StatusPanel from "./components/StatusPanel.jsx";
import FlowPanel from "./components/FlowPanel.jsx";
import FocusMode from "./components/FocusMode.jsx";
import {
  ActionPlanPanel,
  ChecklistPanel,
  ExecutorButton,
  FuturePlanPanel,
  MiniPanel,
  PendingActionPanel,
  ProgressMatrix,
  ProjectTaskSummary,
  RiskList,
  RoleMappingPanel,
  SystemLine,
  TagList,
  TaskLine,
  WebsitePagesPanel
} from "./components/TaskDetailPanels.jsx";
import { tasks as initialTasks } from "./data/tasks.js";
import { getTopTasks } from "./engine/priorityEngine.js";

const workdayProjects = [
  {
    name: "Brasco OS doorontwikkelen",
    task: "Brasco OS werkdag-simulatie",
    deadline: "2026-06-15",
    value: "high",
    createdAt: "2026-06-14",
    specialist: "Maak eerst een veilige testlaag: voorstel, impact, bevestiging.",
    risk: "Live opdrachten mogen niet direct doorslaggevend zijn."
  },
  {
    name: "Hydrogen netwerk voorbereiden",
    task: "Hydrogen Planning",
    specialist: "Maak de eerstvolgende afspraak of voorbereiding expliciet.",
    risk: "Deadline is al verlopen; dit kan de dag domineren."
  },
  {
    name: "Administratie en overzicht bijwerken",
    task: "CRM Follow-up",
    specialist: "Werk achterstallige follow-up kort en aantoonbaar af.",
    risk: "Overzicht veroudert als CRM en administratie blijven liggen."
  }
];

const statusLabels = {
  open: "open",
  active: "actief",
  blocked: "geblokkeerd",
  done: "klaar"
};

const actionLabels = {
  open: "resetten naar open",
  active: "starten",
  blocked: "markeren als blokkade",
  done: "afronden"
};

function createWorkdayTasks() {
  const existingTasks = initialTasks.map((task) => ({
    ...task,
    project: task.project || (task.title === "Hydrogen Planning"
      ? "Hydrogen netwerk voorbereiden"
      : task.title === "CRM Follow-up"
        ? "Administratie en overzicht bijwerken"
        : "Administratie en overzicht bijwerken"),
    status: task.status || "open"
  }));

  const hasBrascoTask = existingTasks.some((task) => task.project === "Brasco OS doorontwikkelen");

  return hasBrascoTask
    ? existingTasks
    : [
      {
        id: "workday-brasco",
        title: "Brasco OS werkdag-simulatie",
        project: "Brasco OS doorontwikkelen",
        deadline: "2026-06-15",
        value: "high",
        createdAt: "2026-06-14",
        status: "open"
      },
      ...existingTasks
    ];
}

function findTaskForCommand(command, tasks, selectedTask, topTask) {
  const normalizedCommand = command.toLowerCase();
  const matchedTask = tasks.find((task) => {
    const titleWords = task.title.toLowerCase().split(/\s+/);
    const projectWords = task.project.toLowerCase().split(/\s+/);

    return [...titleWords, ...projectWords].some((word) => (
      word.length > 3 && normalizedCommand.includes(word)
    ));
  });

  return matchedTask || selectedTask || topTask;
}

function getActionStatus(command) {
  if (["start", "begin", "active", "actief"].some((word) => command.includes(word))) return "active";
  if (["klaar", "done", "afgerond", "afrond"].some((word) => command.includes(word))) return "done";
  if (["block", "blocked", "blokkeer", "vast"].some((word) => command.includes(word))) return "blocked";
  if (["reset", "open"].some((word) => command.includes(word))) return "open";

  return null;
}

export default function App() {
  const [mode, setMode] = useState(null);
  const [activeSection, setActiveSection] = useState("Commandor");
  const [commandInput, setCommandInput] = useState("");
  const [commandResult, setCommandResult] = useState("Wacht op opdracht.");
  const [tasks, setTasks] = useState(createWorkdayTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [actionLog, setActionLog] = useState([]);
  const [focusTask, setFocusTask] = useState(null);
  const [pendingAction, setPendingAction] = useState(null);

  const openTasks = tasks.filter((task) => task.status !== "done");
  const priorityTasks = getTopTasks(openTasks);
  const topTask = priorityTasks[0] || null;
  const directTask = selectedTask && selectedTask.status !== "done" ? selectedTask : topTask;
  const waitingTasks = openTasks.filter((task) => task.id !== directTask?.id);
  const blockedTasks = tasks.filter((task) => task.status === "blocked");
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const overdueTasks = openTasks.filter((task) => task.deadline && new Date(task.deadline) < todayStart);
  const missingProjects = workdayProjects.filter((project) => (
    !tasks.some((task) => task.project === project.name)
  ));
  const taskWarnings = openTasks.filter((task) => task.warning);
  const currentProject = workdayProjects.find((project) => project.name === directTask?.project);
  const currentReason = directTask
    ? selectedTask && selectedTask.id === directTask.id && topTask?.id !== directTask.id
      ? `${directTask.title} is gekozen door de laatste opdracht of selectie.`
      : `${directTask.title} scoort nu het hoogst door deadline, waarde en leeftijd.`
    : "Er is geen open taak om uit te voeren.";
  const nextSuggestion = directTask
    ? `Test uitvoeren: ${directTask.title} ${actionLabels.active}.`
    : "Voeg eerst een open taak toe aan de werkdag.";

  const addActionLog = (message) => {
    setActionLog((currentLog) => [
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        message
      },
      ...currentLog
    ].slice(0, 6));
  };

  const selectTask = (task) => {
    setSelectedTask(task);
    setCommandResult(`Geselecteerde taak: ${task.title}`);
    addActionLog(`Taak geselecteerd: ${task.title}`);
  };

  const proposeTaskStatus = (status, task = directTask, source = "Executor") => {
    if (!task) {
      setCommandResult("Selecteer eerst een taak.");
      return;
    }

    setPendingAction({
      id: Date.now(),
      source,
      taskId: task.id,
      taskTitle: task.title,
      project: task.project,
      status,
      reason: status === "active"
        ? `${task.title} is de beste volgende uitvoeringsstap in deze simulatie.`
        : `Commandor stelt voor om ${task.title} te ${actionLabels[status]}.`,
      impact: `Status verandert pas na bevestiging naar ${statusLabels[status]}.`
    });
    setSelectedTask(task);
    setCommandResult(`Testvoorstel klaar: ${task.title} ${actionLabels[status]}.`);
    addActionLog(`Testvoorstel: ${task.title} → ${status}`);
  };

  const applyPendingAction = () => {
    if (!pendingAction) return;

    const updatedTask = tasks.find((task) => task.id === pendingAction.taskId);
    if (!updatedTask) {
      setCommandResult("Voorstel kan niet worden toegepast: taak ontbreekt.");
      return;
    }

    const nextTask = { ...updatedTask, status: pendingAction.status };

    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === pendingAction.taskId ? nextTask : task
    )));
    setSelectedTask(nextTask);
    setCommandResult(`${nextTask.title} staat nu op ${statusLabels[pendingAction.status]}.`);
    addActionLog(`Bevestigd: ${nextTask.title} → ${pendingAction.status}`);
    setPendingAction(null);
  };

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

    const command = commandInput.trim().toLowerCase();
    const actionStatus = getActionStatus(command);

    if (actionStatus) {
      const commandTask = findTaskForCommand(command, tasks, selectedTask, topTask);
      proposeTaskStatus(actionStatus, commandTask, "Commandor");
      setCommandInput("");
      return;
    }

    setCommandResult(`Commandor heeft ontvangen: "${commandInput}". Geen directe statuswijziging voorgesteld.`);
    addActionLog(`Commandor testopdracht: ${commandInput}`);
    setCommandInput("");
  };

  const menuItems = ["Commandor", "Executor", "Watcher", "Specialist", "System"];

  const panelStyle = {
    background: "#111113",
    borderRadius: 16,
    padding: 24,
    border: "1px solid #1f1f22"
  };

  const renderCommandor = () => (
    <section style={panelStyle}>
      <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
        COMMANDOR
      </div>

      <h1 style={{ fontSize: 26, marginBottom: 8 }}>
        Centrale opdrachtlaag
      </h1>

      <p style={{ color: "#777", marginBottom: 20 }}>
        Veilige opdrachtlaag: elke uitvoeringsopdracht wordt eerst een testvoorstel.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 12,
        marginBottom: 16
      }}>
        <MiniPanel label="Hoogste prioriteit" value={topTask?.title || "Geen open taak"} />
        <MiniPanel label="Direct uitvoeren" value={directTask?.title || "Geen taak"} />
        <MiniPanel label="Reden" value={currentReason} />
      </div>

      {selectedTask && (
        <div style={{
          marginBottom: 16,
          padding: 14,
          borderRadius: 12,
          background: "#18181b",
          border: "1px solid #333",
          color: "#ddd"
        }}>
          Actieve taak: {selectedTask.title} · {selectedTask.status}
        </div>
      )}

      {directTask?.summary && (
        <ProjectTaskSummary task={directTask} />
      )}

      {pendingAction && (
        <PendingActionPanel
          pendingAction={pendingAction}
          actionLabels={actionLabels}
          onApply={applyPendingAction}
          onCancel={() => {
            addActionLog(`Testvoorstel geannuleerd: ${pendingAction.taskTitle}`);
            setPendingAction(null);
          }}
        />
      )}

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
  );

  const renderExecutor = ({ fullWidth = false } = {}) => (
    <section style={{ ...panelStyle, gridColumn: fullWidth ? "1 / -1" : "auto" }}>
      <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
        EXECUTOR
      </div>

      <h2 style={{ fontSize: 20, marginBottom: 8 }}>
        {selectedTask ? selectedTask.title : "Ready"}
      </h2>

      <p style={{ color: "#777", marginBottom: 20 }}>
        {directTask
          ? `Directe taak: ${directTask.title} · ${statusLabels[directTask.status]}`
          : "Selecteer een taak in Watcher of geef een opdracht in Commandor."}
      </p>

      <div style={{
        padding: 14,
        borderRadius: 12,
        background: "#18181b",
        border: "1px solid #26262a",
        color: "#bbb",
        marginBottom: 20
      }}>
        <div style={{ color: "#777", fontSize: 13, marginBottom: 6 }}>
          Volgende stap uitvoeren
        </div>
        {nextSuggestion}
      </div>

      {directTask?.websitePages && (
        <WebsitePagesPanel task={directTask} />
      )}

      {directTask?.checklist && (
        <ChecklistPanel checklist={directTask.checklist} />
      )}

      {directTask && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
          <ExecutorButton onClick={() => proposeTaskStatus("active", directTask, "Executor")}>
            Test Start
          </ExecutorButton>
          <ExecutorButton onClick={() => proposeTaskStatus("done", directTask, "Executor")}>
            Test Klaar
          </ExecutorButton>
          <ExecutorButton onClick={() => proposeTaskStatus("blocked", directTask, "Executor")}>
            Test Blocked
          </ExecutorButton>
          <ExecutorButton onClick={() => proposeTaskStatus("open", directTask, "Executor")}>
            Test Reset
          </ExecutorButton>
          <ExecutorButton onClick={() => {
            setFocusTask(directTask);
            addActionLog(`Focus gestart: ${directTask.title}`);
          }}>
            Focus
          </ExecutorButton>
        </div>
      )}

      {pendingAction && (
        <PendingActionPanel
          pendingAction={pendingAction}
          actionLabels={actionLabels}
          onApply={applyPendingAction}
          onCancel={() => {
            addActionLog(`Testvoorstel geannuleerd: ${pendingAction.taskTitle}`);
            setPendingAction(null);
          }}
        />
      )}

      {directTask?.actionPlan && (
        <ActionPlanPanel task={directTask} />
      )}

      <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>
        Laatste acties
      </div>

      {actionLog.length === 0 ? (
        <div style={{ color: "#555" }}>Nog geen acties.</div>
      ) : (
        actionLog.map((entry) => (
          <div
            key={entry.id}
            style={{
              padding: 12,
              marginBottom: 10,
              borderRadius: 12,
              background: "#18181b",
              border: "1px solid #26262a",
              color: "#ccc"
            }}
          >
            <span style={{ color: "#666", marginRight: 8 }}>{entry.time}</span>
            {entry.message}
          </div>
        ))
      )}
    </section>
  );

  const renderWatcher = () => (
    <section style={{
      gridColumn: "1 / -1",
      display: "flex",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "wrap"
    }}>
      <NowPanel
        tasks={tasks.filter((task) => task.status !== "done")}
        selectedTaskId={selectedTask?.id}
        onSelectTask={selectTask}
      />
      <StatusPanel tasks={tasks} />
      <FlowPanel tasks={tasks.filter((task) => task.status !== "done")} onSelectTask={selectTask} />
      <section style={{ ...panelStyle, maxWidth: 500 }}>
        <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
          WATCHER
        </div>
        <h2 style={{ fontSize: 18, marginBottom: 16 }}>Risico's en blokkades</h2>
        <RiskList
          overdueTasks={overdueTasks}
          blockedTasks={blockedTasks}
          missingProjects={missingProjects}
          taskWarnings={taskWarnings}
        />
      </section>
      <section style={{ ...panelStyle, maxWidth: 500 }}>
        <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
          WAITING
        </div>
        <h2 style={{ fontSize: 18, marginBottom: 16 }}>Taken die wachten</h2>
        {waitingTasks.length === 0 ? (
          <div style={{ color: "#555" }}>Geen wachtende taken.</div>
        ) : (
          waitingTasks.map((task) => (
            <TaskLine
              key={task.id}
              task={task}
              statusLabels={statusLabels}
              onSelectTask={selectTask}
            />
          ))
        )}
      </section>
      {directTask?.percentages && (
        <section style={{ ...panelStyle, maxWidth: 620 }}>
          <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
            PERCENTAGES
          </div>
          <h2 style={{ fontSize: 18, marginBottom: 16 }}>Voortgang en complexiteit</h2>
          <ProgressMatrix items={directTask.percentages} />
        </section>
      )}
    </section>
  );

  const renderSpecialist = () => (
    <section style={{ ...panelStyle, gridColumn: "1 / -1" }}>
      <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
        SPECIALIST
      </div>

      <h2 style={{ fontSize: 20, marginBottom: 16 }}>
        Rollen
      </h2>

      {directTask?.brascoRoles && (
        <RoleMappingPanel roles={directTask.brascoRoles} />
      )}

      {directTask?.futurePlan && (
        <FuturePlanPanel items={directTask.futurePlan} />
      )}

      {workdayProjects.map((project) => (
        <div
          key={project.name}
          style={{
            padding: 12,
            marginBottom: 10,
            borderRadius: 12,
            background: "#18181b",
            border: "1px solid #26262a"
          }}
        >
          <div style={{ color: "#ddd", marginBottom: 6 }}>{project.name}</div>
          <div style={{ color: "#777", fontSize: 13 }}>{project.specialist}</div>
        </div>
      ))}
    </section>
  );

  const renderSystem = () => (
    <section style={{ ...panelStyle, color: "#777", fontSize: 13, gridColumn: "1 / -1" }}>
      <div style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
        SYSTEM
      </div>
      <h2 style={{ fontSize: 20, marginBottom: 16 }}>Live werkdag-simulatie</h2>
      <SystemLine label="Modus" value="Testlaag actief: opdrachten worden eerst voorgesteld." />
      <SystemLine label="Opslag" value="Tijdelijk in browser-state; nog niet persistent na herstart." />
      <SystemLine label="Uitvoering" value="Geen externe acties, geen Docker-run, geen commit." />
      <SystemLine label="Directe taak" value={directTask?.title || "Geen taak"} />
      <SystemLine label="Rapport" value={directTask?.reportSource || "Geen rapport gekoppeld."} />
      <SystemLine label="PDF-bron" value={directTask?.pdfSource || "Geen PDF-bron gekoppeld."} />
      <SystemLine label="Waarschuwing" value={missingProjects.length > 0 ? "Niet alle hoofdprojecten hebben data." : "Alle hoofdprojecten zijn zichtbaar."} />
      {directTask?.tags && (
        <div style={{ marginTop: 16 }}>
          <TagList tags={directTask.tags} />
        </div>
      )}
    </section>
  );

  const renderActiveSection = () => {
    if (activeSection === "Executor") return renderExecutor({ fullWidth: true });
    if (activeSection === "Watcher") return renderWatcher();
    if (activeSection === "Specialist") return renderSpecialist();
    if (activeSection === "System") return renderSystem();

    return (
      <>
        {renderCommandor()}
        {renderExecutor()}
      </>
    );
  };

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

        <FocusMode task={focusTask} onExit={() => setFocusTask(null)} />

        {/* MAIN */}
        <div style={{
          flex: 1,
          padding: 24,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 20,
          overflow: "auto"
        }}>
          {renderActiveSection()}
        </div>
      </div>
    );
  }
}
