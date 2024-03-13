-- CreateTable
CREATE TABLE `Clientes` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenme` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NULL,

    UNIQUE INDEX `Clientes_nome_key`(`nome`),
    UNIQUE INDEX `Clientes_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
