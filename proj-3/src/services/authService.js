import bcrypt from 'bcrypt';
import { conn } from '../db/db.js';

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


export const loginService = ascyn ({email, password}) => {
    try {
        
    }catch(err) {
        
    }
}







