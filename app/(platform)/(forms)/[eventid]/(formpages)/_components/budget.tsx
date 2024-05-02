"use client";
import { getFormData } from "@/actions/get-formdata-by-id";
import { useEffect, useState } from "react";
import { useForm } from "../../_context/form-context-hook";

export function Budget() {
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

  let currentDate = `${day}-${month}-${year}`;
  function getTotal(){
        let sum =0;
        for(let b of context?.budgetData!){
              sum+=b.amount;
        }
        return sum
  }
  
  return (
    <div className="flex h-full items-center justify-center p-6 " id="budget">
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
                  {/* Department of {formData?.departmentName} */}
                </h1>
                <div className="w-full text-end p-3">Date : {currentDate}</div>
                <h1 className="text-xl tracking-wide font-bold underline underline-offset-8">
                    Budget Utilization Report
                </h1>
                {/* content */}

                <p className="text-center">
                  Name of the Programme: “ {formData?.title} on “{" "}
                  {context?.subject} “
                </p>
                <p className="text-center">
                  Dates of Programme : “ {formData?.startDate} to{" "}
                  {formData?.endDate} on “ number of registed people : {context?.attendees}  “
                </p>

                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">S.No.</th>
                        <th className="px-4 py-2 border">Particulars</th>
                        <th className="px-4 py-2 border">Amount in Rs</th>
                      </tr>
                    </thead>
                    <tbody>
                          {context?.budgetData.map((budget ,i)=>{
                            return <tr key={budget.id} className="bg-gray-100">
                                <td className="px-4 py-2 border bg-white" >{i+1}</td>
                                <td className="px-4 py-2 border bg-white">{budget.reason}</td>
                                <td className="px-4 py-2 border bg-white">{budget.amount}</td>
                            </tr>
                          })}
                          <tr>
                          <td className="px-4 py-2 border bg-white" ></td>
                                <td className="px-4 py-2 border bg-white">Total</td>
                                <td className="px-4 py-2 border bg-white">{getTotal()}</td>
                          </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full text-end p-3 mt-72 font-bold"> Signature of co ordinator </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
