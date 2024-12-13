import dynamic from "next/dynamic";

const DateTimeAndNumeralProvider = dynamic(() => import("./Provider"));

export default DateTimeAndNumeralProvider

export type { ProviderProps as DateTimeAndNumeralProviderProps } from "./types";
