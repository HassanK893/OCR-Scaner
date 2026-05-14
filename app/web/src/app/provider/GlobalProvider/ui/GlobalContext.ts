import { createContext } from "react";
import type { IGlobalContext } from "../model/types";







export const GlobalContext = createContext <IGlobalContext>({
    isMobile: false,
    activeTab: "main",
    setActiveTab: ()=>{},
    currentPanel:"main",
    setCurrentPanel: ()=>{}
})
