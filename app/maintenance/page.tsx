export default function MaintenancePage() {
  return (
    <div
      style={{
        minHeight: "100dvh", // better than 100vh for mobile
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>🚧 Website Under Maintenance</h1>

      <p>We are working to improve your experience.</p>

      <p>Please check back later.</p>
    </div>
  );
}