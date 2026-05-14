import type { ICurrentScan } from "../../../app/provider/HistoryProvider/model/types";

export function matchedTextFiltered(
  searchString: string,
  scans: ICurrentScan[],
): ICurrentScan[] {
  if (!searchString) return scans;
  return scans.filter((s) => s.scanText.includes(searchString));
}
