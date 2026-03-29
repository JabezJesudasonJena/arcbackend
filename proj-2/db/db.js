import { Client } from "pg";


export const conn = new Client({
        host: "localhost",
        user:"postgres",
        database:"demopost",
        password:"1234"
})

export const connDB = async () => {
    await conn.connect(() => {console.log("connected to database")});
}

// export default {conn, connDB}