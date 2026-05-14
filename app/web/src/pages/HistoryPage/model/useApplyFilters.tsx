import { useContext, useEffect } from "react";
import HistoryContext from "../../../app/provider/HistoryProvider/ui/HistoryContext";
import type { ICurrentScan } from "../../../app/provider/HistoryProvider/model/types";
import { matchedTextFiltered } from "../lib/historyPageHelpers";

interface IUseApplyFiltersProps {
  recentScans: ICurrentScan[];
}
function useApplyFilters({ recentScans }: IUseApplyFiltersProps) {
  const { setCurrentScans, currentFilters } =
    useContext(HistoryContext);

  useEffect(() => {
    let temporaryScansKeaper: ICurrentScan[];
    if (currentFilters.mainFilter == "all") {
        
      temporaryScansKeaper = matchedTextFiltered(
        currentFilters.matchedTextFilter,
        recentScans,
      );
    setCurrentScans(temporaryScansKeaper);
     
    }
    // else{
        // 
    // }
     
  }, [currentFilters]);



  
}
export default useApplyFilters;
