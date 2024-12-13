import getRequestUrl from "@/server-actions/getRequestUrl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";

export default async function View({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "notfound",
  });

  const requestUrl = await getRequestUrl();

  return (
    <Box
      minHeight="100svh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography component="h1">{t("page-heading")}</Typography>
      <br />
      <Typography variant="body1">{`url: ${requestUrl}`}</Typography>
      <br />
      <Typography variant="body1">{t("page-description")}</Typography>
    </Box>
  );
}