const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(require("cors")());
app.use(bodyParser.urlencoded({extended: true, limit: '50mb', parameterLimit: 50000}))
app.use(bodyParser.json({limit: "50mb"}))


app.get("/", (req, res)=>{
    res.status(200).send(JSON.stringify({
        API: "FOX API - GET",
        message: "Olá mundo!"
    }, null, 3))
})

app.post("/", (req, res)=>{
    res.send(JSON.stringify({
        API: "FOX API - POST",
        message: "Olá universo!",
        data: req.body
    }))
})

app.listen(3001, ()=>console.log("http://localhost:3001"))