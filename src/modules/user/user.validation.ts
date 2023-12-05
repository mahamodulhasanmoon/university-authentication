import { z } from "zod";

export const userSchema = z.object({

    password: z.string().max(20,{message:'password can not be more than 20 characters'}),
    role:z.enum(['admin', 'student','faculty']),
    id: z.string(),
    name:z.string().max(20,{message:'name can not be more than 20 characters'}),
    email:z.string().email({message:'email is not valid'}),
    needPasswordChange:z.boolean().optional(),
    isDeleted:z.boolean().optional(),
    status:z.enum(['in-progress' , 'blocked'])
   
});