export type activeTabT = "main" | "history";
export type currentPanelT = "main" | "history"

export interface IGlobalContext {
  isMobile: boolean;
  activeTab: activeTabT;
  setActiveTab: (tab: activeTabT) => void;
  currentPanel: currentPanelT;
  setCurrentPanel: (panel: currentPanelT) => void;
}



