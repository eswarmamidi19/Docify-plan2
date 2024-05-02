"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";


import {z} from "zod";




const CreateUser = z.object({
    username : z.string(),
    email : z.string().email(), 
    authId : z.string()
});



type CreateUserType = z.infer<typeof CreateUser>


export async function create(userData : CreateUserType){
     
     const userInfo =  CreateUser.safeParse(userData);

     
     if(!userInfo.success){
           return userInfo.error;
     }


     try{
        await db.user.create({
            data:{
                 username : userData.username,
                 email: userData.email,
                 authId : userData.authId
            }
         });
         
     }catch(e){
           return {
               message : "DataBase Error"
           }
     }

}