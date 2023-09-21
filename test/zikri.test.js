describe('Log', () => {
    it('Perulangan', () => {
        const example = (words) => {
            let result = {};

            words.forEach(word => {
                let sortedWord = word.split('').sort().join('')
                // let sortedWord = word
                // console.log('=== sorteWord ===')
                // console.log(sortedWord)
                console.log('=== testing ===')
                console.log(result[sortedWord])
                if (!result[sortedWord]) {
                    result[sortedWord] = [];
                }
                result[sortedWord].push(word);
            })
            return Object.values(result);
        }
        // let array = ['cook', 'save', 'sung','taste', 'aves', 'vase', 'state', 'map', 'aukey', 'baseus', 'sam'];
        let array = ['aukey', 'baseus', 'usng','van', 'sung', 'lg', 'avn', 'ngus','nav', 'anv', 'levono','gnus', 'lenovo']
        let result = example(array);
        console.log('=== result ===')
        console.log(result);
    })
})

