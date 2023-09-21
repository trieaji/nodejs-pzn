import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should can insert and include', async () => {
        let comment = await prismaClient.comments.create({
            data: {
                customers_id: 1,
                title: "Hashira",
                description: "Water Hashira"
            },
            include: {
                customers: true
            }
        })

        console.info(comment)
        expect(comment.customers_id).toBe(1);
        expect(comment.title).toBe("Hashira");
        expect(comment.description).toBe("Water Hashira");
    })

    // it('should can insert and include', async () => {
    //     let custom = await prismaClient.customers.create({
    //         data: {
    //             email:'kochou@gmail.com',
    //             nawa:'Kochou',
    //             phone:'01011111111',
    //             comments: {
    //                 createMany: {
    //                     data: [
    //                         {
    //                             title: "Hashira",
    //                             description: "Insect Hashira"
    //                         },
    //                         {
    //                             title: "Hashira",
    //                             description: "Insect Hashira"
    //                         }
    //                     ]
    //                 }
    //             }
    //         },
    //         include: {
    //             comments: true
    //         }
    //     })

    //     console.info(custom)
    // })

    // it('should can find many with filter relation', async () => {
    //     let custom = await prismaClient.customers.findMany({
    //         where: {
    //             comments: {
    //                 some: {
    //                     title: {
    //                         contains : "Hashira"
    //                     }
    //                 }
    //             }
    //         },
    //         include: {
    //             comments: true
    //         }
    //     })

    //     console.info(JSON.stringify(custom))
    // })
})