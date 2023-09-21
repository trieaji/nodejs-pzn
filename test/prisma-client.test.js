// import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it(`should be able to connect to database`, async () => {
        // const prisma = new PrismaClient();
        await prismaClient.$connect();

        //do something

        await prismaClient.$disconnect()
    })
})