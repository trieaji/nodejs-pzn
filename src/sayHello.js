export const sayHello = (nawa) => {
    if (nawa) {
        return `Hello ${nawa}`
    } else {
        throw new Error('Name is required')
    }
}