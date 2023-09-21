import express from "express";
import request from "supertest";

const app = express();

app.get('/products/*.json', (req,res) => {
    res.send(req.originalUrl);
})

app.get('/categories/*(\\d+).json', (req,res) => {
    res.send(req.originalUrl);
})

test("Test ExpressJS", async () => {
    let response = await request(app).get("/products/hoi.json");
    expect(response.text).toBe("/products/hoi.json");

    response = await request(app).get("/products/oi.json");
    expect(response.text).toBe("/products/oi.json");
    
    response = await request(app).get("/categories/111.json");
    expect(response.text).toBe("/categories/111.json");

    response = await request(app).get("/categories/yohohoho.json");
    expect(response.status).toBe(404);
    
})