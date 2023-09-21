import { calculate, calculateAndReturn } from "../src/sum.js";

test("test calculate", () => {
    const callback = jest.fn()

    calculate([5,5,5], callback);
    calculate([5,5,5,5,5], callback);

    expect(callback.mock.calls.length).toBe(2);

    console.info(callback.mock.calls);

    expect(callback.mock.calls[0][0]).toBe(15);
    console.info(callback.mock.calls[1][1]);
    expect(callback.mock.calls[1][0]).toBe(25);
})


test('test calculate without mock function', () => {
    const logging = (total) => {
        console.info(total)
    }

    calculate([5,5,5], logging);
    calculate([5,5,5,5,5], logging);
})


test("test mock return value", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(80);

    expect(calculateAndReturn([5,5,5], callback)).toBe(40);
    expect(calculateAndReturn([7,7,7], callback)).toBe(80);

    expect(callback.mock.results[0].value).toBe(40);
    expect(callback.mock.results[1].value).toBe(80);
    console.info(callback.mock.results[1].value)
})


test("test mock implementation", () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => {
        return total * 2;
    })
    expect(calculateAndReturn([10,10,10], callback)).toBe(60);
    expect(calculateAndReturn([10,10,10,10,10], callback)).toBe(100);

    expect(callback.mock.results[0].value).toBe(60)
    console.info(callback.mock.results[0].value)
    expect(callback.mock.results[1].value).toBe(100)
})