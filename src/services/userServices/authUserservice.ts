import { User } from '../../model/UserModel'
import bcrypt from 'bcrypt'
import credentials from '../../common/credentails';
import {authencation} from '../../common/authcanticate';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';



export async function authUser(data: any) {
    try {
        const dataOfUser = await authencation(data);
        return dataOfUser
    } catch (error) {
        console.log('Error in authenticate user')
        return `Error in authenticate user:- ${error}`
    }
}