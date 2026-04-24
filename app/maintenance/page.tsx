import styles from "./maintenance.module.css";

export default function MaintenancePage() {
  return (
    <div className={styles.container}>
      <h1>🚧 Website Under Maintenance</h1>
      <p>We are working to improve your experience.</p>
      <p>Please check back later.</p>
    </div>
  );
}