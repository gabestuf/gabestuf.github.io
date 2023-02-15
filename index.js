require('dotenv').config()
const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;

const bodyParser = require("express").json;
app.use(bodyParser());
app.use(express.static("public"));
app.use(express.json());

app.get("/hlep", (req, res) => {
    res.sendFile('./index.html', { root: path.join(__dirname, 'public') })
})

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})