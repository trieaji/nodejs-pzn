import Joi from "joi";

describe('Joi', () => {
    it('should can validate date', () => {
        const birthDateSchema = Joi.date().required().min("1-1-1988").max("now");

        const result = birthDateSchema.validate("1-1-1985");
        console.info('=== test ===')
        console.info(result);
    })
})