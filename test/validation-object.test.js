import Joi from 'joi'

describe('Joi', () => {
    // it('should can validate object', () => {
    //     const loginSchema = Joi.object({
    //         username: Joi.string().required().min(3).max(100).email(),
    //         password: Joi.string().required().min(6).max(100)
    //     })

    //     const request = {
    //         username: 'akaza@gmail.com',
    //         password: 'abogoboga'
    //     }

    //     const result = loginSchema.validate(request, {
    //         abortEarly: false
    //     })

    //     console.info(result)
    // })

    it('should can validate object', () => {
        const createUserSchema = Joi.object({
            id: Joi.string().required().max(100),
            name: Joi.string().required().max(100),
            address: Joi.object({
                street: Joi.string().required().max(200),
                city: Joi.string().required().max(100),
                country: Joi.string().required().max(100),
                zipCode: Joi.string().required().max(10)
            }).required()
        })

        const request = {
            id: '1',
            name: 'Akaza',
            address: {
                // street: 'jalan-jalan',
                // city: 'osaka',
                // country: 'nihon',
                // zipCode: '789654'
            }
        }

        const result = createUserSchema.validate(request, {
            abortEarly: false
        })

        if(result.error){
            result.error.details.forEach(value => {
                console.info(`${value.path} : ${value.message}`)
            })
        }
    })
})