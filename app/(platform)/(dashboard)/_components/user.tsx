import { deleteUser } from "@/actions/delete-user";
import { Button } from "@/components/ui/button";

type UserProps ={
  username : string;
  id: string;    
}



export function User({username , id} : UserProps ){

    const deleteUserWithId = deleteUser.bind(null ,id);

       return <form action={deleteUserWithId} className="flex gap-2 items-center p-2">         
             <p>Username : {username}</p>
            <Button size={"sm"} variant={"destructive"}> Delete </Button>
         </form>

}