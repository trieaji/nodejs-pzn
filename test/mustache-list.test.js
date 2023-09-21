import Mustache from "mustache";
import fs from "fs/promises";

test("List",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/list.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {
        hobbies: ['coding', 'gaming']
    })
    console.info(dataaja)
    expect(dataaja).toContain("coding")
    expect(dataaja).toContain("gaming")
})