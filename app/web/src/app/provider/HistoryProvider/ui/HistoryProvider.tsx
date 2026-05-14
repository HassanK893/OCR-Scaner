import { useMemo, useState, type ReactNode } from "react";

import type {
  ICurrentFilters,
  ICurrentScan,
  TScansView,
} from "../model/types";
import HistoryContext from "./HistoryContext";

interface IHistoryProviderProps {
  children: ReactNode;
}

function HistoryProvider({ children }: IHistoryProviderProps) {
  const [currentFilters, setCurrentFilters] = useState<ICurrentFilters>({
    mainFilter: "all",
    subFilter: "all",
    matchedTextFilter: "",
    dateDirection: "start",
  });
  const [currentScans, setCurrentScans] = useState<ICurrentScan[] >([]);
  const [scansView, setScansView] = useState<TScansView>("horizontal");
  const contextValue = useMemo(
    () => ({
      currentFilters,
      setCurrentFilters,
      currentScans,
      setCurrentScans,
      scansView,
      setScansView,
    }),
    [currentFilters, currentScans, scansView],
  );
  return <HistoryContext value={contextValue}>{children}</HistoryContext>;
}
export default HistoryProvider;
