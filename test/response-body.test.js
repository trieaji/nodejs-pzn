import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req,res) => {
    // res.set('Content-Type', 'text/html')
    res.set('x-power-luur', 'programmer')
    // res.send(`Hello Laksa`);
    res.send(`<html><body>Hello Laksa</body></html>`)
})

test("Test Response Body", async () => {
    const response = await request(app).get("/");
    // expect(response.get("Content-Type")).toContain("text/html");
    expect(response.get("x-power-luur")).toBe("programmer");
    expect(response.text).toBe(`<html><body>Hello Laksa</body></html>`);
    // expect(response.text).toBe(`Hello Laksa`);
})