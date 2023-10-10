import {UserCreateRequestBody} from '../interfaces/UserInterfaces'
import {responseInterface} from '../interfaces/ResponseInterface'

export class UserValidation{
    constructor(){
    }
    public createUserValidation(body : UserCreateRequestBody){
        const response: responseInterface = {
            http: 200,
        };
        if (!body.username || body.username.trim() === '') {
            response.http = 400;
            response.error = 'Username is required.';
            return response;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!body.email || !body.email.match(emailRegex)) {
            response.http = 400;
            response.error = 'Invalid email format.';
            return response;
        }
        return response;
    }
}