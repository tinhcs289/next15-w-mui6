import dynamic from "next/dynamic";

const ReactQueryProvider = dynamic(() => import("./ReactQueryProvider"));

export default ReactQueryProvider