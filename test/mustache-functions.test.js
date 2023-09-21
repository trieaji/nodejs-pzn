import Mustache from "mustache";
import fs from "fs/promises";

test("Functions", async () => {
    const parameter = {
        name: "Sanosuke",
        upper: () => {
            return (text, renderingbro) => {
                return renderingbro(text).toUpperCase();
                // return text.toUpperCase();
            }
        }
    }

    const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
    console.info(data);
    expect(data).toBe("Hello SANOSUKE")
})