"use client";

import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FormEvent } from "react";

export default function FormIndexGen(){
    const handleDownload = (e : FormEvent) => {
        e.preventDefault();
        const element = document.getElementById('index')!;
    
        html2canvas(element).then(canvas => {
          const imgData = canvas.toDataURL('image/jpeg');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = pdf.internal.pageSize.getWidth();
         //const imgHeight = (canvas.height * imgWidth) / canvas.width;
         const imgHeight = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
          pdf.save('index.pdf');
        });
      };
      return <>
      <Button variant="primary" onClick={handleDownload}>  Generate PDF</Button> 
    </>
}