import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {type: String, required : true },
    email : {type: String, required : true },
    authentication: {
        password: {type: String, required : true, select : false},
        sessionToken : {type: String, select : false},
    }
});
export const user = mongoose.model('User',userSchema);
//module.exports.