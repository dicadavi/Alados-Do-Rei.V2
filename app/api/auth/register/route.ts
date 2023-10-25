import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const { name,email, password,confirmPassword } = await req.json();
  if (password != confirmPassword) {
    console.log(name)
    return NextResponse.json({ error: "Senha não combina" }, { status: 400 });
  }
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "Usuário já existe" }, { status: 400 });
  } else {
    console.log(name)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: await hash(password, 10),
      },
    });
    return NextResponse.json(user);
  }
}
