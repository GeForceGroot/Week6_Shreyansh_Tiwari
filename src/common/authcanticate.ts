import jwt from 'jsonwebtoken';
import credentials from './credentails';

export async function authencation(data: any) {
    try {
        const decode = await jwt.verify(data.token, credentials.jwt.SECRET_KEY)
        if(decode){
            return decode
        }else{
            return "Auth token does not match"
        }
    } catch (error) {
        console.log('Error in authenticate user')
        return `Error in authenticate user:- ${error}`
    }
}