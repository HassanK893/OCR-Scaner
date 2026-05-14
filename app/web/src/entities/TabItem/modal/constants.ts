import type { TabConfig } from "./types";
import {
  Icon28HomeOutline,
  Icon28HistoryBackwardOutline,
} from "@vkontakte/icons";

export const TABS: TabConfig[] = [
  {
    id: "main",
    icon: Icon28HomeOutline,
    label: "Главная",
  },
  {
    id: "history",
    icon: Icon28HistoryBackwardOutline,
    label: "История",
  },
];