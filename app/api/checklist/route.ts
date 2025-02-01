import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { checklist } = await req.json();

    for (const item of checklist) {
      await prisma.checklist.create({
        data: {
          userName: item.name,
          uniforme: item.uniforme,
          biblia: item.biblia,
          presenca: item.presenca,
          pontualidade: item.pontualidade,
          material: item.material,
        },
      });
    }

    return NextResponse.json(
      { message: "Checklist salvo com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao salvar checklist:", error);
    return NextResponse.json(
      { message: "Erro ao salvar checklist" },
      { status: 500 }
    );
  }
}
