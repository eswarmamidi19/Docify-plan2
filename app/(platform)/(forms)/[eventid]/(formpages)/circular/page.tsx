   
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";



import { Circular } from "../_components/circular";


import { CircularForm } from "../_components/circular-form";



const customFont = localFont({
  src: "../../../../../../public/fonts/font.woff2",
});

export default function budgetPage() {
   
 
  
 

  return (
    <div className="w-100 h-full  flex flex-col gap-y-2">
      {/* Heading */}
      <div className={cn(customFont.className, "text-2xl md:text-4xl")}>
        Circular Page
      </div>

      {/* Form and Preview */}
      <div className="h-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full w-full rounded-lg border border-black"
        >
          <ResizablePanel defaultSize={25} minSize={25}>
            <div className="flex h-full items-center justify-center p-6">
            <div className=" w-full shadow-md rounded-md p-8">
               <CircularForm/>
          </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="border border-gray-300" />
          <ResizablePanel defaultSize={75} minSize={65} className="">
              <Circular />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
