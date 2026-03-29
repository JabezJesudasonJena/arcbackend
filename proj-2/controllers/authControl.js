import {conn} from "../db/db.js";
import bcrypt from 'bcrypt';

export const signUp = async ({name, email, password}) => {
    const existingUser = await conn.query(`
        select * from users where email = '${email}';    
    `)
    if(existingUser.length > 0) {
        return { message: "User already exists ", userCreated : 0};
    } else {
        const hashedPassword = await bcrypt.hash(password, 10)
        const createUser = await conn.query(`
            insert into users(name, email, password) values('${name}', '${email}', '${hashedPassword}');    
        `)
        return {user : createUser, userCreated : 1};
    }
}


