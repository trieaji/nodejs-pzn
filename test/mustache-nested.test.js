import Mustache from "mustache";

test("Nested Object", () => {
    Mustache.parse("Hello {{name}}")

    const data = Mustache.render("Hello {{person.name}} my hobby is {{person.hobby}}", {
        // name: "Genya",
        // hobby:"<b>Programming</b>"
        person: {
            name: "Genya",
            hobby:"Programming"
        }
    })
    console.info(data)
    expect(data).toBe("Hello Genya my hobby is Programming")
})