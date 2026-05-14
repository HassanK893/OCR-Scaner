import { createContext } from "react";
import type { IHistoryContext } from "../model/types";

const HistoryContext = createContext<IHistoryContext>({
  currentFilters: {
    mainFilter: "all",
    subFilter: "all",
    matchedTextFilter: "",
    dateDirection: "start",
  },
  setCurrentFilters: () => {},
  currentScans: [],
  setCurrentScans: () => {},
  scansView: "vertical",
  setScansView: () => {},
});

export default HistoryContext;
