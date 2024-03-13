import{PrismaClient} from'.prisma/client'

const prisma=new PrismaClient();

async function main(){
    const updateCliente = await  prisma.clientes.update({
        where:{id:"1"},
        data: {
            nome:"Régis",
            sobrenome:"dos Anjos",
            cpf:"987.654.321-00",
            endereco:"rua nivaldo 302"
        }
    });
    
    console.log(updateClient
}
main()