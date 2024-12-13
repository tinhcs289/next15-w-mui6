import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function View() {
  return (
    <Box
      minHeight="100svh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography component="h1">Main view</Typography>
    </Box>
  );
}
