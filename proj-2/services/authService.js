import {conn} from "../db/db.js";
import bcrypt from 'bcrypt'

export const signUp = async ({name, email, password}) => {
    try { 
        const checkExistUser = await conn.query(`
           select * from users where email = $1;;
        `, [email])
        if(checkExistUser.rows.length > 0 ) { return {userCreated : 0, message : "User already present"}}
        else {
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await conn.query(
                `insert into users(name, email, password) values($1, $2, $3) returning *;`,
                [name, email, hashedPassword]
            )
            console.log(newUser.rows)
            return {userCreated : 1, createdUser : newUser.rows}
        }
        
    }catch(err){
        return {message : err.message}
    }
} 