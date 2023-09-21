import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req,res) => {
    const type = req.get("accept"); // for req header
    res.send(`Hello ${type}`);
})

test("Test Query Parameter", async () => {
    /* const response = await request(app).get("/").set("Accept", "application/plain")
    expect(response.text).toBe("Hello application/plain"); */ // -> Bisa pakai ini

    const response = await request(app).get("/").set("Accept", "text/plain")
    expect(response.text).toBe("Hello text/plain");  // -> Bisa juga pakai ini
})