import Joi from 'joi';

describe('Joi', () => {
    // it('Should can create schema', () => {
    //     const schema = Joi.string().min(3).max(100).required();

    //     const result = schema.validate('Laksa');
    //     if(result.error) {
    //         console.info('error buuooss')
    //         console.info(result.error)
    //     } else {
    //         console.info('bener buuoos')
    //         console.info(result.value)
    //     }
    // })

    // it('Should can validate basic data type', () => {
    //     const usernameSchema = Joi.string().email().required();
    //     const isAdminSchema = Joi.boolean().required();
    //     const priceSchema = Joi.number().min(2).max(100).required();

    //     const resultUsername = usernameSchema.validate('akaza@gmail.com');
    //     console.info(resultUsername)

    //     const resultAdmin = isAdminSchema.validate("true");
    //     console.info(resultAdmin)

    //     const resultPrice = priceSchema.validate(101)
    //     console.info(resultPrice)
    // })

    it('Perulangan', () => {
        function perulangan () {

            var es = '';
        for (var w = 1; w <= 5; w++) { //ibaratnya sebuah wadah atau sebuah baris yg akan di eksekusi terlebih dahulu
            if (w <= 5 && w !== 2 && w !== 4) {
                for (var q = 1; q <= 5; q++) {
                    es += '*';
                }
            }
            else {
                // untuk mencetak * atau =
                for (var y = 1; y <= 5; y++) {
                    if (y <= 5 && y !== 2 && y !== 3 && y !== 4 ) {
                    es += '*';
                }
                else {
                    es += '=';
                }

            }

            }
              //  for (var y = 0; y < 5; y++) {
              //  es += '#'; // jika tanpa for hasilnya menjadi selang - seling;
             // }
            es += '\n';
        }
        //console.log(es);
        return es;
        }
        console.info(perulangan());
    })
})

