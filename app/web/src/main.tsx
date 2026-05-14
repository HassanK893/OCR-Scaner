import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import "./main.css"
import GlobalProvider from './app/provider/GlobalProvider/ui/GlobalProvider.tsx';
import bridge from '@vkontakte/vk-bridge';



// иницилизация 
bridge.send("VKWebAppInit");

createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GlobalProvider>
);
