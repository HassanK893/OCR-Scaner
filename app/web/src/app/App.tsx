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

export default function App() {
  return (
    <>
      <ConfigProvider colorScheme="dark" transitionMotionEnabled={false}>
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
