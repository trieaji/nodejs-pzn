import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req,res) => {
    res.set({
        "x-power-luur":"Programmer Zaman Now",
        "X-Author": "Laksa"
    })
    res.send(`Hello response`);
})

test("Test Response Header", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello response");
    expect(response.get("x-power-luur")).toBe("Programmer Zaman Now");
    expect(response.get("X-Author")).toBe("Laksa");
})