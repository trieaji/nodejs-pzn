beforeAll(() => {console.info("Before All")})
afterAll(() => {console.info("After All")})
beforeEach(() => {console.info('Before Each')})
afterEach(() => {console.info('After Each')})


// test('Test outher', () => {console.info('Test outher')})


// describe('Inner luuur', () => {

//     // beforeAll(() => {console.info("Before All inner luur")});
//     // afterAll(() => {console.info("After All inner luur")});
//     beforeEach(() => console.info('Before each inner'));
//     afterEach(() => console.info('After each inner'));

//     test('Test inner', () => console.info('Test inner'));

// })


//nested scoping
describe('inner scope', () => {
    beforeEach(() => console.info('inner before each 1'));
    afterEach(() => console.info('inner after each 1'));
    describe('inner inner scope', () => {
        beforeEach(() => console.info('inner inner before each 1'));
        afterEach(() => console.info('inner inner after each 1'));
        test('test 1', () => console.info('Test 1'));
        test('test 2', () => console.info('Test 2'));
    })
})