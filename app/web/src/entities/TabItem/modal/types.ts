import type { activeTabT } from "../../../app/provider/GlobalProvider/model/types";

export interface TabConfig {
  id: activeTabT;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

