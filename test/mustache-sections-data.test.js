import Mustache from "mustache";
import fs from "fs/promises";

test("Mustache File",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {
        person: {
            nawa: "Rengoku"
        }
    })
    console.info(dataaja)
    expect(dataaja).toContain("Hello Rengoku")
})