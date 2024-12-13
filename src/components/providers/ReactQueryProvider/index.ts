import dynamic from "next/dynamic";

const ReactQueryProvider = dynamic(() => import("./Provider"));

export default ReactQueryProvider