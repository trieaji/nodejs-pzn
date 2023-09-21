import Mustache from "mustache";

test("Menggunakan mustache", () => {
    const data = Mustache.render("Hello {{name}}", {name: "Sanemi"})
    console.info(data)
    expect(data).toBe("Hello Sanemi")
})