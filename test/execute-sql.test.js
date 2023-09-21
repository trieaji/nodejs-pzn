import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should be able to execute sql', async() => {
        let id = "1";
        let namaewa = "Eko Kurniawan";

        let impacted = await prismaClient.$executeRaw`INSERT INTO sample(id,namaewa) VALUES (${id}, ${namaewa})`
        expect(impacted).toBe(1);
    })
})