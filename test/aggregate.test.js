import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    // it('should can do aggregate function', async () => {
    //     let result = await prismaClient.products.aggregate({
    //         _min : {
    //             price: true,
    //             stock: true
    //         },
    //         _max : {
    //             price: true
    //         },
    //         _avg : {
    //             price: true
    //         }
    //     })

    //     console.info(result)
    // })

    // it('should can do aggregate function groupBy', async () => {
    //     let result = await prismaClient.products.groupBy({
    //         by: ['category'],
    //         _min : {
    //             price: true,
    //             stock: true
    //         },
    //         _max : {
    //             price: true
    //         },
    //         _avg : {
    //             price: true
    //         }
    //     })

    //     console.info(result)
    // })

    it('should can do aggregate function groupBy Having', async () => {
        let result = await prismaClient.products.groupBy({
            by: ['category'],
            _min : {
                price: true,
                stock: true
            },
            _max : {
                price: true
            },
            _avg : {
                price: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 3000 //lebih dari
                    }
                }
            }
        })

        console.info(result)
    })
})