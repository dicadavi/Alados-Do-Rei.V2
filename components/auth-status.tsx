import { Button } from "@mui/material";
import { useSession } from "next-auth/react"

export default function AuthStatus() {
  const { data: session, status } = useSession()
  return (
    <div>
      {status === "authenticated" ? (
        <p className="text-stone-200 text-sm">
          Conectado como {session.user?.name}
        </p>) : (
        <><Button
          color="primary"
          variant="text"
          size="small"
          component="a"
          href="/login"
        >
          Entrar
        </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            component="a"
            href="/register"
          >
            Cadastrar-se
          </Button></>
      )}
    </div>
  );
}
