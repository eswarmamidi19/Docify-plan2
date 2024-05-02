"use client"
import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
  } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CFooter } from "./card-footer";
const font = Poppins({
    subsets :["latin"],
    weight:["600"]
})

type cardWrapperProps = {
    children : React.ReactNode;
    title : string;
    eventId : string;
} 

export function CardWrapper({children ,title , eventId} : cardWrapperProps){
     return <Card className="w-[400px]">
            <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                   <h1 className={cn("text-3xl font-semibold p-1" , font.className)}>
                          {title}
                   </h1>
                   <p className="text-muted-foreground text-sm">
                      eventId :  {eventId}
                  </p>
            </div>
           
           <CardFooter>
                <CFooter eventId={eventId}/>      
           </CardFooter>
            

     </Card>
}

// export function CardWrapper({children} : {children:React.ReactNode} ){
//     return <Card className="w-[350px] shadow-md ">
//      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
//             <h1 className={cn("text-3xl font-semibold p-1" , font.className)}>
//             Auth
//             </h1>

//             <p className="text-muted-foreground text-sm">
//                 Event form
//             </p>
//       </div>
//      <CardContent>
//          {children}
//     </CardContent> 
//     {

//       <CardFooter>
        
//       </CardFooter>
//     }   
//     <CardFooter>
       
//     </CardFooter>

//   </Card>
// }