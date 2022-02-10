const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Here is the api subdomain");
});

app.get("*", (req, res) => {
    res.send("404");
});

module.exports = app;