import { conn } from "../db/db.js";
import bcrypt from 'bcrypt';

export const signUpRole = async ({name, email, password, role}) => {
    try {
        const existUser = await conn.query(
            `select * from testdatauser where email = $1`, [email]
        )
        if (existUser.rows.length > 0 ) {
            return { signedUp: 0, message: "User already exists !"}
        }
        const password_hash = await bcrypt.hash(password, 10)
        const user = await conn.query(
            `insert into testdatauser(name, email, password_hash, role) values($1, $2, $3, $4);`, [name, email, password_hash, role]
        )
        return {signedUp : 1, user : user.rows};
    } catch (err) {
        return {signedUp : 0, message : err.message}
    }
}






