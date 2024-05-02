"use client";
import { useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";
import { getFormData } from "@/actions/get-formdata-by-id";
export default function FormIndex() {
  const context = useForm();

  const [formData, setFormData] = useState<{
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    departmentName: string;
    authorId: string;
  }>();

  async function getData() {    const data = await getFormData!(context?.eventId!);

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

  return (
    <div className="flex h-full items-center justify-center p-6 " id="index">
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
                  {formData?.title} Development Program
                </h1>

                <h1 className="text-xl tracking-wide font-bold">on</h1>
                <h1 className="text-xl tracking-wide font-bold">
                  {context?.subject}
                </h1>
                <h1 className="text-xl tracking-wide font-bold">from</h1>
                <h1 className="text-xl tracking-wide font-bold">
                  {formData?.startDate} to {formData?.endDate}
                </h1>
                <div className="w-full text-end p-3">Date : {currentDate}</div>

                <div>
                  <div className="border-2 p-2 border-black w-[700px]">
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        S.no
                      </div>
                      < div className="w-4/5 border flex justify-center items-center p-2">
                        Name of Document
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        1
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                        Proposal by the Coordinator/Convenor to Principal along
                        with budget, and permission for the venue
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        2
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Invitation to the resource person
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        3
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Acceptance along with the bio-data
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        4
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Poster/brochure/Banner (Not photo)
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        5
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Programme schedule
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        6
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Circular
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        7
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Registration/Attendance of the participants
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        8
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Certificates (sample)
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        9
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      All participants filled Feedback, analysis – action
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        10
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Resource person filled Feedback – plan of action
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        11
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      One page photos with atleast 6 with description as per the format
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        12
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Budget utilisation sheet
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        13
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Press note/Newspaper publication
                      </div>
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/5 border flex justify-center items-center p-2">
                        14
                      </div>
                      <div className="w-4/5 border flex justify-center items-center p-2">
                      Single page report as per the format
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
