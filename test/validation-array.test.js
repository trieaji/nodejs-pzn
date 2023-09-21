import Joi from 'joi'

describe('Joi', () => {
    it('should can validate array', () => {
        const hobbiesSchema = Joi.array().items(Joi.string().required().min(3).max(100)).min(2).unique()

        const hobbies = ["reading", "write"]

        const result = hobbiesSchema.validate(hobbies, {
            abortEarly: false
        })

        console.info(result)
    })

    // it('should can validate array of object', () => {
    //     const addressSchema = Joi.array().min(2).items(Joi.object({
    //         street: Joi.string().required().max(200),
    //         city: Joi.string().required().max(100),
    //         country: Joi.string().required().max(100),
    //         zipCode: Joi.string().required().max(10)
    //     }))

    //     const address = [{
    //         street: 'jalanin sendiri',
    //         city: 'osaka',
    //         country: 'nihon',
    //         zipCode: '789654'
    //     },
    //     {
    //         street: 'jalanin aja',
    //         city: 'tokyo',
    //         country: 'nihongo',
    //         zipCode: '789666'
    //     }
    // ]

    //     const result = addressSchema.validate(address, {
    //         abortEarly: false
    //     })

    //     console.info(result)
    // })
})