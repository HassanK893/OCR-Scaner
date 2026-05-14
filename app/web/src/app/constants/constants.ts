import { createHashRouter } from "@vkontakte/vk-mini-apps-router"

const router = createHashRouter([
  {
    path: "/",
    panel: "main",
    view: "default",
  },
  {
    path: "/history",
    panel: "history",
    view: "default",
  },
]);

export default router