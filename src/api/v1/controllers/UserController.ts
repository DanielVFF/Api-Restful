import { Request, Response} from 'express';
import {UserModel} from '../models/UsersModel';
import { UserValidation } from '../validations/UserValidation';

export class UsersController {
    
    private userModel : UserModel;
    private userValidation : UserValidation;

    constructor() {
        this.userModel = new UserModel();
        this.userValidation = new UserValidation();
    }
    public getAllUsers=(res : Response)=>{
        const users = this.userModel.getAllUsers();
        //Need to check if there's data before setting the status code
        res.status(200).send(users)
    }
    public getUserByEmail=(req: Request,res:Response)=>{
        const user = this.userModel.findUserByEmail(req.body.email)
        //Need to check if there's data before setting the status code
        res.status(200).send(user);
        return;
    }
    public createUser=(req:Request,res:Response)=>{
        const response = this.userValidation.createUserValidation(req.body);
        if(response.http!=200){
            res.status(response.http).send(response);
            return;
        }
        const newUser = this.userModel.createUser(req.body)
        //Need to check if there's data before setting the status code
        response.data = newUser;
        res.status(200).send(response);
    }
};



export default UsersController;