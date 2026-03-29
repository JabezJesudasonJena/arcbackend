import { Client } from "pg";


const conn = new Client({
        host: "localhost",
        user:"postgres",
        database:"demopost",
        password:"1234"
})

const connDB = async () => {
    await conn.connect(() => {console.log("connected to database")});
}

export default {conn, connDB}