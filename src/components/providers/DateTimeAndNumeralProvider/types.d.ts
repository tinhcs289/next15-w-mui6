import type { LocalizationProviderProps } from "@mui/x-date-pickers";
import type { Moment } from "moment";

export type ProviderProps = Omit<
  LocalizationProviderProps<Moment, string>,
  "dateAdapter" | "adapterLocale"
> & {
  locale?: string;
};