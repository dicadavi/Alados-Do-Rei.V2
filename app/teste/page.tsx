import DataGridDemo from "@/components/DataGrid";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();




export default async function Home() {
  const query = await prisma.user.findMany({
    include:{
      unit:{
        include:{
          unitRankingId:true
        }
      },rankings:true
    }
  })
 
  const rows = query.map((result) => {
    return {
      name: result.name ?? "Nome Não Disponível", // Valor padrão se 'name' for nulo
      unitName: result.unit?.name,
      points: result.rankings.length > 0 ? result.rankings[0].points : 0,
    };
  });
  
  console.log(rows) 
      
    return (

      <div>
       <DataGridDemo rows={rows} />       
      </div>
    );
  }
  