import Mustache from "mustache";
import fs from "fs/promises";

test("List object   ",async () => {
    // Mustache.parse("Hello {{name}}")

    const helloTemplate = await fs.readFile("./templates/list-object.mustache")
        .then((data) => {
            return data.toString()
        })

    const dataaja = Mustache.render(helloTemplate, {
        students: [
            {name:"Zenitsu", value: 100},
            {name:"Kaigaku", value: 90}
        ]
    })
    console.info(dataaja)
    expect(dataaja).toContain("Zenitsu")
    expect(dataaja).toContain("Kaigaku")
    expect(dataaja).toContain("90")
    expect(dataaja).toContain("100")
})