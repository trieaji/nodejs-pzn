import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should can using or operator', async () => {
        let prod = await prismaClient.products.findMany({
            where: {
                OR : [
                    {
                        nawa: "A"
                    },
                    {
                        price: 3000
                    }
                ]
            },
            orderBy: [
                {
                    nawa: "asc"
                }
            ]
        })

        console.info(prod)

        expect(prod.length).toBe(2)
        // expect(prod[0].nawa).toBe("A")
        // expect(prod[1].nawa).toBe("B")
    })
})