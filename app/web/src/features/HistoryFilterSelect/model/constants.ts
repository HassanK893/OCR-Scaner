import type { Option } from "../../../shared/CustomSelect/model/types";

export const documentCategories = new Map<string, Option[]>([
  [
    "Финансовые документы",
    [
      { label: "Все", value: "all" },
      { label: "Кассовый чек", value: "cash_receipt" },
      { label: "Счёт / Инвойс", value: "invoice" },
      { label: "Квитанция ЖКХ", value: "utility_bill" },
      { label: "Банковская выписка", value: "bank_statement" },
      { label: "Налоговая декларация", value: "tax_declaration" },
    ],
  ],
  [
    "Удостоверения личности",
    [
      { label: "Все", value: "all" },
      { label: "Паспорт РФ", value: "passport_rf" },
      { label: "Водительское удостоверение", value: "driver_license" },
      { label: "СНИЛС", value: "snils" },
      { label: "Полис ОМС", value: "oms_policy" },
      { label: "Студенческий / пропуск", value: "student_id" },
    ],
  ],
  [
    "Деловые документы",
    [
      { label: "Все", value: "all" },
      { label: "Договор / контракт", value: "contract" },
      { label: "Заявление", value: "application" },
      { label: "Деловое письмо", value: "business_letter" },
      { label: "Акт выполненных работ", value: "completion_act" },
      { label: "Доверенность", value: "power_of_attorney" },
      { label: "Справка", value: "certificate" },
    ],
  ],
  [
    "Учебные материалы",
    [
      { label: "Все", value: "all" },
      { label: "Конспект / лекция", value: "lecture_notes" },
      { label: "Реферат / курсовая", value: "term_paper" },
      { label: "Экзаменационный билет", value: "exam_ticket" },
      { label: "Расписание", value: "schedule" },
    ],
  ],
  [
    "Медицинские документы",
    [
      { label: "Все", value: "all" },
      { label: "Рецепт", value: "prescription" },
      { label: "Медицинская справка", value: "medical_certificate" },
      { label: "Результаты анализов", value: "test_results" },
    ],
  ],
  [
    "Бытовые и повседневные",
    [
      { label: "Все", value: "all" },
      { label: "Визитка", value: "business_card" },
      { label: "Почтовый адрес / этикетка", value: "postal_label" },
      { label: "Меню ресторана", value: "restaurant_menu" },
      { label: "Этикетка товара", value: "product_label" },
      { label: "Билет (транспорт)", value: "transport_ticket" },
      { label: "Ценник", value: "price_tag" },
    ],
  ],
  [
    "Цифровой текст",
    [
      { label: "Все", value: "all" },
      { label: "Скриншот переписки", value: "chat_screenshot" },
      { label: "Скриншот сайта", value: "website_screenshot" },
      { label: "Код / терминал", value: "code_terminal" },
      { label: "Скриншот приложения", value: "app_screenshot" },
    ],
  ],
  [
    "Специальные форматы",
    [
      { label: "Все", value: "all" },
      { label: "Таблица / расписание", value: "table" },
      { label: "QR-код", value: "qr_code" },
      { label: "Штрих-код", value: "barcode" },
      { label: "Рукописный текст", value: "handwritten_text" },
      { label: "Текст на иностранном языке", value: "foreign_language_text" },
    ],
  ],
]);
