import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection';

interface BikeAttributes {
    id?: number,
    name: string,
    latitude: number,
    longitude: number,
    value: number,
    //TODO - Create a camp for Array<Date> 
}

class BikeModel extends Model<BikeAttributes> implements BikeAttributes {
    public id!: number;
    public name!: string;
    public latitude: number;
    public longitude: number;
    public value: number;

    public readonly createdAt!: Date

}

//TODO - Create a BikeModel.init() 