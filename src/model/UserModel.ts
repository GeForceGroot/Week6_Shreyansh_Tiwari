import { DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import { v4 as uuidv4 } from 'uuid';

interface UserAttributes {
    id?: string,
    username: string,
    password: string,
    email: string,
    isAdmin : boolean
}


class User extends Model<UserAttributes> implements UserAttributes {
    public id?: string
    public username !: string
    public password !: string
    public email !: string
    public isAdmin !: boolean
}


User.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Users',
    }
)


export {
    User
}