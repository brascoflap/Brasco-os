export function ExecutorButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid #444",
        background: "#222226",
        color: "white",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}

export function MiniPanel({ label, value }) {
  return (
    <div style={{
      padding: 12,
      borderRadius: 12,
      background: "#18181b",
      border: "1px solid #26262a"
    }}>
      <div style={{ color: "#666", fontSize: 12, marginBottom: 6 }}>{label}</div>
      <div style={{ color: "#ddd", fontSize: 14 }}>{value}</div>
    </div>
  );
}

export function PendingActionPanel({ pendingAction, actionLabels, onApply, onCancel }) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      background: "#1d1b16",
      border: "1px solid #5d4a20",
      color: "#ddd",
      marginBottom: 20
    }}>
      <div style={{ color: "#d8b45f", fontSize: 13, marginBottom: 8 }}>
        Testvoorstel wacht op bevestiging
      </div>
      <div style={{ marginBottom: 6 }}>{pendingAction.taskTitle}</div>
      <div style={{ color: "#aaa", fontSize: 13, marginBottom: 6 }}>
        Actie: {actionLabels[pendingAction.status]}
      </div>
      <div style={{ color: "#777", fontSize: 13, marginBottom: 12 }}>
        {pendingAction.reason} {pendingAction.impact}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <ExecutorButton onClick={onApply}>Bevestig</ExecutorButton>
        <ExecutorButton onClick={onCancel}>Annuleer</ExecutorButton>
      </div>
    </div>
  );
}

export function ProjectTaskSummary({ task }) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      background: "#18181b",
      border: "1px solid #26262a",
      color: "#ccc",
      marginBottom: 16
    }}>
      <div style={{ color: "#777", fontSize: 13, marginBottom: 8 }}>
        Projecttaak
      </div>
      <div style={{ color: "#eee", marginBottom: 8 }}>{task.project}</div>
      <div style={{ color: "#999", fontSize: 13, marginBottom: 10 }}>{task.summary}</div>
      {task.url && (
        <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>
          URL: {task.url}
        </div>
      )}
      {task.nextAction && (
        <div style={{ color: "#ddd", fontSize: 13, marginBottom: 10 }}>
          Eerstvolgende actie: {task.nextAction}
        </div>
      )}
      {task.tags && <TagList tags={task.tags} />}
    </div>
  );
}

export function TagList({ tags }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            padding: "5px 8px",
            borderRadius: 999,
            background: "#202026",
            border: "1px solid #303038",
            color: "#aaa",
            fontSize: 12
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function WebsitePagesPanel({ task }) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      background: "#18181b",
      border: "1px solid #26262a",
      color: "#ccc",
      marginBottom: 20
    }}>
      <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>
        Website-structuur
      </div>
      {task.websitePages.map((page) => (
        <div key={page.name} style={{ marginBottom: 10 }}>
          <div style={{ color: "#eee" }}>{page.name}</div>
          <div style={{ color: "#777", fontSize: 13 }}>{page.goal}</div>
        </div>
      ))}
      {task.chatbox && (
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #26262a" }}>
          <div style={{ color: "#eee", marginBottom: 6 }}>Chatbox</div>
          <div style={{ color: "#777", fontSize: 13 }}>
            {task.chatbox.requirements.join(" · ")}
          </div>
        </div>
      )}
    </div>
  );
}

export function ProgressMatrix({ items }) {
  return items.map((item) => (
    <div
      key={item.item}
      style={{
        padding: 12,
        marginBottom: 10,
        borderRadius: 12,
        background: "#18181b",
        border: "1px solid #26262a"
      }}
    >
      <div style={{ color: "#ddd", marginBottom: 6 }}>{item.item}</div>
      <div style={{ color: "#777", fontSize: 13 }}>
        Voortgang: {item.progress}% · Complexiteit: {item.complexity}%
      </div>
    </div>
  ));
}

