
// "use client"
// import { currentUser , useUser } from "@clerk/nextjs";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useClerk } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { create } from "@/actions/create-learn";


// export default function GoToSignInPage(){

         

         
//          const {signOut} = useClerk();
//          const user = useUser();
//          const router = useRouter();

//          async function CreateUser(){
//           const res = create({username : user.user?.username! , email : user.user?.emailAddresses[0].toString() !  })
//       }
         
//      return  <div>
//           hi {user.user?.username}
//           {user.user?.emailAddresses[0].toString()}
//           <Button onClick={async ()=>{
//             CreateUser();   
//             signOut(()=>{router.push("/sign-in")})
//           }}> Move to SignIn Page</Button>
//      </div>
// }


import { create } from "@/actions/create-learn";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from 'next/navigation'
export default async function MedeatorPage(){
          const {userId } = auth();
          const user = await currentUser()
          const username = user?.username;
          const email = user?.emailAddresses[0].emailAddress
           
          create({
                 authId : userId!,
                 username : username!,
                email : email!
          })

          redirect("/profile");

       return <h1>
            Loding
       </h1> 
       
}