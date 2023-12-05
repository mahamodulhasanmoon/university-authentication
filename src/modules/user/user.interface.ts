export interface IUser {
    id:string;
    password:string;
    name:string;
    email:string;
    needPasswordChange:boolean;
    role:'admin' | 'student' | 'faculty';
    isDeleted:boolean;
    status:'in-progress' | 'blocked';
}