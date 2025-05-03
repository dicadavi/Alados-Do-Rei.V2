"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/common/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Form({
  type,
}: {
  type: "login" | "register" | "reset";
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("");
  const [birth, setbirth] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          signIn("credentials", {
            redirect: false,
            userName: userName,
            password: password,
            // @ts-ignore
          }).then(({ error }) => {
            if (error) {
              setLoading(false);
              toast.error(error);
            } else {
              router.refresh();
              router.push("/home");
            }
          });
        } else if (type === "register") {
          fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              userName: userName,
              birth: birth,
              password: password,
              confirmPassword: confirmPassword,
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success("Conta criada! Redirecionando para login...");
              setTimeout(() => {
                router.push("/login");
              }, 2000);
            } else {
              const { error } = await res.json();
              toast.error(error);
            }
          });
        } else if (type === "reset") {
          fetch("/api/auth/reset", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: userName,
              birth: birth,
              password: password,
              confirmPassword: confirmPassword,
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success("Senha Atualizada! Redirecionando para login...");
              setTimeout(() => {
                router.push("/login");
              }, 2000);
            } else {
              const { error } = await res.json();
              toast.error(error);
            }
          });
        }
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        bgcolor: "background.default",
        p: { xs: 2, sm: 4 },
        py: 4,
      }}
    >
      <Stack spacing={3}>
        {type === "register" && (
          <TextField
            id="name"
            name="name"
            label="Nome"
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
        )}

        <TextField
          id="userName"
          name="userName"
          label="Usuário"
          type="text"
          placeholder={type === "register" ? "Marcelinho10" : ""}
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          autoComplete="userName"
          required
        />

        {(type === "register" || type === "reset") && (
          <TextField
            id="birth"
            name="birth"
            label="Data de Nascimento"
            type="date"
            value={birth}
            onChange={(e) => setbirth(e.target.value)}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        )}

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="password">
            {type === "reset" ? "Nova Senha" : "Senha"}
          </InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={type === "reset" ? "Nova Senha" : "Senha"}
          />
        </FormControl>

        {(type === "register" || type === "reset") && (
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="confirmPassword">
              {type === "reset" ? "Confirmar Nova Senha" : "Confirmar Senha"}
            </InputLabel>
            <OutlinedInput
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={
                type === "reset" ? "Confirmar Nova Senha" : "Confirmar Senha"
              }
            />
          </FormControl>
        )}
      </Stack>

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        fullWidth
        sx={{
          height: 40,
          textTransform: "none",
          fontSize: "0.875rem",
        }}
      >
        {loading ? (
          <LoadingDots color="#fff" />
        ) : type === "login" ? (
          "Entrar"
        ) : type === "register" ? (
          "Cadastrar-se"
        ) : (
          "Recuperar Senha"
        )}
      </Button>

      <Stack spacing={1} alignItems="center">
        {type === "login" ? (
          <>
            <Typography variant="body2" color="text.secondary">
              Não tem uma conta?{" "}
              <Link
                href="/register"
                style={{ color: "inherit", fontWeight: 600 }}
              >
                Inscrever-se
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Esqueceu sua senha?{" "}
              <Link href="/reset" style={{ color: "inherit", fontWeight: 600 }}>
                Recuperar senha
              </Link>
            </Typography>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Já tem uma conta?{" "}
            <Link href="/login" style={{ color: "inherit", fontWeight: 600 }}>
              Entrar
            </Link>
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
