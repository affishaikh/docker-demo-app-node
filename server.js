const express = require("express")
const app = express();

app.use((req, res, next) => {
    console.log(req.method + "  " + req.path)
    next()
})

app.get("/", (req, res) => {
    res.send("Hello World! Beginning of Docker!");
})

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT);
})