import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it('should can create and select fields', async () => {
        let custom = await prismaClient.customers.create({
            data: {
                email: "iguro@gmail.com",
                nawa: "Iguro",
                phone: "00000001234"
            },
            select:{
                id: true,
                email: true,
                nawa: false,
                phone: false
            }
        })

        expect(custom.email).toBe("iguro@gmail.com")
        expect(custom.nawa).toBeUndefined()
        expect(custom.phone).toBeUndefined()
    })
    
    it('should can select fields', async () => {
        let custom = await prismaClient.customers.findMany({
            select: {
                id: true,
                email: true,
                phone: true
            }
        })
        // console.info(custom)
        // expect(custom.length).toBe(14)

        for (let customer of custom) {
            console.info(customer)
            expect(customer.email).toBeDefined()
            expect(customer.nawa).toBeUndefined()
            expect(customer.phone).toBeDefined()
        }
    })
})