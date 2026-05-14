import React, { useContext } from "react";
import {
  Icon28ListBulletSquareOutline,
  Icon28GridSquareOutline,
} from "@vkontakte/icons";

import styles from "./ToggleViewMode.module.css";

import HistoryContext from "../../../app/provider/HistoryProvider/ui/HistoryContext";






const ToggleViewMode = () => {

      const { scansView, setScansView } = useContext(HistoryContext);
  return (
    <div className={styles.viewToggle}>
      <Icon28ListBulletSquareOutline
        className={
          scansView === "vertical" ? styles.viewIconActive : styles.viewIcon
        }
        onClick={() => setScansView("vertical")}
      />
      <Icon28GridSquareOutline
        className={
          scansView === "horizontal" ? styles.viewIconActive : styles.viewIcon
        }
        onClick={() => setScansView("horizontal")}
      />
    </div>
  );
};

export default ToggleViewMode;
