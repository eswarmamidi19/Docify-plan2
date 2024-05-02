"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import {z} from "zod";

const CreateEvent = z.object({
     title : z.string(),
     startDate : z.string(),
     endDate : z.string(),
     departmentName : z.string()
})

type CreateEventType = z.infer<typeof CreateEvent>

export async function CreateEventForm( authId:string , formData : FormData){

    //  console.log(JSON.stringify({
    //     title : formData.get("title"),
    //     startdate : formData.get("startdate"),
    //     endDate : formData.get("enddate"),
    //     departmentName : formData.get("departmentname") 
    // }));
       const newEvent = CreateEvent.safeParse( {
           title : formData.get("title"),
           startDate : formData.get("startdate"),
           endDate : formData.get("enddate"),
           departmentName : formData.get("departmentname") 
       }
       );

     if(!newEvent.success){
        console.log("Invalid " + newEvent.error)
          return {
            message : "Invalid Inputs"
          }
     }

     try{
        const Event = await db.eventform.create({
            data:{
                title : newEvent.data.title,
                startDate : newEvent.data.startDate,
                endDate : newEvent.data.endDate,
                departmentName : newEvent.data.departmentName,
                author : {
                    connect :{
                        authId : authId
                    }
                }
            }
         })
         console.log(Event);
     } catch(e){
        console.log("db error" + e);
         return {
             message : "DataBase error",

         }
     }
    
 
      revalidatePath("/profile");
       
} 