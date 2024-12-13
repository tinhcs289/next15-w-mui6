import dynamic from "next/dynamic";

const NotFoundView = dynamic(() => import("./View"));

export default NotFoundView