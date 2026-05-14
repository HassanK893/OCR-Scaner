import { useEffect, useMemo, useState, type ReactNode } from "react";
import { GlobalContext } from "./GlobalContext";
import type { activeTabT, currentPanelT, IGlobalContext } from "../model/types";

interface IGlobalProviderProps {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProviderProps) {
  const [isMobile, setIsMobile] = useState(() => {
    const initial = window.innerWidth <= 765;
    console.log("PROVIDER INIT, isMobile:", initial);
    return initial;
  });
  const [activeTab, setActiveTab] = useState<activeTabT>("main");
  const [currentPanel, setCurrentPanel] = useState<currentPanelT>("main");

  useEffect(() => {
    console.log("PROVIDER EFFECT MOUNTED");
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const width = window.innerWidth;
        const newValue = width <= 765;
        console.log("RESIZE:", width, "isMobile:", newValue);
        setIsMobile(newValue);
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("PROVIDER EFFECT CLEANUP");
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  console.log("PROVIDER RENDER, isMobile:", isMobile);

  const contextValue: IGlobalContext = useMemo(
    () => ({
      isMobile,
      activeTab,
      setActiveTab,
      currentPanel,
      setCurrentPanel,
    }),
    [isMobile, currentPanel, activeTab],
  );

  return <GlobalContext value={contextValue}>{children}</GlobalContext>;
}
export default GlobalProvider;
