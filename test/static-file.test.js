import express from "express";
import request from "supertest";

const app = express();
// app.use(express.static(__dirname + "/static")); Bisa pakai ini
app.use("/tekotok",express.static(__dirname + "/static")); //Bisa pakai ini

app.get('/', (req,res) => {
    res.send("Hello World")
})

test("Test Static File", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World");
})

// test("Test Static File contohStatic.txt", async () => {
//     const response = await request(app).get("/contohStatic.txt");
//     expect(response.text).toBe("This is sample test luur");
// }) Bisa pakai ini

test("Test Static File /testes/contohStatic.txt", async () => {
    const response = await request(app).get("/tekotok/contohStatic.txt");
    expect(response.text).toBe("This is sample test luur");
}) // Bisa pakai ini