import Joi from 'joi';

describe('Joi', () => {
    it('should return validation error', () => {
        const userNameSchema = Joi.string().min(5).email().required();

        const result = userNameSchema.validate('ups')
        console.info(result)

        if(result.error) {
            result.error.details.forEach(detail => {
                console.info(`${detail.path} = ${detail.message}`)
            })
        }
    })
})