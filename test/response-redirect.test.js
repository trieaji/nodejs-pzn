import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req,res) => {
    res.redirect('http://google.com')
})

test("Test Response Redirect", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(302);
    expect(response.get('location')).toBe('http://google.com')
})