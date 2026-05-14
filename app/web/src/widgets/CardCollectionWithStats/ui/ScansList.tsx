import { useContext } from "react";
import styles from "./ScansList.module.css";
import HistoryContext from "../../../app/provider/HistoryProvider/ui/HistoryContext";
import ScanCard from "../../ScanCard/ui/ScanCard";
import type { ICurrentScan } from "../../../app/provider/HistoryProvider/model/types";


interface IScansListProps {
  scans?: ICurrentScan[]; 
  limit?: number;
}

function ScansList({ limit, scans }: IScansListProps) {
  const { currentScans, scansView } = useContext(HistoryContext);
  const data = scans ?? currentScans;
  return (

      
      
      <div
        className={
          scansView === "vertical"
            ? styles.cardsListVertical
            : styles.cardsGridHorizontal
        }
      >
        {data.slice(0, limit).map((scan) => (
          <ScanCard key={scan.id} scan={scan} viewMode={scansView} />
        ))}
      </div>
  
  );
}

export default ScansList;
