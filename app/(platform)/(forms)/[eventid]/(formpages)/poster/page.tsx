"use client";
import { getFormData } from "@/actions/get-formdata-by-id";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const customFont = localFont({
  src: "../../../../../../public/fonts/font.woff2",
});


interface FileState {
  name: string;
  type: string;
  size: number;
  file: File;
  preview: string;
}


export default function certificatePage() {
  
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
  const handleDownload = (e : FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('poster')!;

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

  useEffect(() => {
    getData();
  }, [context?.eventId]);

  const [rp1N, setRp1N] = useState("");
  const [rp2N, setRp2N] = useState("");
  const [rp3N, setRp3N] = useState("");


  const [rp1 , setRp1] = useState<FileState>();
  const [rp2 , setRp2] = useState<FileState>();
  const [rp3 , setRp3] = useState<FileState>();

  
  const [rp1D, setRp1D] = useState("");
  const [rp2D, setRp2D] = useState("");
  const [rp3D, setRp3D] = useState("");


  const [coconvenor , setCoconvenor] = useState<FileState>();
  const [convenor , setConvenor]  = useState<FileState>();
  const [Prinicipal , setPrincipal] = useState<FileState>();

  const handleResourcePersonChange1= (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = e.target.files[0];

    if (!(selected instanceof Blob)) {
      console.error('Selected file is not a Blob or File object.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result as string;
      setRp1({ name: selected.name, type: selected.type, size: selected.size, file: selected, preview });
    };
    reader.readAsDataURL(selected);
  };

  const  handleResourcePersonChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = e.target.files[0];

    if (!(selected instanceof Blob)) {
      console.error('Selected file is not a Blob or File object.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result as string;
      setRp2({ name: selected.name, type: selected.type, size: selected.size, file: selected, preview });
    };
    reader.readAsDataURL(selected);
  };
  const  handleResourcePersonChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = e.target.files[0];

    if (!(selected instanceof Blob)) {
      console.error('Selected file is not a Blob or File object.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result as string;
      setRp3({ name: selected.name, type: selected.type, size: selected.size, file: selected, preview });
    };
    reader.readAsDataURL(selected);
  };


  const handlePrincipalChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = e.target.files[0];

    if (!(selected instanceof Blob)) {
      console.error('Selected file is not a Blob or File object.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result as string;
      setPrincipal({ name: selected.name, type: selected.type, size: selected.size, file: selected, preview });
    };
    reader.readAsDataURL(selected);
  };
  return (
     <div className="h-screen bg-slate-100">

       {/* Form */}
       <h1 className="text-center font-bold "> Fill In the Details </h1>

       <div className="h-[90%]  md:flex-row gap-4 py-10">
            <div className='flex flex-col '>
                {/* First Row */}
                <div className="md:w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-name" className="block mb-2">Resource Person Name</label>
                    <Input type="text" id="resource-person-name" name="resourcePersonName1" onChange={(e)=>{setRp1N(e.target.value)}}className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-photo" className="block mb-2">Resource Person Photo</label>
                    <Input type="file" id="resource-person-photo" name="resourcePersonPhoto1" onChange={handleResourcePersonChange1} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-designation" className="block mb-2">Resource Person Designation</label>
                    <Input type="text" id="resource-person-designation" name="resourcePersonDesignation1" onChange={(e)=>{setRp1D(e.target.value)}} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                </div>
            
                {/* Second Row */}
                <div className="md:w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-name" className="block mb-2">Resource Person Name</label>
                    <Input type="text" id="resource-person-name" name="resourcePersonName2" onChange={(e)=>{setRp2N(e.target.value)}} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-photo" className="block mb-2">Resource Person Photo</label>
                    <Input type="file" id="resource-person-photo" name="resourcePersonPhoto2" onChange={handleResourcePersonChange2}
                 className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-designation" className="block mb-2">Resource Person Designation</label>
                    <Input type="text" id="resource-person-designation" name="resourcePersonDesignation2" onChange={(e)=>{setRp2D(e.target.value)}} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                </div>
            
                {/* Third Row */}
                <div className="md:w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-name" className="block mb-2">Resource Person Name</label>
                    <Input type="text" id="resource-person-name" name="resourcePersonName3" onChange={(e)=>{setRp3N(e.target.value)}} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-photo" className="block mb-2">Resource Person Photo</label>
                    <Input type="file" id="resource-person-photo" name="resourcePersonPhoto3" onChange={handleResourcePersonChange3}  className="border border-gray-400 rounded-md p-2 w-full" / >
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-designation" className="block mb-2">Resource Person Designation</label>
                    <Input type="text" id="resource-person-designation" name="resourcePersonDesignation3" onChange={(e)=>{setRp3D(e.target.value)}} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                </div>
            </div>
            
            <div className="w-full flex justify-center">
            <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-3">Generate Poster</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Poster</DialogTitle>
              <Button onClick={handleDownload} className="w-fit h-fit p-3">Download Poster</Button>
              <DialogDescription>
              <div className='h-full w-full border-t-[18px] border-orange-500 flex flex-col py-2 justify-between items-center' id="poster">
        <div className='h-[18%] w-full flex  justify-between'>
            <div className="w-[120px] h-[120px]" />
            <div className='h-[70%] w-[30%] bg-orange-500 flex justify-center  rounded-tl-xl rounded-br-xl'>
                <h1 className='font-bold text-2xl text-white font-sans' style={{ fontFamily: 'Arial' }}>Hearty Welcome</h1>
            </div>
            <img src="\aditya-logo.jpg" alt="aditya-logo" height={120} width={120}/>
        </div>
        <div className='h-[50%] w-full flex justify-center items-center gap-96 py-6'>
          <div className="flex justify-center items-center gap-8">
            <div className='flex flex-col items-center'>
                <img className='rounded-tl-xl rounded-br-xl w-[150px] h-[150px]' src={rp1?.preview || ""}  alt=''  />
                <span className='text-bold text-2xl font-sans text-red-600'>{rp1N}</span>
                <span className='text-bold text-lg font-sans'>{rp1D}</span>
            </div>            
            <div className='flex flex-col items-center'>
                <img className='rounded-tl-xl rounded-br-xl  w-[150px] h-[150px]' src={rp2?.preview || ""} alt=''  />
                <span className='text-bold text-2xl font-sans'>{rp2N}</span>
                <span className='text-bold text-lg font-sans'>{rp2D}</span>
            </div>     
            <div className='flex flex-col items-center '>
                <img className='rounded-tl-xl rounded-br-xl  w-[150px] h-[150px]' src={rp3?.preview|| ""} alt='' />
                <span className='text-bold text-2xl font-sans'>{rp3N}</span>
                <span className='text-bold text-lg font-sans'>{rp3D}</span>
            </div>        
          </div>
          <div>
              <h1 className="text-bold text-3xl text-black font-serif  ">
                {formData?.title}
              </h1>
              <h1 className="text-5xl text-orange-500 font-bold">
                   "{context?.subject} "
              </h1>
          </div>
          
           
        </div>
       
        <div className='h-[14%] flex justify-center items-center'>
        <h1 className='text-3xl text-black font-sans font-bold py-7 '>Department of CSE</h1>
        </div>
        <div className='h-[18%] w-full flex justify-center  bg-orange-500'>
            <h1 className='text-4xl text-white font-sans font-bold  '>ADITYA ENGINEERING COLLEGE(A)</h1>
        </div>     
    </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
            </div>
        </div>
          
        
     </div>

    
  );
}
