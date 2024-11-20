import dynamic from "next/dynamic";

const DateTimeAndNumeralProvider = dynamic(() => import("./DateTimeAndNumeralProvider"));

export default DateTimeAndNumeralProvider