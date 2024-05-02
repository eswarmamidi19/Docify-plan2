import { Button } from '@/components/ui/button'
import React from 'react'

export function Footer() {
  return (
    <div className=" fixed bottom-0 w-full  p-4 shadow-sm bg-slate-100" >
        <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
               
               <div className="space-x-4 md:block md:w-fit flex items-center justify-between w-full">
                         <Button variant="ghost" size={"sm"}>
                             Privacy and Policy
                         </Button>
                         <Button variant="ghost" size={"sm"} >
                             Terms of Service
                         </Button>
               </div>
        </div>
    </div>
  )
}
