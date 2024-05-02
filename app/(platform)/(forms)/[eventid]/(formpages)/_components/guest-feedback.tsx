"use client"

import { getFormData } from "@/actions/get-formdata-by-id";
import { useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";

export default function GuestFeedBack(){
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
     return <div className="flex h-full items-center justify-center p-6 " id="guestfeedback">
     {/* A4 Preview */}

     <div className=" container mx-auto p-4 ">
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
               <h1 className="text-xl tracking-wide font-bold underline underline-offset-8">
                  Guest Feedback Report
               </h1>
               {/* content */}

               <p className="text-center">
                 Name of the Event: “ {formData?.title} on “{" "}
                 {context?.subject} “
               </p>
              
               <div className="overflow-x-auto">
                 <table className="table-auto w-full border-collapse">
                   <thead>
                     <tr className="bg-gray-100">
                       <th className="px-4 py-2 border">S.No.</th>
                       <th className="px-4 py-2 border">Description</th>
                       <th className="px-4 py-2 border">Feedback (Out of 5)	</th>
                       <th className="px-4 py-2 border">Remarks</th>
                       
                     </tr>
                   </thead>
                   <tbody>
                   <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">Organizing Members Involvement</td>
          <td className="border px-4 py-2">{context?.guestFeedBackData.OrganizingMembersInvolvement}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">Programme Organisation</td>
          <td className="border px-4 py-2">{context?.guestFeedBackData.ProgrammeOrganisation}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Participants’Involvement</td>
          <td className="border px-4 py-2">{context?.guestFeedBackData.ParticipantsInvolvement}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">Venue& Arrangements</td>
          <td className="border px-4 py-2">{context?.guestFeedBackData.VenueArrangements}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">Hospitality</td>
          <td className="border px-4 py-2">{context?.guestFeedBackData.Hospitality}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
                   </tbody>
                 </table>
               </div>
               <div className="w-full text-end p-3 mt-72 font-bold"> Signature of co ordinator </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
}