import { Tabbar } from "@vkontakte/vkui";
import { useContext } from "react";

import styles from "./Footer.module.css";
import { useTabSwipe } from "../../../features/switch_tab/modal/useTabSwipe";
import { TABS } from "../../../entities/TabItem/modal/constants";
import TabItem from "../../../entities/TabItem/ui/TabItem";
import { GlobalContext } from "../../../app/provider/GlobalProvider/ui/GlobalContext";

function Footer() {
  const { isMobile } = useContext(GlobalContext);
  const { activeTab, switchTab } = useTabSwipe();
  if (!isMobile) return null;
  return (
    <footer>
      <Tabbar className={styles.tabbarConteyner}>
        {TABS.map((tab) => (
          <TabItem
            id={tab.id}
            switchTab={switchTab}
            label={tab.label}
            icon={tab.icon}
            activeTab={activeTab}
          />
        ))}
      </Tabbar>
    </footer>
  );
}

export default Footer;
