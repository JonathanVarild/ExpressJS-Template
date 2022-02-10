const express = require("express")
const app = express()

app.get("/", (req, res) => {

    var domain = req.get("host").match(/\w+/)

    if (domain)
        var subdomain = domain[0]

    res.send("Dynamic: " + subdomain)

})

app.get("/test", (req, res) => {
    res.send("Welcome to test")
});

app.get("*", (req, res) => {
    res.send("404");
});

module.exports = app;