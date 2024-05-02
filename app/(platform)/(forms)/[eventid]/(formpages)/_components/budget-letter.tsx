
"use client";

import {useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";
import { getFormData } from "@/actions/get-formdata-by-id";


export function Budgetletter() {
   
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
    <div className="flex h-full items-center justify-center p-6 " id="budgetletter">
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
                  Budget Request Letter 
                </h1>
                {/* content */}

                <div className='self-start'>
                        From <br/>
                        A.Vanathi,<br/>
                        Head of the Department,<br/>
                        Computer Science and Engineering,<br/>
                        Aditya Engineering College(A).<br/>
                        Surampalem.<br/>
                        <br/>
                        To<br/>
                        The Principal,<br/>
                        Aditya Engineering College(A).<br/>

                        </div>
              </div>
              <p className="indent-8">
                  All the teching staff of {formData?.departmentName} are hereby informed that the
                  Department of {formData?.departmentName} is going to
                  organise a {formData?.title} programe on " {context?.subject} " From {formData?.startDate} to {formData?.endDate} . Hence, all
                  the Facuty are advised to attend the programme and utilize
                  this opportunity. For further information you can contact
                  event coordinator {context?.coordinator === "" ? "coordinator" : context?.coordinator } , Associate Professor,
                  Department of {formData?.departmentName}.
                </p>


                <div className="overflow-x-auto mt-[100px]">
                  <table className="table-auto w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">S.No.</th>
                        <th className="px-4 py-2 border">Particulars</th>
                        <th className="px-4 py-2 border">Amount in Rs</th>
                      </tr>
                    </thead>
                    <tbody>
                          {context?.budgetData.map((budget ,i)=>{
                            return <tr key={budget.id} className="bg-gray-100">
                                <td className="px-4 py-2 border bg-white" >{i+1}</td>
                                <td className="px-4 py-2 border bg-white">{budget.reason}</td>
                                <td className="px-4 py-2 border bg-white">{budget.amount}</td>
                            </tr>
                          })}
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
