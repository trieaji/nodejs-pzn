import Mustache from "mustache";

test("Tags", () => {
    Mustache.parse("Hello {{name}}")

    const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
        name: "Genya",
        hobby:"<b>Programming</b>"
    })
    console.info(data)
    expect(data).toBe("Hello Genya, my hobby is <b>Programming</b>")
})