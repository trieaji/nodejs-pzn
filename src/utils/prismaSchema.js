import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const customerTable = prisma.customers

export {
    prisma,
    customerTable
}