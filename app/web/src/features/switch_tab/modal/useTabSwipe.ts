import { useCallback, useContext } from "react";

import type { activeTabT } from "../../../app/provider/GlobalProvider/model/types";
import { TABS } from "../../../entities/TabItem/modal/constants";
import { GlobalContext } from "../../../app/provider/GlobalProvider/ui/GlobalContext";

 

export function useTabSwipe() {
    const { activeTab, setActiveTab, setCurrentPanel } = useContext(GlobalContext);

    const switchTab = useCallback(
      (id: activeTabT) => {
        if (id === activeTab) return;

        const tabConfig = TABS.find((tab) => tab.id === id);

        if (!tabConfig) return;

        setActiveTab(id);
        setCurrentPanel(id);
      },
      [activeTab, setActiveTab, setCurrentPanel],
    );

    return { activeTab, switchTab };
}