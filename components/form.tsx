"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Form({ type }: { type: "login" | "register"|"reset" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [name, setName] = useState('');
  const [birth, setbirth] = useState('');
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form
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
              router.push("/protected");
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
        } else if (type === "reset"){
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
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      {type === "register" ?<div>
        <label
          htmlFor="name"
          className="block text-xs text-gray-600 uppercase"
        >
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>:''}
      <div>
        <label
          htmlFor="userName"
          className="block text-xs text-gray-600 uppercase"
        >
          Usuário
        </label>
        <input
          id="userName"
          name="userName"
          type="text"
          placeholder={type === 'register' ? 'Marcelinho10' : ''}
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          autoComplete="userName"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      {type === "register" || type ==='reset'?<div>
        <label
          htmlFor="name"
          className="block text-xs text-gray-600 uppercase"
        >
          Data De Nascimento
        </label>
        <input
          id="birth"
          name="birth"
          type="date"
          placeholder="25/10/2008"
          value={birth}
          onChange={(e) => setbirth(e.target.value)}
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>:''}
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          {type ==='reset'?'Nova Senha':'Senha'}
        </label>
        <input
         id="password"
         name="password"
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      {type === "register" || type === "reset"?<div>
        <label
          htmlFor="confirmPassword"
          className="block text-xs text-gray-600 uppercase"
        >
          {type ==='reset'?'Confirmar Nova Senha':'Confirmar Senha'}
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>:''}
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>{type === "login" ? "Entrar" :type === "register" ? "Cadastrar-se":"Recuperar Senha"}</p>
        )}
      </button>
      {type === "login" ? (
        <div><p className="text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
          Inscrever-se
          </Link>{" "}          
        </p>
         <p className="text-center text-sm text-gray-600">
         Esqueceu sua senha?{" "}
          <Link href="/reset" className="font-semibold text-gray-800">
          Recuperar senha
          </Link>      
        </p>  
        </div>
      ) : type === "register" ? (
        <p className="text-center text-sm text-gray-600">
          Já tem uma conta?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
          Entrar
          </Link>
        </p>
      ): (
        <p className="text-center text-sm text-gray-600">
          Já tem uma conta?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
          Entrar
          </Link>
        </p>
      )}
    </form>
  );
}
