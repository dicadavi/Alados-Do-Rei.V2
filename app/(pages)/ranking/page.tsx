import * as React from "react";
import { PrismaClient } from "@prisma/client";
import { GridColDef } from "@mui/x-data-grid";
import RankingList from "@/components/data-display/RankingTeste";
import PageDefault from "@/components/layout/PageDefault";

const prisma = new PrismaClient();

const rankingData = [
  {
    name: "Arthur Costa",
    rank: 1,
    points: 1500,
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    name: "Thiago Souza",
    rank: 2,
    points: 1200,
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    name: "Gabriel Nunes",
    rank: 3,
    points: 1100,
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    name: "Abraão Almeida",
    rank: 4,
    points: 1050,
    avatar: "https://example.com/avatar4.jpg",
  },
  {
    name: "Uendel dos Santos",
    rank: 5,
    points: 1000,
    avatar: "https://example.com/avatar5.jpg",
  },
  {
    name: "Dhebora de Freitas",
    rank: 6,
    points: 950,
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    name: "Alice Muniz",
    rank: 7,
    points: 850,
    avatar: "https://example.com/avatar7.jpg",
  },
  {
    name: "Nicolas Rosa",
    rank: 8,
    points: 800,
    avatar: "https://example.com/avatar8.jpg",
  },
  {
    name: "Aryanne da Silva",
    rank: 9,
    points: 700,
    avatar: "https://example.com/avatar9.jpg",
  },
  {
    name: "Marcelo Carvalho",
    rank: 10,
    points: 400,
    avatar: "https://example.com/avatar10.jpg",
  },
  {
    name: "Francisco",
    rank: 11,
    points: 400,
    avatar: "https://example.com/avatar11.jpg",
  },
  {
    name: "Arthur Alexandre",
    rank: 12,
    points: 0,
    avatar: "https://example.com/avatar12.jpg",
  },
  {
    name: "Luna Campos",
    rank: 13,
    points: 0,
    avatar: "https://example.com/avatar12.jpg",
  },
];

export default async function Ranking() {
  const query = await prisma.user.findMany({
    include: {
      unit: {
        include: {
          unitRankingId: true,
        },
      },
      rankings: true,
    },
    where: {
      unit: {
        id: {
          not: 3,
        },
      },
    },
  });

  const rows = query.map((result) => {
    return {
      name: result.name ?? "Nome Não Disponível", // Valor padrão se 'name' for nulo
      unitName: result.unit?.name,
      points: result.rankings.length > 0 ? result.rankings[0].points : 0,
    };
  });

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      width: 150,
      editable: false,
    },
    {
      field: "unitName",
      headerName: "Unidade",
      width: 150,
      editable: false,
    },
    {
      field: "points",
      headerName: "Pontuação",
      type: "number",
      width: 110,
      editable: false,
    },
  ];

  return (
    <PageDefault>
      <RankingList items={rankingData} />
    </PageDefault>
  );
}
