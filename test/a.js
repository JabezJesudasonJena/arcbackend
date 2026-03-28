const express = require("express")

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello From express server")
})

app.get('/user', (req, res) => {
    res.json({name : "Jabez", age: 18})
})

app.listen(3000, () => {
    console.log("Server started")
})