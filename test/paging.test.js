// Method findMany() di Prisma Client juga mendukung paging menggunakan parameter skip dan take
// Take adalah jumlah maksimal data yg diambil
// Skip adalah jumlah data yang akan di skip diawal

import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should can do paging', async () => {
        const page1 = await prismaClient.customers.findMany({
            skip: 0,
            take: 1
        })
        console.info(page1)
        expect(page1.length).toBe(1);

        const page2 = await prismaClient.customers.findMany({
            skip: 1,
            take: 1
        })
        console.info(page2)
        expect(page2.length).toBe(1);

        const page3 = await prismaClient.customers.findMany({
            skip: 0,
            take: 2
        })
        console.info('=== oke ===')
        console.info(page3)
        expect(page3.length).toBe(2);
    })
})