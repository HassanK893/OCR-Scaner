import styles from "./SummaryBlock.module.css";
import ScansStats from "../../../features/ScanStats/ui/ScanStats";
import ToggleViewMode from "../../../features/ToggleViewMode/ui/ToggleViewMode";








function SummaryBlock() {
  return (
    <div>
      <div className={styles.headerRow}>
        <h2 className={styles.pageTitle}>История сканов</h2>
        <ToggleViewMode/>
      </div>
      <ScansStats />
    </div>
  );
}

export default SummaryBlock;
