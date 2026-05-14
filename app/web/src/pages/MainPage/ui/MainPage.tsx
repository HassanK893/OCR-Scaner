import {
  Group
} from "@vkontakte/vkui";
import styles from "./MainPage.module.css";
import ScanBanner from "../../../widgets/ScanBanner/ui/ScanBanner";
import ScanCard from "../../../widgets/ScanCard/ui/ScanCard";
import { useContext, useState} from "react";

import QuotaBar from "../../../widgets/QuotaBar/ui/QuotaBar";
import { GlobalContext } from "../../../app/provider/GlobalProvider/ui/GlobalContext";
import { ScanDropZone } from "../../../widgets/ScanDropZone/ui/ScanDropZone";


function MainPage() {
  const recentScans = [
    {
      id: 1,
      name: "Договор аренды.pdf",
      date: "Сегодня, 14:32",
      type: "PDF",
      color: "#E64646",
      bg: "linear-gradient(135deg, #fff5f5, #ffe8e8)",
    },
    {
      id: 2,
      name: "Паспорт_скан.jpg",
      date: "Вчера, 09:15",
      type: "JPG",
      color: "#F2994A",
      bg: "linear-gradient(135deg, #fff8ed, #ffeed4)",
    },
    {
      id: 3,
      name: "Таблица расходов.xlsx",
      date: "3 мая, 18:47",
      type: "XLSX",
      color: "#27AE60",
      bg: "linear-gradient(135deg, #f0faf0, #ddf5dd)",
    },
  ];
  const { isMobile,setActiveTab,setCurrentPanel } = useContext(GlobalContext);
  const [file, setFile] = useState<File | null>(null);
  return (
    <main>
      <Group
        className={styles.scanBannerConteyner}
        mode={isMobile ? undefined : "plain"}
      >
        <ScanDropZone onFileSelected={(f) => setFile(f)} />
      </Group>
      <Group mode={!isMobile ? "card" : undefined}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Последние сканы</span>
          <a
            onClick={() => {
              setActiveTab("history");
              setCurrentPanel("history");
            }}
            className={styles.sectionLink}
          >
            Все
          </a>
        </div>
        <div className={styles.cardsRow}>
          {recentScans.map((scan) => (
            <ScanCard key={scan.id} scan={scan} viewMode="horizontal" />
          ))}
        </div>
      </Group>
      <Group mode="plain">
        <QuotaBar />
      </Group>
    </main>
  );
}

export default MainPage;
