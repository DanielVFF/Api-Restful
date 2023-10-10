import crypto from 'crypto';
require('dotenv').config();


class authentication{
    private ramdomNumber : number | string;
    private salt : number | string;
    private secret : string;
    constructor(){
        this.ramdomNumber = crypto.randomBytes(128).toString('base64');
        this.salt = process.env.SALT??999
        this.secret = process.env.SECRET??"Secret";
    }
    public createAuthentication(password : string){
        return crypto.createHmac('sha256',[this.salt,password].join('/')).update(this.secret).digest('hex')
    }
}