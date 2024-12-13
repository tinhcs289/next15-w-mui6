import numeral from "numeral";

numeral.register("locale", "vi", {
  delimiters: {
    thousands: ".",
    decimal: ",",
  },
  abbreviations: {
    thousand: " nghìn",
    million: " triệu",
    billion: " tỷ",
    trillion: " nghìn tỷ",
  },
  ordinal: function () {
    return ".";
  },
  currency: {
    symbol: "₫",
  },
});