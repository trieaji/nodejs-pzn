import Mustache from "mustache";
import fs from "fs/promises";

test("Sections Show",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/inverted-sections.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {
        persen: {
            name: "Giyuu"
        }
    });
    console.info(dataaja)
    expect(dataaja).toContain("Hello Giyuu")
})


test("Inverted Sections",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/inverted-sections.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {});
    console.info(dataaja)
    expect(dataaja).toContain("Hello Guest")
})