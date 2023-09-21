import Mustache from "mustache";
import fs from "fs/promises";

test("Comment",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/comment.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {
        namaewa: "Akaza",
        name: "Tanjirou"
    })
    console.info(dataaja)
    expect(dataaja).toContain("Akaza")
    expect(dataaja).not.toContain("Tanjirou")
})