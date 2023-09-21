import {sum} from "../src/sum.js";

test("test sum function", () => {
    const result = sum(1,2)

    expect(result).toBe(3);
})

test("test sum function 2 luur", () => {
    const result = sum(3,2)

    expect(result).toBe(5);
})