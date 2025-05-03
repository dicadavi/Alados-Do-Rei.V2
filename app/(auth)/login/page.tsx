import Image from "next/image";
import Form from "@/components/forms/form";
import Link from "next/link";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
          marginBottom: "100px",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 400,
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              p: { xs: 2, sm: 4 },
              pt: 4,
            }}
          >
            <Link href="/">
              <Image
                src="/logo.png"
                priority
                alt="Logo"
                className="h-10 w-10 rounded-full"
                width={20}
                height={20}
              />
            </Link>
            <Typography variant="h5" component="h3" fontWeight="medium">
              Entrar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Use seu e-mail e senha para entrar
            </Typography>
          </Box>
          <Form type="login" />
        </Paper>
      </Box>
    </Container>
  );
}
