const express = require('express')
const app = express()
require('dotenv').config();

app.get("/", (req, res, next) => {
    res.send(`My Name is ${process.env.NAME}`)
})

app.listen(3000, () => {
    console.log(`Server is running on Port 3000`)
})