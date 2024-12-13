import dynamic from "next/dynamic";

const MainView = dynamic(() => import("./View"));

export default MainView