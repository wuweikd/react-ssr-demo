import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from '../client/view/components/home'
import { StaticRouter } from 'react-router-dom'
import Routes from "../client/view/Routes";

const app = express()
app.use(express.static("public"))
app.get("*", (req, res) => {
    const content = renderToString(
        <StaticRouter>
            <Routes />
        </StaticRouter>
    )
    const html = `
        <html>
            <head ></head>
            <body>
            <div>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </div>
        </body>
        </html>

    `
    res.send (html)
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})

