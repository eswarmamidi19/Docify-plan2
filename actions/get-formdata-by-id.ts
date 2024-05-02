"use server";

import { db } from "@/lib/db";

export async function getFormData(eventId : string){

  

    try{     
           const formData = await db.eventform.findFirst({
            where:{
                id : eventId
            }
           })
           return formData
    }catch(e){
          console.log("db error");
    }
}