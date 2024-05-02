"use client";

import { getFormData } from "@/actions/get-formdata-by-id";
import { useEffect } from "react";
import { useForm } from "./_context/form-context-hook";

export default function page({
  params,
}: {
  params: {
    eventid: string;
  };
}) {
 const context = useForm();
    useEffect(()=>{
         (async ()=>{
            const data = await getFormData(params.eventid);
             context?.setFormData(data!) 
         })()
    } , [params.eventid]);


  return <div> FormDashBoard {JSON.stringify(context?.formData)} </div>;
}
