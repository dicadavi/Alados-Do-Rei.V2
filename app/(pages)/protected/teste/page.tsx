import prisma from "@/lib/prisma";
import { User } from "@prisma/client";





export default async function Home() {
  const users: User[] = await prisma.user.findMany();

      
    return (

<div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.password}</li>
          ))}
        </ul>
        
      </div>
    );
  }
  