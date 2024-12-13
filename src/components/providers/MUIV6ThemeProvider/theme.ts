import { createTheme } from "@mui/material/styles";
import { dataDisplayCustomizations } from "./customizations/dataDisplay";
import { feedbackCustomizations } from "./customizations/feedback";
import { inputsCustomizations } from "./customizations/inputs";
import { navigationCustomizations } from "./customizations/navigation";
import { surfacesCustomizations } from "./customizations/surfaces";
import { colorSchemes, shadows, shape, typography } from './customizations/themePrimitives';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
    cssVarPrefix: "template",
    // @ts-ignore
    colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
    typography,
    shadows,
    shape,
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations
    }
  },
});

export default theme;