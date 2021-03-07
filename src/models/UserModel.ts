import { DataType, DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../database/connection';

interface UserAttributes {
    id?: number;
    email: string;
    password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.CHAR,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false
    }  
}, {
    tableName: 'users',
    sequelize
})

sequelize.sync({force: false});

export default User;