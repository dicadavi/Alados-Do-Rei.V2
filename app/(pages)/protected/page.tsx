import SignOut from "@/components/auth/sign-out";
import { Box, Paper, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 4,
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          boxShadow: 4,
          p: 4,
        }}
      >
        <Stack spacing={4} alignItems="center" justifyContent="center">
          <SignOut />
        </Stack>
      </Paper>
    </Box>
  );
}
