import { Client } from "pg";

export const conn = new Client({
    host: "localhost",
    user:"postgres",
    database:"demoauth",
    password:"1234"
})

export const connDb = async () => { await conn.connect(() => {console.log("Database Connected !")}) };