import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    /* it('Should can execute sequential transaction', async () => {
        let [Akaza, Kokushibou] = await prismaClient.$transaction([
            prismaClient.customers.create({
                data: {
                    email:'akaza@gmail.com',
                    nawa:'Akaza',
                    phone:'092929299800'
                }
            }),
            prismaClient.customers.create({
                data: {
                    email:'kokushibou@gmail.com',
                    nawa:'Kokushibou',
                    phone:'0929292998888'
                }
            })
        ])

        expect(Akaza.nawa).toBe("Akaza")
        expect(Kokushibou.nawa).toBe("Kokushibou")
    }) */

    it('Should can execute interactive transaction', async () => {
        let [sun, moon] = await prismaClient.$transaction(async (callback) => {
            let sun = await callback.customers.create({
                data: {
                    email:'rengoku@gmail.com',
                    nawa:'Rengoku',
                    phone:'042929299822'
                }
            })
            let moon = await callback.customers.create({
                data: {
                    email:'kyojuro@gmail.com',
                    nawa:'Kyojuro',
                    phone:'072929299333'
                }
            })

            return [sun, moon]
        }, {
            timeout: 50
        })

        expect(sun.nawa).toBe("Rengoku")
        expect(moon.nawa).toBe("Kyojuro")
    })
})