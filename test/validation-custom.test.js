import Joi from 'joi'

describe('Joi', () => {
    it('should can create custom validation', () => {
        const registerSchema = Joi.object({
            username: Joi.string().required().min(3).max(100).email(),
            password: Joi.string().required().min(6).max(100).custom((value, helpers) => {
                if(value.startsWith('rave')) {
                    return helpers.error('password.salah')
                }
                return value
            }).messages({
                'password.salah' : 'password can not start with "rave"'
            }),
            confrimPassword: Joi.string().required().min(6).max(100),
        }).custom((value, helpers) => {
            if(value.password !== value.confrimPassword) {
                return helpers.error('register.password.different')
            }

            return value
        }).messages({
            'register.password.different' : 'password and confirmPassword is different'
        })

        const request = {
            username: 'akaza@gmail.com',
            password: '12345rave',
            confrimPassword: '12345rave'
        }
        const result = registerSchema.validate(request, {
            abortEarly: false
        })
        console.info(result)
    })
})