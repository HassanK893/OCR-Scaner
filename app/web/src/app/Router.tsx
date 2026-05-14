import { Panel, View } from "@vkontakte/vkui";
import MainPage from "../pages/MainPage/ui/MainPage";

import { useContext } from "react";
import HistoryPage from "../pages/HistoryPage/ui/HistoryPage";
import { GlobalContext } from "./provider/GlobalProvider/ui/GlobalContext";
import HistoryProvider from "./provider/HistoryProvider/ui/HistoryProvider";

function Router(){
   const { currentPanel } = useContext(GlobalContext);
    return (
      <>
        <View
          id="default"
          style={{ marginTop: "25px" }}
          activePanel={currentPanel}
        >
          <Panel id="main">
            <MainPage />
          </Panel>
          <Panel id="history">
            <HistoryProvider>
              <HistoryPage />
            </HistoryProvider>
          </Panel>
        </View>
      </>
    );
}

export default Router;
