// import { customerTable } from '../src/utils/prismaSchema.js';

import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    // test('should be able to create customer', async () => {
    //     const custom = await prismaClient.customers.create({
    //         data : {
    //             email:'muichiro@gmail.com',
    //             nawa:'Muichiro',
    //             phone:'0929290101012'
    //         }
    //     });
    
    //     expect(custom.email).toBe("muichiro@gmail.com");
    //     expect(custom.nawa).toBe("Muichiro");
    //     expect(custom.phone).toBe("0929290101012");
        
    // });

    // test('should be able to update customer', async () => {
    //     const custom = await prismaClient.customers.update({
    //         data : {
    //             nawa:'Kanroji',
    //             email : 'kanroji@gmail.com',
    //             phone: '0929290101013'
    //         },
    //         where : {
    //             id: 4
    //         }
    //     });
    
    //     expect(custom.email).toBe("kanroji@gmail.com");
    //     expect(custom.nawa).toBe("Kanroji");
    //     expect(custom.phone).toBe("0929290101013");
        
    // });

    test('should be able to read customer', async () => {
        const custom = await prismaClient.customers.findFirst({
            where : {
                // id : 5
                email : "igurosan@gmail.com" // bisa pakai ini
                // nawa : "Douma" // atau pakai ini
                // phone : "087861872222" // atau pakai ini
            }
        });
        console.info(custom);
    
        // expect(custom.email).toBe("kanroji@gmail.com");
        // expect(custom.nawa).toBe("Kanroji");
        // expect(custom.phone).toBe("0929290101013");
        
    });

    // test('should be able to read customer', async () => {
    //     const custom = await prismaClient.customers.delete({
    //         where : {
    //             id : 3
    //         }
    //     });
    //     console.info(custom);
    
    //     expect(custom.email).toBe("laksa@gmail.com");
    //     expect(custom.nawa).toBe("laksa");
    //     expect(custom.phone).toBe("09292929983");
        
    // });
    
})





