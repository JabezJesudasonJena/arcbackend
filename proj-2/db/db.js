import { Client } from "pg";

const conn = new Client({
    host: "localhost",
    user:"postgres",
    database:"demopost",
    password:"1234"
})