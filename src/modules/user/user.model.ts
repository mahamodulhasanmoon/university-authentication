import { Schema,model } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from 'bcrypt'

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

userSchema.pre('save',async function(next){
     this.password = await bcrypt.hash(
        this.password,
        Number(1234556)
        
        )
        next()
})

userSchema.post('save',async function(doc,next){
     doc.password = ''
        next()
})

export const User = model<IUser>('User',userSchema);