export function ActionPlanPanel({ task }) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      background: "#18181b",
      border: "1px solid #26262a",
      color: "#ccc",
      marginBottom: 20
    }}>
      <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>
        Stap-voor-stap actieplan
      </div>
      {task.actionPlan.map((step) => (
        <div key={`${step.phase}-${step.task}`} style={{ marginBottom: 14 }}>
          <div style={{ color: "#eee" }}>{step.phase} · {step.role}</div>
          <div style={{ color: "#ccc", fontSize: 13 }}>{step.task}</div>
          <div style={{ color: "#777", fontSize: 12 }}>
            Complexiteit {step.complexity}% · Voortgang {step.progress}% · Afhankelijkheden: {step.dependencies}
          </div>
          <div style={{ color: "#aaa", fontSize: 12 }}>
            Eerstvolgende actie: {step.nextAction}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ChecklistPanel({ checklist }) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      background: "#18181b",
      border: "1px solid #26262a",
      color: "#ccc",
      marginBottom: 20
    }}>
      <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>
        Benodigde data checklist
      </div>
      <ChecklistGroup title="Serverdata nodig" items={checklist.serverData} />
      <ChecklistGroup title="Gebruikers/rechten nodig" items={checklist.users} />
      <ChecklistGroup title="AI/agents data nodig" items={checklist.aiAgents} />
    </div>
  );
}

function ChecklistGroup({ title, items }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ color: "#eee", marginBottom: 6 }}>{title}</div>
      {items.map((item) => (
        <div key={item} style={{ color: "#777", fontSize: 13, marginBottom: 4 }}>
          {item}
        </div>
      ))}
    </div>
  );
}

export function RoleMappingPanel({ roles }) {
  return (
    <div style={{ marginBottom: 18 }}>
      {Object.entries(roles).map(([role, description]) => (
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
          <div style={{ color: "#eee", marginBottom: 6 }}>{role}</div>
          <div style={{ color: "#777", fontSize: 13 }}>{description}</div>
        </div>
      ))}
    </div>
  );
}

export function FuturePlanPanel({ items }) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      background: "#18181b",
      border: "1px solid #26262a",
      color: "#ccc",
      marginBottom: 18
    }}>
      <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>
        Toekomstplan
      </div>
      {items.map((item) => (
        <div key={item} style={{ marginBottom: 8 }}>{item}</div>
      ))}
    </div>
  );
}

export function RiskList({ overdueTasks, blockedTasks, missingProjects, taskWarnings }) {
  const risks = [
    ...overdueTasks.map((task) => `${task.title} is over deadline.`),
    ...blockedTasks.map((task) => `${task.title} is geblokkeerd.`),
    ...missingProjects.map((project) => `${project.name} mist gekoppelde data.`),
    ...taskWarnings.map((task) => `${task.title}: ${task.warning}`)
  ];

  if (risks.length === 0) {
    return <div style={{ color: "#555" }}>Geen directe risico's zichtbaar.</div>;
  }

  return risks.map((risk) => (
    <div
      key={risk}
      style={{
        padding: 12,
        marginBottom: 10,
        borderRadius: 12,
        background: "#18181b",
        border: "1px solid #3a2a2a",
        color: "#ccc"
      }}
    >
      {risk}
    </div>
  ));
}

export function TaskLine({ task, statusLabels, onSelectTask }) {
  return (
    <div
      onClick={() => onSelectTask(task)}
      style={{
        padding: 12,
        marginBottom: 10,
        borderRadius: 12,
        background: "#18181b",
        border: "1px solid #26262a",
        color: "#ccc",
        cursor: "pointer"
      }}
    >
      <div>{task.title}</div>
      <div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>
        {task.project} · {statusLabels[task.status]}
      </div>
    </div>
  );
}

export function SystemLine({ label, value }) {
  return (
    <div style={{
      padding: "10px 0",
      borderBottom: "1px solid #1f1f22"
    }}>
      <span style={{ color: "#666", display: "inline-block", minWidth: 110 }}>{label}</span>
      <span style={{ color: "#ccc" }}>{value}</span>
    </div>
  );
}
