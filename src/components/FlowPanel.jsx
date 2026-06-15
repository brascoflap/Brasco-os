function getCategory(deadline) {
  const today = new Date();
  const taskDate = new Date(deadline);

  const diff = (taskDate - today) / (1000 * 60 * 60 * 24);

  if (diff < 1) return "today";
  if (diff < 4) return "soon";
  return "later";
}

export default function FlowPanel({ tasks = [], onSelectTask }) {
  const todayTasks = [];
  const soonTasks = [];
  const laterTasks = [];

  tasks.forEach(task => {
    const category = getCategory(task.deadline);

    if (category === "today") todayTasks.push(task);
    else if (category === "soon") soonTasks.push(task);
    else laterTasks.push(task);
  });

  return (
    <div style={{
      background: "#111113",
      borderRadius: "16px",
      padding: "24px",
      border: "1px solid #1f1f22",
      maxWidth: "500px",
      marginTop: "20px"
    }}>
      <Section title="TODAY" tasks={todayTasks} onSelectTask={onSelectTask} />
      <Section title="SOON" tasks={soonTasks} onSelectTask={onSelectTask} />
      <Section title="LATER" tasks={laterTasks} onSelectTask={onSelectTask} />
    </div>
  );
}

function Section({ title, tasks, onSelectTask }) {
  if (tasks.length === 0) return null;

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{
        fontSize: "12px",
        color: "#777",
        marginBottom: "10px"
      }}>
        {title}
      </div>

      {tasks.map(task => (
        <div
          key={task.id}
          onClick={() => onSelectTask?.(task)}
          style={{
            padding: "10px",
            marginBottom: "8px",
            background: "#18181b",
            borderRadius: "8px",
            border: "1px solid #26262a",
            cursor: onSelectTask ? "pointer" : "default"
          }}
        >
          <div>{task.title}</div>
          <div style={{ color: "#666", fontSize: "12px", marginTop: "4px" }}>
            {task.status || "open"}
          </div>
        </div>
      ))}
    </div>
  );
}
