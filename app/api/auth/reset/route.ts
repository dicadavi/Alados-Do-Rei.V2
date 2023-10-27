import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  const { userName, birth, password,confirmPassword } = await req.json(); 


  const exists = await prisma.user.findFirst({
    where: {
      userName,
      birth: new Date(birth)
    },
  });



  
  if (!exists) {
    return NextResponse.json({ error: "Usuário não existe, verifique o usuário ou a data de nascimento" }, { status: 400 });
  } else {
    
    if (password != confirmPassword) {
      
      return NextResponse.json({ error: "As senhas não combinam" }, { status: 400 });
    }
   try {
    const user = await prisma.user.update({     
     where:{
      id:exists.id,
     },
      data: {
        password: await hash(password, 10),
      },
    });
    return NextResponse.json(user);
    
   }  catch (err: any) {
    console.log('ERRO:', err);
    const errorMessage = err.message;
    return NextResponse.json({ error: errorMessage }, { status: 400 });
}
  }
}
