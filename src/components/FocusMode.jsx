export default function FocusMode({ task, onExit }) {
  if (!task) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        {task.title}
      </h1>

      <p style={{ color: "#888", marginBottom: "40px" }}>
        Focus Mode Active
      </p>

      <button
        onClick={onExit}
        style={{
          padding: "10px 20px",
          background: "#222",
          border: "1px solid #444",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Exit Focus
      </button>
    </div>
  );
}