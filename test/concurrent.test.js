import { sayHelloAsync } from "../src/async.js";

it.concurrent('concurrent 1', async () => {
    await expect(sayHelloAsync('Laksa')).resolves.toBe('Hello Laksa')
})

it.concurrent('concurrent 2', async () => {
    await expect(sayHelloAsync('Bayu')).resolves.toBe('Hello Bayu')
})

it.concurrent('concurrent 3', async () => {
    await expect(sayHelloAsync('Aji')).resolves.toBe('Hello Aji')
})

// maxConcurrency -> untuk membatasi jumlah concurrent nya