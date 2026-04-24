import Image from "next/image";
import styles from "./maintenance.module.css";

export default function MaintenancePage() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        <Image
          src="/logo.png"
          alt="Tropical Ceylon"
          width={80}
          height={80}
          className={styles.logo}
          priority
        />

        <h1 className={styles.title}>Website Under Maintenance</h1>

        <p className={styles.description}>
          We are working to improve your experience.
          <br />
          We’ll be back soon 🌴
        </p>

        <div className={styles.loader}>
          <div></div>
        </div>

        <span className={styles.footer}>
          Tropical Ceylon © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}