export default function StatusPanel({ tasks = [] }) {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const overdueTasks = tasks.filter((task) => task.deadline && new Date(task.deadline) < todayStart);
  const activeTasks = tasks.filter((task) => task.status === "active");
  const blockedTasks = tasks.filter((task) => task.status === "blocked");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div style={{
      background: "#111113",
      borderRadius: "16px",
      padding: "24px",
      border: "1px solid #1f1f22",
      width: "260px"
    }}>
      <div style={{
        fontSize: "14px",
        color: "#777",
        marginBottom: "10px"
      }}>
        SYSTEM
      </div>

      <h2 style={{
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
        STATUS
      </h2>

      <Stat label="Tasks" value={tasks.length} />
      <Stat label="Active" value={activeTasks.length} />
      <Stat label="Blocked" value={blockedTasks.length} />
      <Stat label="Done" value={doneTasks.length} />
      <Stat label="Overdue" value={overdueTasks.length} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{
      marginBottom: "16px",
      paddingBottom: "10px",
      borderBottom: "1px solid #1f1f22"
    }}>
      <div style={{
        fontSize: "12px",
        color: "#666"
      }}>
        {label}
      </div>

      <div style={{
        fontSize: "20px",
        fontWeight: "600"
      }}>
        {value}
      </div>
    </div>
  );
}
