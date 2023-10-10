import mongoose from "mongoose";
import { user } from "../schemas/UserSchema";
import { UserCreateRequestBody } from '../interfaces/UserInterfaces';

export class UserModel{
    private userSchema;
    constructor(){
        this.userSchema = user;
    }
    public getAllUsers =()=>{
        const user = this.userSchema.find();
        return user
    }
    public findUserByEmail =(email : string )=>{
        const user = this.userSchema.findOne({email: email})
        return user;
    }
    public createUser = (body : UserCreateRequestBody)=>{
        const newUser = new this.userSchema().save().then((user)=>user.toObject);
        return newUser;
    }
} 
