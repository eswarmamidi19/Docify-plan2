"use client";

import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DeleteEventForm } from "@/actions/delete-event";
import { RedirectToFormPage } from "@/actions/redirect-to-forms";

type CFooterType = {
    eventId : string;
}

export function CFooter({eventId} : CFooterType){
     
    const DeleteEventFormWithId = DeleteEventForm.bind(null , eventId);
    const RedirectToFormPageWithId = RedirectToFormPage.bind(null , eventId);
       return <div className="w-full flex items-center gap-x-2 mt-5">


       <Button
         size="lg"
         variant={"outline"}
         className=" w-full"
         onClick={() => {RedirectToFormPageWithId()}}
       >
         <FaExternalLinkAlt className="w-4 h-4"/>
       </Button>
       
       <Button
         size="lg"
         variant={"destructive"}
         className=" w-full"
         onClick={()=>DeleteEventFormWithId()}
       >
         <MdDelete className="w-5 h-5" />
       </Button>
     </div>
}