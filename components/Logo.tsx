import { PiMicrosoftWordLogoBold } from "react-icons/pi";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";



const LogoFont = localFont({
    src: "../public/fonts/font.woff2",
  });

export function Logo(){
     return <div className={cn("flex p-2  gap-x-3 h-full justify-center" , LogoFont.className)}>
            <PiMicrosoftWordLogoBold className="w-5 h-5 text-blue-500"/> 
            <h1>Docify</h1>
     </div>
}