import {conn} from "../db/db.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

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

export const login = async ({email, password}) => {
    try {
        const user = await conn.query(
            `select * from users where email = $1`, [email]
        )
        if (user.rows.length == 0 ) { return {loggedIn : 0, message : "User does not exits"}}
        else { 
            const dbUser = user.rows[0];
            const isMatch = await bcrypt.compare(password, dbUser.password);
            if (isMatch) {
                const jwtContent = {userId : dbUser.id, email: dbUser.email};
                const jwtToken = await jwt.sign(jwtContent, process.env.JWT_SECRET);  
                console.log(jwtToken)
                return {loggedIn: 1, token : jwtToken}
            }
        }
    }catch (err){
        return {message : err.message}
    }
}