//const express = require("express")
// const React = require("react")
// const renderToString = require('react-dom/server').renderToString
// const Home = require("./client/components/Home").default

import express from "express"
import React from "react"
import {renderToString} from "react-dom/server"
import App from "./client/index"

const app = express()

app.use(express.static("public"))

app.get('/', (req, res) => {
    const content = renderToString(<App />)
    const html = `
    <html>
    <head></head>
    <body>
        <div>${content}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `
    res.send(html)
})

app.listen(3000, () => {
    console.log("Listening on port 3000.")
})