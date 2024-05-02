"use client";

import { Input } from "@/components/ui/input";
import { FormEvent, useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { getFormData } from "@/actions/get-formdata-by-id";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
type Session = {
     sessionNumber : number;
     starttime : string;
     endtime : string;
     sessionName : string;
     sessionBy : string;
}

type Day = {
     date : string;
     num : number;
     sessions : Session[]
}

export function TimeTableForm() {
  
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

  const handleDownload = (e : FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('timetable')!;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
     //const imgHeight = (canvas.height * imgWidth) / canvas.width;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('budget.pdf');
    });
  };
  
  console.log(context?.days)
  
  
  return (
    <div className="w-full max-w-md mx-auto ">

        <Label> Enter the number of sessions </Label><Input type="number" placeholder="enter the number of sessions" onChange={(e)=>context?.set_no_of_sessions(Number(e.target.value))} value={context?.no_of_sessions}/>     
          {
            context?.days.map((day)=>{
               return<>          
                  <div className="flex flex-col gap-3 p-3" key={day.num}>
                       <div className=" flex items-center h-fit">
                          <Label> Enter Date </Label> <Input type="date"  onChange={(e)=>{context.handleDateChange(day.num,e.target.value)}}/>                     
                       </div>
                       {
                        day.sessions.map((session ,i)=>
                        <div key={session.sessionkey}>
                           <div className="flex flex-col gap-2">                     
                              
                              <div className="flex h-fit items-center">
                                <Label> enter start time  </Label> <Input type="text" onChange={(e)=>context.handleStartTimeChange(day.num , session.sessionkey , e.target.value)} />
                              </div>
                              <div className="flex h-fit items-center">
                                <Label> enter end time  </Label> <Input type="text" onChange={(e)=> {context.handleEndTimeChange(day.num , session.sessionkey,e.target.value )}}/>
                              </div>
                              <div className="flex h-fit items-center">
                                  <Label> enter session Name </Label> <Input type="text"  onChange={(e)=> {context.handleSessionNameChange(day.num , session.sessionkey , e.target.value)}} />
                              </div>
                              <div className="flex h-fit items-center">
                                  <Label> enter session By </Label> <Input type="text" onChange={((e)=> {context.HandleSessionBy(day.num , session.sessionkey , e.target.value)})}/>
                              </div>

                            --- Session {i+1} on {day.date}  ---
                           </div>
                        
                        </div>)
                       }
                      


                      <Button onClick={()=>context?.addSession({
                         sessionkey : crypto.randomUUID(), 
                         sessionNumber : 0,
                         starttime : "",
                         endtime : "",
                         sessionName : "",
                         sessionBy : "",
                      } , day.num )}>Add Session</Button>    
                  </div>
               </>
            })
          }
          
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-5" onClick={context?.addDay}>Add Day</button>

          <Textarea placeholder="Enter your Breaks." onChange={(e)=> context?.set_break_area(e.target.value)}/>
          
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5" onClick={handleDownload}>Generate PDF</button>

    </div>
  );
}
