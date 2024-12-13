import dynamic from "next/dynamic";

const NotiStackProvider = dynamic(() => import("./Provider"));

export default NotiStackProvider

export type { ProviderProps as NotiStackProviderProps } from "./types";