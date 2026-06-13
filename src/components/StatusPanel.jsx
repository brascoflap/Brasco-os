export default function StatusPanel() {
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

      <Stat label="Projects" value="12" />
      <Stat label="Domains" value="183" />
      <Stat label="Tasks" value="24" />
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