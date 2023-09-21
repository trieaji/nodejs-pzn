import { sumAll } from "../src/sum.js";

//bentuk array
const table = [
    [
        [5,5,5],15
    ],
    [
        [5,5,5,5,5],25
    ],
    [
        [5,5,5,5,5,5,5],35
    ]
];

test.each(table)('test sumAll(%s) should result %i', (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected)
})


//bentuk object
const data = [
    {numbers: [6,6,6], expected: 18},
    {numbers: [6,6,6,6,6], expected: 30},
    {numbers: [6,6,6,6,6,6,6], expected: 42}
];

test.each(data)('test sumAll($numbers) should result $expected', ({numbers,expected}) => {
    expect(sumAll(numbers)).toBe(expected)
})