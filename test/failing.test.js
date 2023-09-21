import { sayHello } from "../src/sayHello.js";

test('sayHello success', () => {
    expect(sayHello('Laksa')).toBe('Hello Laksa');
})

test.failing('sayHello error', () => {
    expect(sayHello('Laksa')).toBe('Hello Bayu')
})