import { sayHelloAsync } from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("Eko");
    expect(result).toBe("Hello Eko");
})


test("test async matchers", async () => {
    await expect(sayHelloAsync("Trie")).resolves.toBe("Hello Trie");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
})