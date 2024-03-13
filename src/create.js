import { PrismaClient } from "@prisma/client";

const  prisma = new PrismaClient();

async function main(){
    const result = await prisma.cliente.create({
        data:{
            nome:"Joao",
            sobrenme: "Oliveira",
            cpf: "123456789",
            endereco:"RUA ARACAJU 561"
    }
});
}
main()