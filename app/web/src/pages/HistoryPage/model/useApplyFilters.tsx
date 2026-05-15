import { useContext, useEffect } from "react";
import HistoryContext from "../../../app/provider/HistoryProvider/ui/HistoryContext";
import { matchedTextFiltered } from "../lib/historyPageHelpers";
import type { ICurrentScan } from "../../../app/provider/HistoryProvider/model/types";

interface IUseApplyFiltersProps {
  recentScans: ICurrentScan[];
}

function useApplyFilters({ recentScans }: IUseApplyFiltersProps) {
  const { setCurrentScans, currentFilters } = useContext(HistoryContext);

 useEffect(() => {
   console.log("Filters:", currentFilters);
   console.log("All sub groups in data:", [
     ...new Set(recentScans.map((s) => s.scanSubGroup)),
   ]);
   let filtered = recentScans;

   // 1. Фильтр по основной группе
   if (currentFilters.mainFilter !== "all") {
     filtered = filtered.filter(
       (scan) => scan.scanGroup === currentFilters.mainFilter,
     );

     // 2. Фильтр по подгруппе — только если выбрана конкретная группа
     if (currentFilters.subFilter !== "all") {
       filtered = filtered.filter(
         (scan) => scan.scanSubGroup === currentFilters.subFilter,
       );
     }
   }

   // 3. Фильтр по тексту — применяется ко всем сканам, что остались
   filtered = matchedTextFiltered(currentFilters.matchedTextFilter, filtered);

   setCurrentScans(filtered);
 }, [currentFilters]);
}

export default useApplyFilters;
