import express from "express";
import request from "supertest";

const logger = (req,res,next) => { // Bikin middleware yang bisa melakukan kode apapun
    console.info(`Receive request: ${req.method} ${req.originalUrl}`)
    next()
}

const addPoweredHeader = (req,res,next) => { // Bikin middleware untuk memanipulasi response
    res.set('X-Powered-By', 'Laksa Zaman Now')
    next()
}

const addPowere = (req,res,next) => {
    res.set('X-Powered', 'Laksa')
    next()
}

const apiKeyMiddleware = (req,res,next) => { // Bikin middleware untuk melakukan validasi
    if(req.query.apiKey){
        next()
    } else {
        // res.status(401).send('Unauthorized');
        res.status(401).end();
    }
}

const requestTimeMiddleware = (req,res,next) => { // Bikin middleware untuk memanipulasi data request nya
    // var myTime = req.requestTime 
    // myTime = Date.now()
    req.requestTime = Date.now() // menambah attribute baru -> requestTime
    next()
}

const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(addPowere)
app.use(requestTimeMiddleware)

app.get('/yo', (req,res) => {
    res.send("Hello World")
})

app.get('/oy', (req,res) => {
    res.send("Hello World")
})

app.get('/time', (req,res) => {
    res.send(`Hello, Today is ${req.requestTime}`)
})

test("Test Response Middleware", async () => {
    const response = await request(app).get("/yo").query({apiKey: "111"});
    expect(response.get('X-Powered-By')).toBe('Laksa Zaman Now');
    expect(response.get('X-Powered')).toBe('Laksa');
    expect(response.text).toBe("Hello World");
})

test("Test Response Middleware Unauthorized", async () => {
    const response = await request(app).get("/oy");
    expect(response.status).toBe(401)
})

test("Test Response Middleware Time", async () => {
    const response = await request(app).get("/time").query({apiKey: "111"})
    expect(response.text).toContain("Hello, Today is");
})





/*
Fungsi middleware
- Eksekusi kode sebelum sebuah router di eksekusi -> contohnya mau validasi request nya, memastikan user nya sudah login atau belum
- Mengubah Request atau Response object sebelum router di eksekusi -> contohnya mau mengubah atribut, mau melakukan logging
- Mengakhiri response tanpa harus mengeksekusi route
- Dan lain-lain

Spesifikasi Middleware
- Untuk membuat middleware, kita cukup membuat function dengan 3 parameter, request, response, dan next
- request adalah request object
- response adalah response object
- next adalah next function, bisa middleware selanjutnya atau router
*/