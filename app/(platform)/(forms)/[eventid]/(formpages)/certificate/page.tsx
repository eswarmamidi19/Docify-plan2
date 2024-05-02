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
  file?: File;
  preview?: string;
}


export default function certificatePage() {
  
  const handleDownload = (e : FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('cert')!;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
     //const imgHeight = (canvas.height * imgWidth) / canvas.width;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, pdf.internal.pageSize.getHeight()*0.15, imgWidth, imgHeight);
      pdf.save('circular.pdf');
    });
  };

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

  const [name, setName] = useState("");
  
  const [coordinator , setCoordinator] = useState<FileState>();
  const [coconvenor , setCoconvenor] = useState<FileState>();
  const [convenor , setConvenor]  = useState<FileState>();
  const [Prinicipal , setPrincipal] = useState<FileState>();

  const handleCoordinatorChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = e.target.files[0];

    if (!(selected instanceof Blob)) {
      console.error('Selected file is not a Blob or File object.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result as string;
      setCoordinator({ name: selected.name, type: selected.type, size: selected.size, file: selected, preview });
    };
    reader.readAsDataURL(selected);
  };

  const handleCoconvenorChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = e.target.files[0];

    if (!(selected instanceof Blob)) {
      console.error('Selected file is not a Blob or File object.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result as string;
      setCoconvenor({ name: selected.name, type: selected.type, size: selected.size, file: selected, preview });
    };
    reader.readAsDataURL(selected);
  };
  const handleConvenorChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = e.target.files[0];

    if (!(selected instanceof Blob)) {
      console.error('Selected file is not a Blob or File object.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result as string;
      setConvenor({ name: selected.name, type: selected.type, size: selected.size, file: selected, preview });
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
    <div className="w-100 h-screen  flex flex-col gap-y-2">
      {/* Heading */}
      <div className={cn(customFont.className, "text-2xl md:text-4xl")}>
        Certificate Page
      </div>

      <div className="h-full">
        <div className="grid grid-cols-2 gap-4 place-items-center">
          <div className="w-1/2">
            <Label>Name</Label>
            <Input
              placeholder="enter the name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <Label>Co-Ordinator Signature Upload</Label>
            <Input
              type="file"
              onChange={ handleCoordinatorChange }
            />
          </div>
          <div className="w-1/2">
            <Label>course</Label>
            <Input placeholder="enter the course" />
          </div>
          <div className="w-1/2">
            <Label>Co-Convenor Signature Upload</Label>
            <Input type="file" onChange={handleCoconvenorChange}/>
          </div>

          <div className="w-1/2">
            <Label>Start Date</Label>
            <Input type="date" />
          </div>

          <div className="w-1/2">
            <Label>Convenor Signature Upload</Label>
            <Input type="file" onChange={handleConvenorChange} />
          </div>

          <div className="w-1/2">
            <Label>EndDate</Label>
            <Input type="date" />
          </div>

          <div className="w-1/2">
            <Label>Pricipal Signature Upload</Label>
            <Input type="file" onChange={handlePrincipalChange}/>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Gen Cert</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle asChild><Button className="w-fit h-fit" onClick={handleDownload}> Generate Certificate </Button></DialogTitle>
              <DialogDescription className="w-fit h-fit">
                <div className="h-full w-full border-[20px] border-yellow-500 flex flex-col py-2 items-center" id="cert">
                  <div className="flex flex-col items-center gap-3">
                    <div>
                      <img
                        src="\aditya-logo.jpg"
                        alt="aditya-logo"
                        height={150}
                        width={150}
                      />
                    </div>
                    <div>
                      <h1
                        className= {cn("text-center text-2xl font-bold text-red-600 tracking-wider" , customFont.className)}
                  
                      >
                        ADITYA ENGINEERING COLLEGE
                      </h1>
                      <p
                        className="font-bold text-sm text-blue-900  font-sans"
                        style={{ fontFamily: "Arial" }}
                      >
                        Approved By AICTE. Affiliated to JNTUK. Accredited by
                        NAAC with 'A++ Grade'
                      </p>
                      <p
                        className="text-center text-sm font-bold  font-sans"
                        style={{ fontFamily: "Arial" }}
                      >
                        Aditya Nagar, ADB Road, Surampalem - 533437, E.G.
                        District, A.P
                      </p>
                      <h1
                        className="text-center text-md text-xl font-bold text-violet-500 font-sans"
                        style={{ fontFamily: "Consolas" }}
                      >
                        Department of Computer Science & Engineering
                      </h1>
                      
                    </div>

                    <div>
                    <h1
                        className = {cn("text-center text-2xl font-bold text-blue-800 tracking-widest " , customFont.className)}
                        
                      >
                        Certificate of Participation
                      </h1>      
                    </div>

                  </div>
                  <div className="w-[80%] h-[80%] py-2 px-5 flex justify-center items-center">
                    <div>
                    <p className='leading-relaxed text-xl'>This is to certify&nbsp; <span className=' border-dotted border-b-2 font-bold'>{ name }</span> &nbsp; from &nbsp;  
                &nbsp; has participated in a <span className='font-bold mx-2'>{ "  " + formData?.title + "  "}  { " " } </span>Development programme on <span className='border-dotted border-b-2 font-bold'>{context?.subject}</span> 
                &nbsp;   organized by deparment of <span className='font-bold'>Computer Science and Engineering</span>, <b>Aditya Engineering College(A)</b> &nbsp; in association with <span className='font-bold'>Supraja Technologies</span>
                <span> conducted from {formData?.startDate}-{formData?.endDate}</span>
                </p>
                    </div>
                  </div>

                  <div className="w-[95%] py-10 flex justify-center items-center gap-9">
                    <div className="">
                      <img
                        className=""
                        src={coordinator?.preview}
                        alt=""
                        height={150}
                        width={150}
                      />

                      <span className="m-2 border-b-2" />

                      <span className="">Co-ordinator</span>
                    </div>

                    <div className="">
                      <img
                        className=""
                        src={coordinator?.preview}
                        alt=""
                        height={150}
                        width={150}
                      />

                      <span className="m-2 border-b-2" />

                      <span className="">Co-Convenor</span>
                    </div>

                    <div className="">
                      <img
                        className=""
                        src={coconvenor?.preview}
                        alt=""
                        height={150}
                        width={150}
                      />

                      <span className="m-2 border-b-2" />

                      <span className="">Convenor</span>
                    </div>

                    <div className="">
                      <img
                        className=""
                        src={Prinicipal?.preview}
                        alt=""
                        height={150}
                        width={150}
                      />

                      <span className="m-2 border-b-2" />

                      <span className="">Prinicipal</span>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
