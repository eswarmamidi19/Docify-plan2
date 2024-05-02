"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "../../_context/form-context-hook";
import { FormEvent } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function GuestFeedBackForm(){
   const context = useForm();

   const handleDownload = (e : FormEvent) => {
    console.log("hi ra ")
    e.preventDefault();
    const element = document.getElementById('guestfeedback')!;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
     //const imgHeight = (canvas.height * imgWidth) / canvas.width;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('guestfeedback.pdf');
    });
  };
    return <>
        
    <form className="">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Organizing Members Involvement"
          onChange={(e)=>{context?.setGuestFeebBackData({...context.guestFeedBackData , OrganizingMembersInvolvement : e.target.value})}}
          value={context?.guestFeedBackData.OrganizingMembersInvolvement}
        />
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Programme Organisation" 
          onChange={(e)=>{context?.setGuestFeebBackData({...context.guestFeedBackData , ProgrammeOrganisation : e.target.value})}}
          value={context?.guestFeedBackData.ProgrammeOrganisation}
        />
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Participants’Involvement" 
          onChange={(e)=>{context?.setGuestFeebBackData({...context.guestFeedBackData , ParticipantsInvolvement:e.target.value})}}
          value={context?.guestFeedBackData.ParticipantsInvolvement}
        />
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Venue& Arrangements" 
          onChange={(e)=>{context?.setGuestFeebBackData({...context.guestFeedBackData ,VenueArrangements:e.target.value})}}
          value={context?.guestFeedBackData.VenueArrangements}
        />
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Hospitality" 
          onChange={(e)=>{context?.setGuestFeebBackData({...context.guestFeedBackData ,Hospitality:e.target.value})}}
          value={context?.guestFeedBackData.Hospitality}
        />
      </div>
  
      <div className="flex items-center justify-end">
     
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleDownload}>
          generate PDF
        </Button>
     
      
      </div>
    </form>
 </>
}