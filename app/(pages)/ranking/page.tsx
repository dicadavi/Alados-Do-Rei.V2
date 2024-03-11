import * as React from "react";
import { PrismaClient } from "@prisma/client";
import { GridColDef } from "@mui/x-data-grid";
import RankingUser from "@/components/Ranking";


const prisma = new PrismaClient();

export default async function Ranking() {
  const query = await prisma.user.findMany({
    include: {
      unit: {
        include: {
          unitRankingId: true
        }
      },
      rankings: true
    },
    where: {
      unit: {
        id: {
          not: 3
        }
      }
    }
  })

  const rows = query.map((result) => {
    return {
      name: result.name ?? "Nome Não Disponível", // Valor padrão se 'name' for nulo
      unitName: result.unit?.name,
      points: result.rankings.length > 0 ? result.rankings[0].points : 0,
    };
  });

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      width: 150,
      editable: false,

    },
    {
      field: 'unitName',
      headerName: 'Unidade',
      width: 150,
      editable: false,
    },
    {
      field: 'points',
      headerName: 'Pontuação',
      type: 'number',
      width: 110,
      editable: false,
    },
  ];

  return (
    <RankingUser rows={rows} columns={columns} />
  );
}
