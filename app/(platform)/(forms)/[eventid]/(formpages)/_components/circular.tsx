"use client";

import { useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";
import { getFormData } from "@/actions/get-formdata-by-id";


export function Circular() {
   
   const context = useForm();
   
   

 
  
    const [formData , setFormData] = useState<{
      id: string;
      title: string;
      startDate: string;
      endDate: string;
      departmentName: string;
      authorId: string;
  }>();
  
   async function getData(){
    const data= await getFormData!(context?.eventId!)

    console.log(data);

    setFormData(data as {
      id: string;
      title: string;
      startDate: string;
      endDate: string;
      departmentName: string;
      authorId: string;
  });
   }
 
   const date = new Date();
   let day = date.getDate();
   let month = date.getMonth()+1;
   let year = date.getFullYear();

    useEffect(()=>{
        getData();
    } , [context?.eventId])
   
    let currentDate = `${day}-${month}-${year}`;
   
  

   return (
    <div className="flex h-full items-center justify-center p-6 " id="circular">
      {/* A4 Preview */}

      <div className=" container mx-auto p-4 " >
        <div className="bg-white shadow-md rounded px-8 py-6">
          <div className="">
            <div className="h-3/4">
              <div className="h-[15%]  flex justify-center ">
                <div className="w-[80%]  border-b border-gray-500 flex items-center">
                  <img
                    src="/Header.png"
                    alt="College Header"
                    className="dark:invert w-full h-full"
                  />
                </div>
              </div>
              <div className="h-[85%]  flex flex-col items-center gap-5 ">
                <h1 className="text-xl tracking-wide font-bold">
                  {" "}
                  Department of {formData?.departmentName}
                </h1>
                <div className="w-full text-end p-3">Date : {currentDate}</div>
                <h1 className="text-xl tracking-wide font-bold underline underline-offset-4">
                  Circular 
                </h1>
                {/* content */}

                <p className="indent-8">
                  All the teching staff of {formData?.departmentName} are hereby informed that the
                  Department of {formData?.departmentName} is going to
                  organise a {formData?.title} programe on " {context?.subject} " From {formData?.startDate} to {formData?.endDate} . Hence, all
                  the Facuty are advised to attend the programme and utilize
                  this opportunity. For further information you can contact
                  event coordinator {context?.coordinator === "" ? "coordinator" : context?.coordinator } , Associate Professor,
                  Department of {formData?.departmentName}.
                </p>

              </div>
              <div className="w-full text-end p-3 mt-72 font-bold"> Signature of co ordinator </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
