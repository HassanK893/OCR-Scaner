import { Caption, Headline } from "@vkontakte/vkui";
import styles from "./ScanStats.module.css"
import { stats } from "../model/constanrs";
function ScansStats(){
return (
  <div className={styles.statsContainer}>
    {stats.map(({ value, label }) => (
      <div key={label} className={styles.statCard}>
        <Headline weight="1">{value}</Headline>
        <Caption className={styles.statLabel}>{label}</Caption>
      </div>
    ))}
  </div>
);
}

export default ScansStats