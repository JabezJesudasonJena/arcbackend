const express = require("express");
const {connDb, conn} = require("./db.js")

const app = express();
app.use(express.json())
connDb();


app.post("/signup", (req, res) => {
    
    const {name, email, password} = req.body;

    const insert_query = `insert into users(name, email, password) values ('${name}', '${email}', '${password}');`

    conn.query(insert_query, (err, result) => {
        if (err) {
            res.json({message: err.message});
        }
        else {
            console.log(result);
            res.json({message: "Data posted"})
        }
    });

});

app.get("/login", (req, res) => {
    const {email, password} = req.body;

    const searchQuery = `select * from users where email = '${email}' and password = '${password}' ;`

    conn.query(searchQuery, (err, result) => {
        if (err) res.json({message: err.message})
        else res.json({message: result.rows})
    })

});

app.get('/', (req, res) => {
    res.json({message : "Home"})
})



app.listen(3000, () => console.log("Serve is running !"))


