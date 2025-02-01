import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { userName } = await req.json();

    // Buscar informações do usuário logado incluindo a unit
    const user = await prisma.user.findFirst({
      where: { name: userName },
      include: { unit: true }, // Atualizado para refletir a tabela correta
    });

    if (!user || !user.unitId) {
      return NextResponse.json(
        { message: "Usuário ou unidade não encontrada" },
        { status: 404 }
      );
    }

    // Buscar todos os usuários da mesma unidade
    const usersInSameUnit = await prisma.user.findMany({
      where: { unitId: user.unitId }, // Atualizado para usar unitId
    });

    const userNames = usersInSameUnit.map((u) => u.name);
    return NextResponse.json({ userNames }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
