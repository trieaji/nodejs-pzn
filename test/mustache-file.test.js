import Mustache from "mustache";
import fs from "fs/promises";

test("Mustache File",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/hello.mustache")
    // console.log(helloTemplate)
        // .then((data) => data.toString())
        .then((data) => {
            // console.info(data.toString())
            return data.toString()
        })
    // console.info(helloTemplate)
    const dataaja = Mustache.render(helloTemplate, {
        title: "Hashira"
    })
    console.info(dataaja)
    expect(dataaja).toContain("Hashira")
})