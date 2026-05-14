import { TabbarItem, Text } from "@vkontakte/vkui";
import styles from "./TabItem.module.css";
import type { TabConfig } from "../modal/types";
import type { activeTabT } from "../../../app/provider/GlobalProvider/model/types";

export interface ITabItemProps extends TabConfig {
  switchTab: (id: activeTabT) => void;
  activeTab: activeTabT;
}

function TabItem({ id, switchTab, icon: Icon, label, activeTab }: ITabItemProps) {
  return (
    <TabbarItem
      selected={activeTab == id}
      onClick={() => {
        switchTab(id);
      }}
    >
      <div className={styles.tabbar}>
        <div
          className={`${styles.tabbarIconConteyner} ${activeTab == id && styles.tabbarIconMain}`}
        >
          <Icon className={styles.tabbarIcon} />
        </div>
        <Text>{label}</Text>
      </div>
    </TabbarItem>
  );
}

export default TabItem
