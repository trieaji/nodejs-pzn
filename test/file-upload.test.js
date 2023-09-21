import express from "express";
import request from "supertest";
import expressFileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(expressFileUpload());

app.post('/json', (req,res) => {
    const name = req.body.name;
    res.json({
        hello: `Hello ${name}`
    });
})

app.post('/form', (req,res) => {
    const name = req.body.name;
    res.json({
        hello: `Hello ${name}`
    });
})

app.post('/file', async (req,res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname + "/upload/" + textFile.name);

    res.send(`Hello ${req.body.namaewa}, you uploaded ${textFile.name}`);
})

test("Test Request File Upload", async () => {
    let response = await request(app)
    .post("/file")
    .set("Content-Type", "multipart/form-data")
    .field("namaewa", "Sanemi")
    .attach("article", __dirname + "/contoh.txt")
    console.info(response.text)
    expect(response.text).toBe(`Hello Sanemi, you uploaded contoh.txt`);
})


test("Test Request JSON & Test Request Form", async () => {
    let response = await request(app)
    .post("/json")
    // .set("Content-Type", "application/json")
    .send({name: "World"})
    expect(response.body).toEqual({
        hello: `Hello World`
    });

    response = await request(app)
    .post("/form")
    // .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=Laksa")

    expect(response.body).toEqual({
        hello: `Hello Laksa`
    });
})