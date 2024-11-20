import numeral from "numeral";

numeral.register("locale", "zh-cn", {
  delimiters: {
    thousands: ",",
    decimal: ".",
  },
  abbreviations: {
    thousand: "千",
    million: "百萬",
    billion: "十億",
    trillion: "兆",
  },
  ordinal: function () {
    return ".";
  },
  currency: {
    symbol: "¥",
  },
});