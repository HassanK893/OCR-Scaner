import { Icon28ScanViewfinderOutline } from "@vkontakte/icons";
import { PanelHeader, Tabs, TabsItem } from "@vkontakte/vkui";
import styles from "./Header.module.css";
import { useContext } from "react";

import { useTabSwipe } from "../../../features/switch_tab/modal/useTabSwipe";
import { TABS } from "../../../entities/TabItem/modal/constants";
import { GlobalContext } from "../../../app/provider/GlobalProvider/ui/GlobalContext";

function Header() {
  const { isMobile } = useContext(GlobalContext);
  const { activeTab, switchTab } = useTabSwipe();
  const logoContent = (
    <div className={styles.logoContyner}>
      <div
        style={{
          width: 34,
          height: 34,
          background: "linear-gradient(135deg, #0077FF, #0059CC)",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon28ScanViewfinderOutline fill="#fff" width={20} height={20} />
      </div>
      <span className={styles.logoText}>TextScan</span>
    </div>
  );

  return (
    <PanelHeader before={!isMobile ? logoContent : null}>
      {isMobile ? (
        <div className={styles.mobileLogoWrapper}>{logoContent}</div>
      ) : (
        <Tabs>
          <TabsItem
            selected={activeTab === TABS[0].id}
            onClick={() => {
              switchTab(TABS[0].id);
            }}
          >
            Главная
          </TabsItem>
          <TabsItem
            selected={activeTab === TABS[1].id}
            onClick={() => {
              switchTab(TABS[1].id);
            }}
          >
            История
          </TabsItem>
        </Tabs>
      )}
    </PanelHeader>
  );
}

export default Header;
