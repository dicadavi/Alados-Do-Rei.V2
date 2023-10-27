import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        userName: { label: "userName", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { userName, password } = credentials ?? {}
        if (!userName || !password) {
          throw new Error("Usuário ou senha não cadastrado");
        }
        const user = await prisma.user.findUnique({
          where: {
            userName,
          },
        });
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Nome do usuário ou senha inválido");
        }
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
