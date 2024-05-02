'use client'
import React, { useState, useReducer, FormEvent } from 'react';

const initialState = {
  departmentAbout: '',
  departmentVision: '',
  departmentMission: '',
  companyAbout: '',
  eventAbout: '',
  eventTopics: '',
  resourcePersons: '',
  eventOutcomes: '',
  eligibility: '',
  registrationLink: '',
  correspondenceAddress: '',
};

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const reducer = (state :any, action:any) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

const Brocher = () => {
   
    const [formState, dispatch] = useReducer(reducer, initialState);

    const handleDownload = (e : FormEvent) => {
      e.preventDefault();
      const element = document.getElementById('brocher')!;
  
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF('l', 'mm', 'a4');
        const imgWidth = pdf.internal.pageSize.getWidth();
       //const imgHeight = (canvas.height * imgWidth) / canvas.width;
       const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'JPEG', 0, pdf.internal.pageSize.getHeight()*0.15, imgWidth, imgHeight);
        pdf.save('poster.pdf');
      });
  
    };
    const handleInputChange = (e:any) => {
      const { name, value } = e.target;
      dispatch({ type: 'TEXT_CHANGE', field: name, payload: value });
    };
  

    
  
    return (
      <div className="container mx-auto">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="mb-8">
              <h2 className="mb-4">About the Department</h2>
              <textarea
                className="w-full p-2 border rounded"
                name="departmentAbout"
                placeholder="About the Department"
                value={formState.departmentAbout}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full p-2 border rounded mt-4"
                name="departmentVision"
                placeholder="Vision of Department"
                value={formState.departmentVision}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full p-2 border rounded mt-4"
                name="departmentMission"
                placeholder="Mission of Department"
                value={formState.departmentMission}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Column 2 */}
            <div className="mb-8">
              <h2 className="mb-4">About the Company</h2>
              <textarea
                className="w-full p-2 border rounded"
                name="companyAbout"
                placeholder="About the Company"
                value={formState.companyAbout}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Column 3 */}
            <div className="mb-8">
              <h2 className="mb-4">About the Event</h2>
              <textarea
                className="w-full p-2 border rounded"
                name="eventAbout"
                placeholder="About the Event"
                value={formState.eventAbout}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full p-2 border rounded mt-4"
                name="eventTopics"
                placeholder="Topics Covered in Event"
                value={formState.eventTopics}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full p-2 border rounded mt-4"
                name="resourcePersons"
                placeholder="Resource Persons"
                value={formState.resourcePersons}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full p-2 border rounded mt-4"
                name="eventOutcomes"
                placeholder="Outcomes of Event"
                value={formState.eventOutcomes}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full p-2 border rounded mt-4"
                name="eligibility"
                placeholder="Eligibility"
                value={formState.eligibility}
                onChange={handleInputChange}
              />
              <input
                className="w-full p-2 border rounded mt-4"
                type="text"
                name="registrationLink"
                placeholder="Registration Link"
                value={formState.registrationLink}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full p-2 border rounded mt-4"
                name="correspondenceAddress"
                placeholder="Correspondence Address"
                value={formState.correspondenceAddress}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
        </form>
         <Dialog>
         <DialogTrigger asChild>
            <Button className="mt-3">Generate Poster</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Poster</DialogTitle>
              <Button onClick={handleDownload} className="w-fit h-fit p-3">Download Poster</Button>
              <DialogDescription>
              <div className='text-xs h-[100%] w-[98%] flex flex-col py-2 justify-center items-center' style={{ background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(169,91,106,1) 100%)' }} id='brocher'>
      <div className="p-2 flex justify-center gap-4 w-full h-full mb-4 text-sm">
        {/* Column 1 */}
        <div className=" rounded-tl-[20px] rounded-br-[20px] border border-blue-500 bg-white min-w-[30%] max-w-fit " >
          <div className='px-2'>
            <h2 className="font-bold text-red-800">About the Department</h2>
            <p>{formState.departmentAbout}</p>
            <h2 className="font-bold text-red-800">Vision</h2>
            <p>{formState.departmentVision}</p>
            <h2 className="font-bold text-red-800">Mission</h2>
            <p className=''>{formState.departmentMission}</p>
            <h2 className="font-bold text-red-800">About the Company</h2>
            <p>{formState.companyAbout}</p>
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="w-[30%] rounded-tr-[20px] rounded-bl-[20px] border border-blue-500 bg-white  min-w-[30%] max-w-fit" >
            <div className='px-2'>
            <h2 className="font-bold text-red-800">About Event</h2>
            <p>{formState.eventAbout}</p>
            <h2 className="font-bold text-red-800">Topics Covered</h2>
            <p>{formState.eventTopics}</p>
            <h2 className="font-bold text-red-800">Resource Person</h2>
            <p>{formState.resourcePersons}</p>
            </div>
        </div>

        {/* Column 3 */}
        <div className="w-[30%] rounded-tl-[20px] rounded-br-[20px] border border-blue-500 bg-white  min-w-[30%] max-w-fit" >
          <div className='px-2'>
          <h2 className="font-bold text-red-800">Event Outcomes</h2>
          <p>{formState.eventOutcomes}</p>
          <h2 className="font-bold text-red-800">Event Eligibility</h2>
          <p>{formState.eligibility}</p>
          <h2 className='font-bold text-red-800'>Registration Link</h2>
          <p>{formState.registrationLink}</p>
          <h2 className='font-bold text-red-800'>Adressess of Correspondence</h2>
          <p>{formState.correspondenceAddress}</p>
          </div>
        </div>
      </div>
    </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
         </Dialog>
      </div>
    );
};

export default Brocher