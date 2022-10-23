import {Model} from "koa-msc";
import {DataTypes} from "sequelize";
import {Table} from "koa-msc";
@Model
export class UserModel extends Table{
    userName=DataTypes.STRING
    age={
        type:DataTypes.INTEGER,
        defaultValue:18
    }
}
export interface UserInfo{
    id:number
    userName?:string
    age?:number
}
