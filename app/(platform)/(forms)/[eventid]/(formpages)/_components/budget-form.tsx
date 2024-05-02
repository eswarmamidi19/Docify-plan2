"use client";

import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useForm } from "../../_context/form-context-hook";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Label } from "@/components/ui/label";

export function BudgetForm() {

  const handleDownload = (e : FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('budget')!;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
     //const imgHeight = (canvas.height * imgWidth) / canvas.width;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('budget.pdf');
    });
  };
  const context = useForm();


  const addInputField = () => {
    

    context?.setBudgetData([
      ...context.budgetData,
      { id: context.budgetData.length + 1, amount: 0, reason: "" },
    ]);
  };

  function handleAmountChange(id: number, amount: number) {
    const newBudgetData = context?.budgetData.map((budget) => {
      if (budget.id === id) {
        return {
          id: id,
          amount: amount,
          reason: budget.reason,
        };
      }
      return budget;
    });
    context?.setBudgetData(newBudgetData!);
  }

  function handelReasonChange(id: number, reason: string) {
    const newBudgetData = context?.budgetData.map((budget) => {
      if (budget.id === id) {
        return {
          id: id,
          amount: budget.amount,
          reason: reason,
        };
      }
      return budget;
    });
    context?.setBudgetData(newBudgetData!);
  }


  const removeInputField = (id: number) => {
   
    const updatedBudetData = context?.budgetData.filter((data) => data.id!==id)
    context?.setBudgetData(updatedBudetData!);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form className="rounded px-8 pt-6 pb-8 mb-4">
         <div className="my-5">
         <Label>Enter Number of Attendees</Label> <Input type="number" onChange={ (e)=>context?.setAttendees(e.target.value) } />
         </div>
        {context?.budgetData.map((budget) => (
          <div key={budget.id} className="mb-4 flex items-center gap-3">
            <Input
              type="text"
              value={budget.reason}
              onChange={(e) => handelReasonChange(budget.id , e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter reason"
            />
            <Input
              type="number"
              value={budget.amount}
              onChange={(e) => handleAmountChange(budget.id, Number(e.target.value))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter cost"
            />
            <button
              type="button"
              onClick={() => removeInputField(budget.id)}
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        ))}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={addInputField}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Input Field
          </button>
        </div>
        
      </form>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleDownload}>Generate PDF</button>
    </div>
  );
}
