function tagFunction (array, ...args){
    console.info(array)
    console.info(args)
}

test("tag function", () => {
    const name = "Laksa";
    const lastName = 'Aji'

    tagFunction`Hello ${name}!, How are you?`;
    tagFunction`Bye ${name} ${lastName}!, see you later`;
})

test("tag function", () => {
    const name = "Laksa '; DROP table users;";
    const age = 22;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
})