const {Client } = require('pg')

const conn = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "1234",
        database: "demopost"
    })

const connDb = () => {
    conn.connect().then(() => {console.log("Database Connected !")})
}
module.exports = { connDb , conn} ;