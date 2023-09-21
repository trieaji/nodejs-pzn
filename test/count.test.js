import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it('should be able count', async () => {
        let custom = await prismaClient.customers.count({
            where: {
                nawa: "Iguro"
            }
        })

        console.info('=== hehehe ===')
        console.info(custom)
        expect(custom).toBe(2)
    })
    
})