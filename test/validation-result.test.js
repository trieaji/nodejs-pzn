import Joi from "joi";

describe('Joi', () => {
    it('should can validate date', () => {
        const birthDateSchema = Joi.date().required().min("1-1-1988").max("now");

        const result = birthDateSchema.validate("1-1-1987");
        console.info('=== test ===')
        console.info(result);
        console.info('=== validation result ===')
        console.info(typeof result.value) // akan otomatis dikonversi menjadi tipe data (Date) bawaan dari javascipt
        console.info(typeof result.error) // Tipe nya adalah ValidationError
    })
})

// Setelah temen-temen melakukan validasi, hbs itu mau ambil hasil dari data yang sudah validnya, maka temen-temen tinggal ambil "value" nya