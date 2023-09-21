test("test toBe", () => {
    const name = "Eko"
    const hello = `Hello ${name}`

    expect(hello).toBe("Hello Eko");
})

test("test toEqual", () => {
    let person = {id: 'Laksa'}
    Object.assign(person, {nawa: 'Bayu'})
    expect(person). toEqual({id: 'Laksa', nawa:'Bayu'})
})