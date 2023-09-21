import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should can do paging', async () => {
        const custom = await prismaClient.customers.findMany({
            skip: 0,
            take: 11,
            orderBy: [
                {
                    nawa: "asc"
                },
                {
                    email: "desc"
                }
            ]
        })
        console.info(custom)
        expect(custom.length).toBe(11);

    
    })
})