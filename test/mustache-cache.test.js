import Mustache from "mustache";

test("Menggunakan mustache", () => {
    const data = Mustache.render("Hello {{name}}", {name: "Sanemi"})
    console.info(data)
    expect(data).toBe("Hello Sanemi")
}) // Tanpa mustache cache

test("Menggunakan mustache cache", () => {
    Mustache.parse("Hello {{name}}")

    const data = Mustache.render("Hello {{name}}", {name: "Genya"})
    console.info(data)
    expect(data).toBe("Hello Genya")
})