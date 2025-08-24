import SocialLinks from "../components/SocialLinks";
import styles from "./UnderConstruction.module.css";

export default function UnderConstruction() {
  return (
    <main className={styles.constructionSection}>
      <div className={styles.messageWrapper}>
        Rome wasn't built in a day... <br /> but my portfolio will be ready
        <span className="gradient-txt"> soon enough</span>.
      </div>
      <SocialLinks />
    </main>
  );
}
