import { prismaClient } from "../src/prisma-client.js"

describe('Prisma Client', () => {
    // it('should can create many records', async () => {
    //     let {count} = await prismaClient.products.createMany({
    //         data: [
    //             {
    //                 nawa:'A',
    //                 price:1000,
    //                 stock:100,
    //                 category: 'K1'
    //             },
    //             {
    //                 nawa:'B',
    //                 price:2000,
    //                 stock:200,
    //                 category: 'K2'
    //             },
    //             {
    //                 nawa:'C',
    //                 price:3000,
    //                 stock:300,
    //                 category: 'K3'
    //             },
    //             {
    //                 nawa:'D',
    //                 price:4000,
    //                 stock:400,
    //                 category: 'K4'
    //             },
    //             {
    //                 nawa:'E',
    //                 price:5000,
    //                 stock:500,
    //                 category: 'K5'
    //             }
    //         ]
    //     });

    //     expect(count).toBe(5)
    // })

    // it('should can update many records', async () => {
    //     let {count} = await prismaClient.customers.updateMany({
    //         data: {
    //             email: 'igurosan@gmail.com'
    //         },
    //         where: {
    //             nawa: 'Kanroji'
    //         }
    //     });

    //     expect(count).toBe(1)
    // })

    // it('should can delete many records', async () => {
    //     let {count} = await prismaClient.customers.deleteMany({
    //         where: {
    //             nawa: 'Kyojuro'
    //         }
    //     });

    //     expect(count).toBe(2)
    // })

    it('should can read many records', async () => {
        let count = await prismaClient.customers.findMany({});
        console.info(count)
        expect(count.length).toBe(4)
    })
})