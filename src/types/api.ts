
export interface User {
    username: string;
    email: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    message: string;
  }
  export  interface FormDataReguister {
    username: string;
    email: string;
    password: string;
  }
  export interface Contact{
    id?:number;
    name:string;
    phone:string;
    email:string,
    user?:User,
  } 