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
      scanSubGroup: "contract",
      ceatedDate: "Сегодня, 14:32",
    },
    {
      id: "2",
      scanText: "Паспорт_скан.jpg",
      scanGroup: "Удостоверения личности",
      scanSubGroup: "passport_rf",
      ceatedDate: "Вчера, 09:15",
    },
    {
      id: "3",
      scanText: "Таблица расходов.xlsx",
      scanGroup: "Специальные форматы",
      scanSubGroup: "table",
      ceatedDate: "3 мая, 18:47",
    },
    {
      id: "4",
      scanText: "Чек из магазина.jpg",
      scanGroup: "Финансовые документы",
      scanSubGroup: "cash_receipt",
      ceatedDate: "3 мая, 12:20",
    },
    {
      id: "5",
      scanText: "Водительское удостоверение.pdf",
      scanGroup: "Удостоверения личности",
      scanSubGroup: "driver_license",
      ceatedDate: "2 мая, 16:05",
    },
    {
      id: "6",
      scanText: "Счёт за электричество.pdf",
      scanGroup: "Финансовые документы",
      scanSubGroup: "utility_bill",
      ceatedDate: "1 мая, 11:30",
    },
    {
      id: "7",
      scanText: "Трудовой договор.docx",
      scanGroup: "Деловые документы",
      scanSubGroup: "contract",
      ceatedDate: "30 апреля, 17:22",
    },
    {
      id: "8",
      scanText: "Медицинская справка.jpg",
      scanGroup: "Медицинские документы",
      scanSubGroup: "medical_certificate",
      ceatedDate: "29 апреля, 10:48",
    },
    {
      id: "9",
      scanText: "Конспект лекции.pdf",
      scanGroup: "Учебные материалы",
      scanSubGroup: "lecture_notes",
      ceatedDate: "28 апреля, 15:10",
    },
    {
      id: "10",
      scanText: "Счёт-фактура №2451.pdf",
      scanGroup: "Финансовые документы",
      scanSubGroup: "invoice",
      ceatedDate: "27 апреля, 09:55",
    },
    {
      id: "11",
      scanText: "Полис ОМС.jpg",
      scanGroup: "Удостоверения личности",
      scanSubGroup: "oms_policy",
      ceatedDate: "26 апреля, 14:18",
    },
    {
      id: "12",
      scanText: "Скриншот переписки.png",
      scanGroup: "Цифровой текст",
      scanSubGroup: "chat_screenshot",
      ceatedDate: "25 апреля, 19:40",
    },
    {
      id: "13",
      scanText: "Рецепт от врача.jpg",
      scanGroup: "Медицинские документы",
      scanSubGroup: "prescription",
      ceatedDate: "24 апреля, 08:25",
    },
    {
      id: "14",
      scanText: "Налоговая декларация.pdf",
      scanGroup: "Финансовые документы",
      scanSubGroup: "tax_declaration",
      ceatedDate: "23 апреля, 13:50",
    },
    {
      id: "15",
      scanText: "Курсовая работа.docx",
      scanGroup: "Учебные материалы",
      scanSubGroup: "term_paper",
      ceatedDate: "22 апреля, 16:33",
    },
    {
      id: "16",
      scanText: "Билет на самолёт.pdf",
      scanGroup: "Бытовые и повседневные",
      scanSubGroup: "transport_ticket",
      ceatedDate: "21 апреля, 11:12",
    },
    {
      id: "17",
      scanText: "Доверенность.pdf",
      scanGroup: "Деловые документы",
      scanSubGroup: "power_of_attorney",
      ceatedDate: "20 апреля, 17:08",
    },
    {
      id: "18",
      scanText: "Визитка партнёра.jpg",
      scanGroup: "Бытовые и повседневные",
      scanSubGroup: "business_card",
      ceatedDate: "19 апреля, 10:45",
    },
    {
      id: "19",
      scanText: "Результаты анализов.pdf",
      scanGroup: "Медицинские документы",
      scanSubGroup: "test_results",
      ceatedDate: "18 апреля, 14:55",
    },
    {
      id: "20",
      scanText: "QR-код от посылки.png",
      scanGroup: "Специальные форматы",
      scanSubGroup: "qr_code",
      ceatedDate: "17 апреля, 20:30",
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
