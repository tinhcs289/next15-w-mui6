import dynamic from "next/dynamic";

const NotiStackProvider = dynamic(() => import("./NotiStackProvider"));

export default NotiStackProvider