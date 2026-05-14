import { Group } from "@vkontakte/vkui";
import styles from "./HistoryPage.module.css";
import EmptyPage from "../../../widgets/EmptyPage/ui/EmptyPage.tsx";
import SummaryBlock from "../../../widgets/SummaryBlock/ui/SummaryBlock.tsx";
import HistoryContext from "../../../app/provider/HistoryProvider/ui/HistoryContext.ts";
import { useContext } from "react";
import Filters from "../../../widgets/Filters/ui/Filters.tsx";
import type { ICurrentScan } from "../../../app/provider/HistoryProvider/model/types.ts";
import useApplyFilters from "../model/useApplyFilters.tsx";
import ScansList from "../../../widgets/CardCollectionWithStats/ui/ScansList.tsx";
function HistoryPage() {
  const recentScans: ICurrentScan[] = [
    {
      id: "1",
      scanText: "Договор аренды.pdf",
      scanGroup: "Деловые документы",
      scanSubGroup: "Договоры",
      ceatedDate: "Сегодня, 14:32",
    },
    {
      id: "2",
      scanText: "Паспорт_скан.jpg",
      scanGroup: "Удостоверения личности",
      scanSubGroup: "Паспорт",
      ceatedDate: "Вчера, 09:15",
    },
    {
      id: "3",
      scanText: "Таблица расходов.xlsx",
      scanGroup: "Финансовые документы",
      scanSubGroup: "Учёт расходов",
      ceatedDate: "3 мая, 18:47",
    },
    {
      id: "4",
      scanText: "Таблица расходов.xlsx",
      scanGroup: "Финансовые документы",
      scanSubGroup: "Учёт расходов",
      ceatedDate: "3 мая, 18:47",
    },
  ];
  type Option = {
    value: string; // уникальный идентификатор (например, для отправки на сервер)
    label: string; // то, что видит пользователь
  };
  const cityOptions: Option[] = [
    { label: "Все", value: "all" },
    { label: "Финансовые документы", value: "Финансовые документы" },
    { label: "Удостоверения личности", value: "Удостоверения личности" },
    { label: "Деловые документы", value: "Деловые документы" },
    { label: "Учебные материалы", value: "Учебные материалы" },
    { label: "Медицинские документы", value: "Медицинские документы" },
    { label: "Бытовые и повседневные", value: "Бытовые и повседневные" },
    {
      label: "Цифровой текст (фото экранов)",
      value: "Цифровой текст (фото экранов)",
    },
    { label: "Специальные форматы", value: "Специальные форматы" },
  ];

  const { scansView, currentScans } = useContext(HistoryContext);

  useApplyFilters({ recentScans });

  return (
    <main style={{ marginTop: "40px" }}>
      {recentScans.length !== 0 ? (
        <Group mode={"plain"}>
          {/* верхняя часть страницы */}
          <SummaryBlock />
          {/* фильтры селектов */}
          <Filters options={cityOptions} />

          <div className={styles.listHeader}>
            <span className={styles.resultsCount}>
              Найдено документов: {currentScans.length}
            </span>
            <span className={styles.sortLabel}>↓ Сначала новые</span>
          </div>
          <div />
          <ScansList/>
        </Group>
      ) : (
        <EmptyPage />
      )}
    </main>
  );
}

export default HistoryPage;
