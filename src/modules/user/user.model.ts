import { Schema,model } from "mongoose";
import { IUser } from "./user.interface";

 const userSchema = new Schema<IUser>({
id:{
    type: String,
    required:true
},
name:{
    type: String,
    required:true
},
email:{
    type: String,
    required:true
},
password:{
    type: String,
    required:true
},
isDeleted:{
    type: Boolean,
    required:true
},
role:{
    type:String,
    enum:['student','admin','faculty']
},
status:{
    type:String,
    enum:['in-progress','blocked']
},


},{timestamps:true})

export const User = model<IUser>('User',userSchema);