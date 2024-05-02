"use client";

import { EventFormNav } from "../_components/event-forms-nav";
import { useForm } from "./_context/form-context-hook";


export default function eventFormLayout({children , params} : {children : React.ReactNode , params : {eventid:string}}){
      
      const eventFormData =useForm();
      eventFormData?.setEventId(params.eventid);
      return <div className="h-full bg-slate-100 flex flex-col ">
           <EventFormNav eventId={params.eventid} />
           <div className="mt-16 h-full">            
                       {children}
           </div>
      </div>
}