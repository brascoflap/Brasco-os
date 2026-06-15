import { getTopTasks } from "../engine/priorityEngine";

export default function NowPanel({ tasks = [], selectedTaskId, onSelectTask }) {
  const topTasks = getTopTasks(tasks);

  return (
    <div style={{
      background: "#111113",
      borderRadius: "16px",
      padding: "24px",
      border: "1px solid #1f1f22",
      maxWidth: "500px"
    }}>
      <div style={{
        fontSize: "14px",
        color: "#777",
        marginBottom: "10px"
      }}>
        PRIORITY
      </div>

      <h2 style={{
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
        NU
      </h2>

      {topTasks.length === 0 ? (
        <div style={{ color: "#555" }}>Geen open prioriteiten.</div>
      ) : (
        topTasks.map((task, index) => (
          <div
            key={task.id}
            onClick={() => onSelectTask(task)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#222";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = selectedTaskId === task.id ? "#24242a" : "#18181b";
            }}
            style={{
              padding: "14px",
              marginBottom: "10px",
              background: selectedTaskId === task.id ? "#24242a" : "#18181b",
              borderRadius: "12px",
              border: selectedTaskId === task.id ? "1px solid #555" : "1px solid #26262a",
              cursor: "pointer",
              transition: "0.2s"
            }}
          >
            <div style={{
              fontWeight: "500",
              marginBottom: "4px"
            }}>
              {index + 1}. {task.title}
            </div>

            <div style={{
              fontSize: "12px",
              color: "#666"
            }}>
              Score: {task.score} · {task.status || "open"}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
