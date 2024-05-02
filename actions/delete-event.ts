"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function DeleteEventForm(id: string){
    console.log(id);

    try{
       await db.eventform.delete({
        where:{
            id:id
        }
       })      
    }catch(e){
        console.log("error in Db");
    }

    revalidatePath("/profile")
}