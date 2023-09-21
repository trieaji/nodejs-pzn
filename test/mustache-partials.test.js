import Mustache from "mustache";
import fs from "fs/promises";

test("Partials",async () => {
    // Mustache.parse("Hello {{name}}")

    const contentTemplate = await fs.readFile("./templates/content.mustache")
        .then((data) => {
            return data.toString()
        })
    const headerTemplate = await fs.readFile("./templates/header.mustache")
        .then((data) => {
            return data.toString()
        })
    const footerTemplate = await fs.readFile("./templates/footer.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(contentTemplate, {
        title: "Hinokami Kagura",
        content: "Belajar mustache JS"
    }, {
        header: headerTemplate,
        footer: footerTemplate
    })
    console.info(dataaja)
    expect(dataaja).toContain("Hinokami Kagura")
    expect(dataaja).toContain("Belajar mustache JS")
    expect(dataaja).toContain("Powered by Laksa Aji")
})