import { getBalance } from "../src/async.js";


test("mock async function", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(17000);

    await expect(getBalance("Eko", from)).resolves.toEqual({
        name: "Eko",
        balance: 17000
    })

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(17000);
    console.info(from.mock.results[0].value);
})

test.failing('mock async function rejected', async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Ups"))

    await (getBalance("Eko", from))
})

test('mock async function error matchers', async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce('Rejected');

    await expect(getBalance("Eko", from)).rejects.toBe('Reject');
})