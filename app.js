import express from "express";

const app = express();

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get('/lak', (req,res) => {
    res.send("Hello Laksa")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
