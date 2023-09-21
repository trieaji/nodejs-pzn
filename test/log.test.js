describe('Log', () => {
    it('Perulangan', () => {
        /* function perulangan () {

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
        } */

        function perulangan () {

            var cupboard = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
            // var arr = ['aukey', 'baseus', 'usng','van', 'sung', 'lg', 'avn', 'ngus','nav', 'anv', 'levono','gnus', 'lenovo'];
            var arr = ['yes', 'no', 'okey']
            console.log('=== cupboard ===')
            console.log(arr)
            let result = {}
            // var resul[0] = {}
            for(var w = 0; w < arr.length; w++){
                var sorteWord = arr[w]
                var sort = sorteWord.split('').sort().join('');
                // console.log('=== sort ===')
                // console.log(sort)

                // console.log('=== zor ===')
                // console.log(result[sort]) //hasilnya undefined
                if (!result[sort]) { // artinya jika tidak undefined === ada isinya

                    result[sort] = [];
                //     // console.log('=== emboh ===')
                //     // console.log(result[sort] = [])
                }
                //     zor.push(sorteWord);
                    // result[sort].push(sorteWord)
                    console.log('=== tuktuk ===')
                    console.log(result.push(sorteWord))

            }
            return Object.values(result);

        }
        // console.log('=== horee ===')
        console.info(perulangan())
        // perulangan()

    })
})

