import {PrismaClient}  from '@prisma/client'

const  prisma = new PrismaClient();

async function main(){
    const deleteCliente = await prisma.cliente.delete({
        where:{
            id:"2"
            }
    });
     console.log(deleteCliente);
}
main();