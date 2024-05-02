import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";



type EventFormNavProps = {
     eventId : string;
}

export function EventFormNav({eventId} : EventFormNavProps){
       
      const links = [
            { 
               link : "/"+eventId+"/circular",
               name : "Circular"
            },
            { 
                  link : "/"+eventId+"/budget",
                  name : "Budget"
            },
            { 
                  link : "/"+eventId+"/guestfeedback",
                  name : "Guest Feedback"
            },
            {
                   link : "/" + eventId +"/budgetletter",
                   name : "Budgetletter"
            },
            {
                  link : "/" +eventId+ "/certificate",
                  name : "Certificate"
            },
            {
                  link : "/" + eventId + "/poster",
                  name : "Poster"
            },
            {
               link : "/" + eventId+ "/formindex",
               name : "Fdpindex"
            },
            {
                  link : "/" +eventId + "/timetable",
                  name : "Timetable"
            },
            {
                  link : "/"+eventId+"/banner",
                  name : "Banner"
            },
            {
                   link : "/"+eventId + "/brocher",
                   name : "Brocher"
            },
            {
                  link : "/"+eventId+"/photodiscription",
                  name: "Photo Discription"
            }
      ];
      

       return <div className="fixed top-0 w-full z-50 h-14 bg-white shadow-sm border-b px-4 flex mb-8">
            
            {/* Form pages in nav */}
            <div className="flex gap-x-3 items-center h-full">
                  {
                        links.map((ele)=>{
                               return <Button variant={"link"} size={"sm"} key={ele.link} className="shadow-sm" asChild> 
                                    <Link  href={ele.link}>{ele.name}</Link>
                                </Button>
                        })
                  }
            </div>
            
            {/*  */}
            <div className="ml-auto h-full flex items-center">
                 <UserButton afterSignOutUrl="/"/>
            </div>

       </div>
}