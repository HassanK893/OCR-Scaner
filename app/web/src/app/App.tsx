import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./styles/globals.css";
import router from "./constants/constants.ts";
import BaseLayout from "./BaseLayout/BaseLayout.tsx";

import {  useAppearance} from "@vkontakte/vk-bridge-react";





export default function App() {
 const appearance = useAppearance() || "dark"; // 'light' | 'dark' | null 

  return (
    <>
      <ConfigProvider colorScheme={appearance} transitionMotionEnabled={false}>
        <AdaptivityProvider>
          <AppRoot>
            <RouterProvider router={router}>
              <SplitLayout>
                <SplitCol>
                  <BaseLayout />
                </SplitCol>
              </SplitLayout>
            </RouterProvider>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </>
  );
}
