import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it('should can create one to one relation', async () => {
        let wall = await prismaClient.wallet.create({
            data: {
                customers_id: 1,
                balance: 300000
            },
            include: {
                customers: true
            }
        })

        console.info(wall)
    })

    // it('should can create one to one relation', async () => {
    //     let custom = await prismaClient.customers.create({
    //         data: {
    //             email:'kanroji@gmail.com',
    //             nawa:'Kanroji',
    //             phone:'01010101010',
    //             wallet: {
    //                 create: {
    //                     balance: 50000
    //                 }
    //             }
    //         },
    //         include: {
    //             wallet: true
    //         }
    //     })

    //     console.info(custom)
    // })

    // it('should can create one to one relation', async () => {
    //     let custom = await prismaClient.customers.findMany({
    //         where: {
    //             nawa:'Sanemi Shinazugawa'
    //         },
    //         include: {
    //             wallet: true
    //         }
    //     })

    //     console.info(custom)
    // })

    // it('should can create one to one relation filter', async () => {
    //     let custom = await prismaClient.customers.findMany({
    //         where: {
    //             wallet: {
    //                 isNot: null
    //             }
    //         },
    //         include: {
    //             wallet: true
    //         }
    //     })

    //     console.info(custom)
    // })
})
