import * as React from "react";
import { PrismaClient } from "@prisma/client";
import { GridColDef } from "@mui/x-data-grid";
import RankingList from "@/components/RankingTeste";
import PageDefault from "@/components/PageDefault";

const prisma = new PrismaClient();

const rankingData = [
  {
    name: "Lucas Silva",
    rank: 1,
    points: 9850,
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    name: "Ana Souza",
    rank: 2,
    points: 9450,
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    name: "Pedro Oliveira",
    rank: 3,
    points: 9100,
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    name: "Mariana Costa",
    rank: 4,
    points: 8750,
    avatar: "https://example.com/avatar4.jpg",
  },
  {
    name: "Carlos Mendes",
    rank: 5,
    points: 8600,
    avatar: "https://example.com/avatar5.jpg",
  },
  {
    name: "Fernanda Lima",
    rank: 6,
    points: 8300,
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    name: "Roberto Nunes",
    rank: 7,
    points: 8100,
    avatar: "https://example.com/avatar7.jpg",
  },
  {
    name: "Juliana Ribeiro",
    rank: 8,
    points: 7850,
    avatar: "https://example.com/avatar8.jpg",
  },
  {
    name: "Felipe Santos",
    rank: 9,
    points: 7700,
    avatar: "https://example.com/avatar9.jpg",
  },
  {
    name: "Camila Fernandes",
    rank: 10,
    points: 7400,
    avatar: "https://example.com/avatar10.jpg",
  },
  {
    name: "Bruno Martins",
    rank: 11,
    points: 7200,
    avatar: "https://example.com/avatar11.jpg",
  },
  {
    name: "Larissa Gomes",
    rank: 12,
    points: 6950,
    avatar: "https://example.com/avatar12.jpg",
  },
  {
    name: "Gustavo Rocha",
    rank: 13,
    points: 6800,
    avatar: "https://example.com/avatar13.jpg",
  },
  {
    name: "Renata Xavier",
    rank: 14,
    points: 6500,
    avatar: "https://example.com/avatar14.jpg",
  },
  {
    name: "Eduardo Pereira",
    rank: 15,
    points: 6300,
    avatar: "https://example.com/avatar15.jpg",
  },
  {
    name: "Tatiane Almeida",
    rank: 16,
    points: 6100,
    avatar: "https://example.com/avatar16.jpg",
  },
  {
    name: "Rafael Carvalho",
    rank: 17,
    points: 5800,
    avatar: "https://example.com/avatar17.jpg",
  },
  {
    name: "Beatriz Mendes",
    rank: 18,
    points: 5600,
    avatar: "https://example.com/avatar18.jpg",
  },
  {
    name: "Vinícius Teixeira",
    rank: 19,
    points: 5300,
    avatar: "https://example.com/avatar19.jpg",
  },
  {
    name: "Amanda Figueiredo",
    rank: 20,
    points: 5000,
    avatar: "https://example.com/avatar20.jpg",
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
