
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <div className=" fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center" >
        <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
               <div className="space-x-4 md:block md:w-fit flex items-center justify-between w-full" >
                         <Button variant={"outline"} asChild size={"sm"}>
                           <Link href={"/sign-in"}>Login</Link>
                         </Button>
                         <Button size={"sm"} asChild>
                            <Link href={"/sign-up"}> Get Docify for Free </Link> 
                         </Button>
               </div>
        </div>
    </div>
  )
}
