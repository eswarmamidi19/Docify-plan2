"use client";
import { getFormData } from "@/actions/get-formdata-by-id";
import { useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";

export function TimeTable() {
  const context = useForm();

  const [formData, setFormData] = useState<{
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    departmentName: string;
    authorId: string;
  }>();

  async function getData() {
    const data = await getFormData!(context?.eventId!);

    console.log(data);

    setFormData(
      data as {
        id: string;
        title: string;
        startDate: string;
        endDate: string;
        departmentName: string;
        authorId: string;
      }
    );
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  useEffect(() => {
    getData();
  }, [context?.eventId]);

  let currentDate = `${day}-${month}-${year}`;


 

  return (
    <div className="flex h-full items-center justify-center p-6 ">
      {/* A4 Preview */}

      <div className=" container mx-auto p-4 "  id="timetable">
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
                  {/* Department of {formData?.departmentName} */}
                </h1>
                <div className="w-full text-end p-3">Date : {currentDate}</div>
                <h1 className="text-xl tracking-wide font-bold">
                  {" "}
                  {formData?.title} Development Program
                </h1>

                <h1 className="text-xl tracking-wide font-bold">on</h1>
                <h1 className="text-xl tracking-wide font-bold">
                  {context?.subject}
                </h1>
                <h1 className="text-xl tracking-wide font-bold">from</h1>
                <h1 className="text-xl tracking-wide font-bold">
                  {formData?.startDate.split("-").reverse().join("-")} to {formData?.endDate.split("-").reverse().join("-")}
                </h1>
                {/* content */}

                <h1 className="text-center text-2xl ">
                    Program Schedule
                </h1>
               

                <div className="overflow-x-auto w-full">
                     {/* The Time Table */}
                     <div className="w-full ">
                      
                                     {/* Real Table */}
                                    {
                                        <div className="w-full flex">
                                        <div className="w-[130px] h-[100px]  flex items-center justify-center border border-black ">
                                                        Date
                                        </div>
                                             {
                                                 Array(context?.no_of_sessions).fill(" ").map((ele ,i) => {
                                                   return <div className="w-[300px] h-[100px]  flex items-center justify-center border border-black " key={crypto.randomUUID()}>
                                                       Session {i+1}
                                                   </div>
                                                 })
                                             } 
                                        </div>
                                     }

                              {
                                context?.days.map((day) => {
                                       return <div key={day.num} className="w-full flex">
                                                 
                                                 
  
                                                 <div className="w-full flex" > 
                                                       {/* Cells of Row one */}
                                                       
                                                       <div className="w-[130px] h-[100px]  flex items-center justify-center border border-black ">
                                                          {day.date}
                                                      </div>
                                                       {
                                                        day.sessions.map((session) => {
                                                            return <div className="w-[300px] h-[100px]  flex flex-col items-center justify-evenly border border-black  " key={crypto.randomUUID()}>
                                                                   <div className="flex flex-col items-center justify-center">      
                                                                    <h2 className="font-bold text-xl text-center"> {session.sessionName} </h2>
                                                                    <h2 className="font-bold text-xl text-center"> {session.sessionBy} </h2>
                                                                    <h2 className="font-bold text-xl text-center"> {session.starttime} - {session.endtime} </h2>
                                                                   </div>
                                                            </div>
                                                        })
                                                       }
                                                       
                                                 </div> 

                                       </div> 
                                })
                              }


                              <div className="mt-5">
                                   <h3 className="text-xl font-bold underline">Note : </h3>
                                   <p className="indent-7">  {context?.break_area} </p>
                              </div>    
                              <div className="w-full text-end p-3 mt-72 font-bold"> Signature of co ordinator </div>
                              
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
