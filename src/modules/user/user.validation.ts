import { z } from "zod";

const isStrongPassword = (password:string) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    return strongPasswordRegex.test(password);
  };
export const userValSchema = z.object({

    password: z.string()
    .max(20,{message:'password can not be more than 20 characters'})
    .refine((value) => isStrongPassword(value), {
        message: 'Password must be strong (include at least one uppercase letter, one lowercase letter, and one digit)',
      }),
    role:z.enum(['admin', 'student','faculty']),
    id: z.string(),
    name:z.string().max(20,{message:'name can not be more than 20 characters'}),
    email:z.string().email({message:'email is not valid'}),
    needPasswordChange:z.boolean().optional(),
    isDeleted:z.boolean().optional(),
    status:z.enum(['in-progress' , 'blocked'])
   
});