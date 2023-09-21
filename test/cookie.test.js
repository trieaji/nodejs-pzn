import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser())
app.use(express.json())

app.get('/', (req,res) => {
    const nawa = req.cookies["name"]
    res.send(`Hello ${nawa}`)
})

app.post('/login', (req,res) => {
    const namae = req.body.name
    res.cookie("Login", namae, {path: "/"})
    res.send(`Hello ${namae}`)
})

test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
    .set("Cookie", "name=Laksa;author=Programmer")
    expect(response.text).toBe(`Hello Laksa`)
})

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login")
    .send({name: "KorAzoN"})
    expect(response.get("Set-Cookie").toString()).toBe(`Login=KorAzoN; Path=/`)
    expect(response.text).toBe(`Hello KorAzoN`)
})

