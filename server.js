const express = require("express")
const app = express();
const {increaseVote} = require("./db/crudOperations")

app.use((req, res, next) => {
    console.log(req.method + "  " + req.path)
    next()
})

app.get("/", (req, res) => {
    res.send("Hello World! Beginning of Docker!");
})

app.get("/vote", (req, res) => {
    increaseVote().then((data) => {
        res.send("" + data.count)
    });
})

app.listen(8080, () => {
    console.log("Server is listening on port " + 8080);
})