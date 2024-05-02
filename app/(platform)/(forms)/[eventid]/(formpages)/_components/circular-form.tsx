"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "../../_context/form-context-hook";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Circular } from "./circular";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FormEvent } from "react";
export function CircularForm(){
    
   const context = useForm();
   const handleDownload = (e : FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('circular')!;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
     //const imgHeight = (canvas.height * imgWidth) / canvas.width;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('circular.pdf');
    });
  };
   
     return <>
        
        <form className="">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventCoordinator">
              Coordinator Name
            </label>
            <Input
              type="text"
              placeholder="Enter event coordinator name"
              onChange={(e)=>{context?.setCoordinator(e.target.value)}}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject Name
            </label>
            <Input
              type="text"
              placeholder="Enter subject name"
              onChange={(e)=>{context?.setSubject(e.target.value)}}
            />
          </div>
      
          <div className="flex items-center justify-end">
         
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleDownload}>
              Submit
            </Button>
         
          
          </div>
        </form>
     </>
}