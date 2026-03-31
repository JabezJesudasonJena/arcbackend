import bcrypt from 'bcrypt';
import { conn } from '../db/db.js';
import jwt from 'jsonwebtoken';

export const registerService = async ({name, email, password, role}) => {
    try {
        const checkExistUser = await conn.query('select * from users where email = $1;', [email]);
        if(checkExistUser.rows.length > 0 ){return {signedUp:0, message: "User already exist"}};
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await conn.query(
            'insert into users(name, email, password, role) values($1, $2, $3, $4);',
            [name, email, hashedPassword, role] 
        );
        return {signedUp:1, user : user.rows};
    }catch(err){
        return {signedUp:0, message: err.message}
    }
}

export const loginService = async ({email, password}) => {
    try{
        const checkUserExist = await conn.query('select * from users where email = $1;', [email]);
        if (checkUserExist.rows.length == 0) return {loggedIn:0, message: "User does not exists"};
        const dbUser = checkUserExist.rows[0];
        const isMatchPassword = await bcrypt.compare(password, dbUser.password);
        if (!isMatchPassword) return {loggedIn:0, message: "Wrong password"};
        const token = jwt.sign({userId: dbUser.id, role: dbUser.role}, process.env.JWT_SECRET);
        return {loggedIn:1, jwtToken : token};
    }catch(err){
        return {loggedIn:0, message: err.message}
    }
}






