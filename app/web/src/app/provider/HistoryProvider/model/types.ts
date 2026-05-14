import type React from "react";

export type TScansView = "horizontal" | "vertical";
export type TDateDirection = "start" | "end";
export type TFileType = ".txt"|".json"|".csv"|".html"|".htm"|".css"|".js"|".mjs"|".cjs"|".ts"|".jsx"|".tsx"|".xml"|".svg"|".md"|".yaml"|".yml"|".log"|".ini"|".cfg"|".conf"|".sh"|".bat"|".ps1"|".py"|".rb"|".php"|".sql"|".toml"|".plist"


export interface ICurrentScan{
id: string;
// userId: number;
scanText: string;
// imageLink: string;
scanGroup: string;
scanSubGroup: string;
ceatedDate: string;
// fileType?: TFileType;
// favorite: boolean;
}
export interface ICurrentFilters  {
  mainFilter: string;
  subFilter: string;
  matchedTextFilter: string;
  dateDirection: TDateDirection
};

export interface IHistoryContext {
  currentFilters: ICurrentFilters;
  setCurrentFilters: React.Dispatch<React.SetStateAction<ICurrentFilters>>;
  currentScans: ICurrentScan[];
  setCurrentScans: React.Dispatch<React.SetStateAction<ICurrentScan[]>>;
  scansView: TScansView;
  setScansView: React.Dispatch<React.SetStateAction<TScansView>>;
}
