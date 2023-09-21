import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    // it('should can insert many to many relation', async () => {
    //     let like = await prismaClient.likes.create({
    //         data: {
    //             customers_id: 1,
    //             products_id: 5
    //         },
    //         include: {
    //             customers: true,
    //             products: true
    //         }
    //     })

    //     console.info(like)
    // })

    // it('should can find one with many to many relation', async () => {
    //     let custom = await prismaClient.customers.findMany({
    //         where: {
    //             nawa: 'Douma'
    //         },
    //         include: {
    //             likes : {
    //                 include : {
    //                     products: true
    //                 }
    //             }
    //         }
    //     })

    //     console.info(JSON.stringify(custom))
    // })

    it('should can find many with many to many filter relation', async () => {
        let custom = await prismaClient.customers.findMany({
            where: {
                likes: {
                    some: {
                        products: {
                            nawa : {
                                contains : "E"
                            }
                        }
                    }
                }
            },
            include: {
                likes : {
                    include : {
                        products: true
                    }
                }
            }
        })

        console.info(JSON.stringify(custom))
    })

    // it('should create implicit relation', async () => {
    //     let custom = await prismaClient.products.update({
    //         where: {
    //             id: 4
    //         },
    //         data: {
    //             lovedBy: {
    //                 connect: [
    //                     {
    //                         id: 32
    //                     }
    //                 ]
    //             }
    //         },
    //         include: {
    //             lovedBy: true
    //         }
    //     })

    //     console.info(custom);
    // })

    // it('should find many implicit relation', async () => {
    //     let custom = await prismaClient.customers.findMany({
    //         where: {
    //             lovesBy: {
    //                 some: {
    //                     nawa:  { //mengambil dari tabel product
    //                         contains: 'E'
    //                     }
    //                 }
    //             }
    //         },
    //         include: {
    //             lovesBy: true
    //         }
    //     })

    //     console.info(JSON.stringify(custom));
    // })
})