"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteUser(id:string){

    await db.user.delete({
        where : {
              id: id
        }
    })

    revalidatePath("/profile");
}