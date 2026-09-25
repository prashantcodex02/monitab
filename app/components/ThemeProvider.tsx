"use client";
import {createContext,useContext,useEffect,useState} from "react";
type Theme="light"|"dark"; const C=createContext<{theme:Theme;toggle:()=>void}>({theme:"light",toggle:()=>{}});
export function ThemeProvider({children}:{children:React.ReactNode}){const [theme,setTheme]=useState<Theme>("light"); useEffect(()=>{const saved=localStorage.getItem("monitab-theme") as Theme|null; const prefers=window.matchMedia("(prefers-color-scheme: dark)").matches; setTheme(saved|| (prefers?"dark":"light"));},[]); useEffect(()=>{document.documentElement.dataset.theme=theme; localStorage.setItem("monitab-theme",theme)},[theme]); return <C.Provider value={{theme,toggle:()=>setTheme(t=>t==="dark"?"light":"dark")}}>{children}</C.Provider>}
export const useTheme=()=>useContext(C);
