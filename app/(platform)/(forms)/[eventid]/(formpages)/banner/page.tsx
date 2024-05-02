"use client"

import { Button } from "@/components/ui/button";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
   } from "@/components/ui/dialog";
import { useForm } from "../../_context/form-context-hook";
import { FormEvent, useEffect, useState } from "react";
import { getFormData } from "@/actions/get-formdata-by-id";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function Banner(){

     
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

  useEffect(() => {
     getData();
   }, [context?.eventId]);

   const handleDownload = (e : FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('banner')!;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
     //const imgHeight = (canvas.height * imgWidth) / canvas.width;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, pdf.internal.pageSize.getHeight()*0.15, imgWidth, imgHeight);
      pdf.save('banner.pdf');
    });

  };


     return <>
        
        <div className="w-full h-screen">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-3">Generate Poster</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Poster</DialogTitle>
              <Button onClick={handleDownload} className="w-fit h-fit p-3">Download Banner</Button>
              <DialogDescription>
              <div className='h-[98%] w-[95%] border-t-[18px] border-orange-500 flex flex-col py-2 justify-between items-center' id="banner">
        <div className='h-[18%] w-full flex flex-col justify-between items-center'>
            <img src="\aditya-logo.jpg" alt="aditya-logo" height={120} width={120}/>
        </div>
        <div className='h-[50%] w-full flex justify-center items-center gap-11 py-6 m-5 text-blue-600 text-2xl font-bold'>
           <h1>  {formData?.title}</h1>
        </div>
        <div className='h-[50%] w-full flex justify-center items-center gap-11 py-6 mb-2 text-6xl text-orange-500'>
           <h1> {context?.subject}</h1>
        </div>
        <div className='h-[14%] flex justify-center items-center'>
        <h1 className='text-2xl text-black font-sans font-bold '>Department of {formData?.departmentName}</h1>
        </div>
        <div className='h-[20%] w-full flex justify-center  bg-orange-500 mt-11 p-5'>
            <h1 className='text-4xl text-white font-sans font-bold '>ADITYA ENGINEERING COLLEGE(A)</h1>
        </div>
    </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>       
       </div>
     
     </>
}