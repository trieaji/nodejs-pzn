import Mustache from "mustache";
import fs from "fs/promises";

test("Sections Not Show",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/sections.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {}); //kirim data berupa object kosong
    // console.info(dataaja)
    expect(dataaja).not.toContain("Hello Person")
})

test("Sections Show",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/sections.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {
        persen: {
            name: "Giyuu"
        }
    });
    console.info(dataaja)
    expect(dataaja).toContain("Hello Person")
})