import * as dotenv from 'dotenv';
dotenv.config();


const credentials = {
    postgres: {
        DATABASE: process.env.DATABASE || "",
        PASSWORD: process.env.PASSWORD || "",
    },
    jwt: {
        SECRET_KEY: process.env.SECRET_KEY || ""
    },
    goCardLess:{
        TOKEN : process.env.TOKEN || ""
    }
}


export default credentials;