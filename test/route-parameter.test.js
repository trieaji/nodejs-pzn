import express from "express";
import request from "supertest";

const app = express();

app.get('/products/:id', (req,res) => {
    const idProduct = req.params.id
    res.send(`Product: ${idProduct}`)
})

app.get('/categories/:id(\\d+)', (req,res) => {
    const idCategory = req.params.id
    res.send(`Category: ${idCategory}`)
})

// app.get('/seller/:idSeller/partner/:idPartner', (req,res) => {
//     req.params.idSeller
//     req.params.idPartner
// })

test("Test Route Parameter", async () => {
    let response = await request(app).get("/products/eko");
    expect(response.text).toBe("Product: eko");

    response = await request(app).get("/products/oi");
    expect(response.text).toBe("Product: oi");
    
    response = await request(app).get("/categories/111");
    expect(response.text).toBe("Category: 111");

    response = await request(app).get("/categories/yohohoho");
    expect(response.status).toBe(404);

    
})