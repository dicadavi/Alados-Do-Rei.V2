import Image from "next/image";
import Form from "@/components/forms/form";
import Link from "next/link";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function Reset() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "100px",
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
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            px: { xs: 2, sm: 4 },
            py: 4,
            pt: 6,
            textAlign: "center",
          }}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={40}
              height={40}
            />
          </Link>
          <Typography variant="h5" fontWeight={600}>
            Recuperação de senha
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Recupere seu usuário e senha
          </Typography>
        </Stack>
        <Form type="reset" />
      </Paper>
    </Box>
  );
}
