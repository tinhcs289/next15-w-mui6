import dynamic from "next/dynamic";

const MUIV6ThemeProvider = dynamic(() => import("./Provider"));

export default MUIV6ThemeProvider

export type { ProviderProps as MUIV6ThemeProviderProps } from "./types";