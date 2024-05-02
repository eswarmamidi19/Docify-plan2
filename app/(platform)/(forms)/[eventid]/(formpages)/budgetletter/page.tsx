
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";


import { Button } from "@/components/ui/button";
import { Budgetletter } from "../_components/budget-letter";
import {BudgetLetterForm } from "../_components/budget-letter-form";


const customFont = localFont({
  src: "../../../../../../public/fonts/font.woff2",
});

export default function BudgetLetterPage() {
  return (
    <div className="w-100 h-full  flex flex-col gap-y-2">
      {/* Heading */}
      <div className={cn(customFont.className, "text-2xl md:text-4xl")}>
        Budget Letter
      </div>

      {/* Form and Preview */}
      <div className="h-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full w-full rounded-lg border border-black"
        >
          <ResizablePanel defaultSize={35} minSize={35}>
            <div className="flex h-full items-center justify-center p-6">
              <div className=" w-full shadow-md rounded-md p-8">
                 <BudgetLetterForm/>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="border border-gray-300" />
          <ResizablePanel defaultSize={75} minSize={65}>
            <Budgetletter/>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
