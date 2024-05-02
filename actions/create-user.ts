"use server";
import { db } from "@/lib/db";
import {z} from "zod";
import { revalidatePath } from "next/cache";



const CreateUser = z.object({
    username : z.string()
})

export async function create(formData : FormData){

  const {username} = CreateUser.parse({
    username : formData.get("user")
  });

    await db.user.create({
        data : {
             username : username,
             
        }
    });

    revalidatePath("/profile");
}