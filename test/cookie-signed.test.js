import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("ACCHAGUTCHA"))
app.use(express.json())

// cara baca signed cookie
app.get('/', (req,res) => {
    const nawa = req.signedCookies["name"]
    res.send(`Hello ${nawa}`)
})

// cara membuat signed cookie
app.post('/login', (req,res) => {
    const namae = req.body.name
    res.cookie("Login", namae, {path: "/", signed: true})
    res.send(`Hello ${namae}`)
})

// cara baca signed cookie
test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
    .set("Cookie", "name=s%3AKorAzoN.GmaZY8abotp8fsVmYHP6qUU9tOdm0PinhTkdAHH6xHY; Path=/")
    expect(response.text).toBe(`Hello KorAzoN`)
})

// cara membuat signed cookie
test("Test Cookie Write", async () => {
    const response = await request(app).post("/login")
    .send({name: "KorAzoN"})
    // console.info(response.get("Set-Cookie"))
    expect(response.get("Set-Cookie").toString()).toContain(`KorAzoN`)
    expect(response.text).toBe(`Hello KorAzoN`)
})

