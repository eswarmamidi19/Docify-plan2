"use client";

import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FormEvent } from "react";

export function BudgetLetterForm(){

    const handleDownload = (e : FormEvent) => {
        e.preventDefault();
        const element = document.getElementById('budgetletter')!;
    
        html2canvas(element).then(canvas => {
          const imgData = canvas.toDataURL('image/jpeg');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = pdf.internal.pageSize.getWidth();
         //const imgHeight = (canvas.height * imgWidth) / canvas.width;
         const imgHeight = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
          pdf.save('budgetletter.pdf');
        });


      };


     return   <form>

     <Button
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       type="submit"
       onClick={handleDownload}
     >
       generate PDF
       
     </Button>
   </form> 
}