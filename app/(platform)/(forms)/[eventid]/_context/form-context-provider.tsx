"use client";

type formContextProviderType = {
  children: React.ReactNode;
};

type FormDataType = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  departmentName: string;
  authorId: string;
};

type Budget = {
  id:number
  reason: string;
  amount: number;
};

type Session = {
  sessionkey : string
  sessionNumber : number;
  starttime : string;
  endtime : string;
  sessionName : string;
  sessionBy : string;
}

type Day = {
  date : string;
  num : number;
  sessions : Session[]
}

type GuestFeedBackData = {
  OrganizingMembersInvolvement : string;		
  ProgrammeOrganisation	: string;
  ParticipantsInvolvement	:string	
  VenueArrangements:string;		
  Hospitality:string
}

import { FormEvent, useState } from "react";
import { FormContext } from "./form-context";



export function FormContextProvider({ children }: formContextProviderType) {


  const [eventId, setEventId] = useState<string>("");
  const [coordinator, setCoordinator] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [formData, setFormData] = useState<FormDataType>({
    id: "",
    title: "",
    startDate: "",
    endDate: "",
    departmentName: "",
    authorId: "",
  });

  const [days, setDays] = useState<Day[]>([]);

  const addDay = (e : FormEvent) : void=> {
    e.preventDefault();

     setDays([
      ...days,
      { num: days?.length!+1 , date : "" , sessions: [{ sessionkey : crypto.randomUUID() ,sessionNumber : 0 , starttime : "" , endtime : "" , sessionName : "" , sessionBy: ""}]},
    ]);
  };

  function handleDateChange(day_number : number , date:string) : void{
    let newDays = [...days];
    
    newDays.forEach((day)=>{
        if(day.num === day_number ){
          day.date = date;
          return;
        }
    })
   
    setDays(newDays)   
}


function addSession(session : Session , datenum: number) : void{

  const newDays =[...days];
  for(let day of newDays){
         if(day.num === datenum){
              day.sessions = [...day.sessions , session]
         }
  }
  setDays(newDays);
}
 

function handleSessionNumberChange(datenum : number , sessionkey : string , sessionnumber :number): void{
     let newDays  = [...days] ;
     
     let thatDay = {} as Day;

     for(let day of newDays){
           if(day.num === datenum){
               thatDay = day 
           }
     }

     for(let ses of thatDay.sessions){
         if(ses.sessionkey===sessionkey){
            ses.sessionNumber = sessionnumber
         }
     }

     setDays(newDays)

     return;

}

function handleStartTimeChange(datenum:number,sessionkey:string,sessionStartTime :string): void {


  let newDays  = [...days] ;
  
  let thatDay = {} as Day;

  for(let day of newDays){
        if(day.num === datenum){
            thatDay = day 
        }
  }

  for(let ses of thatDay.sessions){
      if(ses.sessionkey===sessionkey){
         ses.starttime = sessionStartTime
      }
  }

  setDays(newDays)

  return;

}

function handleEndTimeChange(datenum:number,sessionkey:string,sessionEndTime :string): void {


  let newDays  = [...days] ;
  
  let thatDay = {} as Day;

  for(let day of newDays){
        if(day.num === datenum){
            thatDay = day 
        }
  }

  for(let ses of thatDay.sessions){
      if(ses.sessionkey===sessionkey){
         ses.endtime= sessionEndTime
      }
  }

  setDays(newDays)

  return;

}

function handleSessionNameChange(datenum:number,sessionkey:string,sessionName :string): void {
 
   console.log(sessionName)

  let newDays  = [...days] ;
  
  let thatDay = {} as Day;

  for(let day of newDays){
        if(day.num === datenum){
            thatDay = day 
        }
  }

  for(let ses of thatDay.sessions){
      if(ses.sessionkey===sessionkey){
         ses.sessionName= sessionName
      }
  }

  setDays(newDays)

  return;

}

function HandleSessionBy(datenum:number,sessionkey:string,sessionBy :string): void {
  let newDays  = [...days] ;
  let thatDay = {} as Day;
  for(let day of newDays){
        if(day.num === datenum){
            thatDay = day 
        }
  }
  for(let ses of thatDay.sessions){
      if(ses.sessionkey===sessionkey){
         ses.sessionBy= sessionBy
      }
  }
  setDays(newDays)
  return;

}


  const [budgetData, setBudgetData] = useState<Budget[]>([]);

  const [guestFeedBackData , setGuestFeebBackData] = useState<GuestFeedBackData>(
    {
      OrganizingMembersInvolvement : "",		
      ProgrammeOrganisation	: "",
      ParticipantsInvolvement	:"",	
      VenueArrangements: "",		
      Hospitality:"",
    }
  );

  const [no_of_sessions , set_no_of_sessions] = useState<number>(0);
  const [break_area , set_break_area] = useState<string>("");
  const [attendees ,setAttendees] = useState<string>("");

  return (
    <FormContext.Provider
      value={{
        eventId,
        setEventId,
        coordinator,
        setCoordinator,
        subject,
        setSubject,
        formData,
        setFormData,
        budgetData,
        setBudgetData,
        guestFeedBackData,
        setGuestFeebBackData,
        days,
        addDay,
        handleDateChange,
        addSession,
        handleSessionNumberChange,
        handleStartTimeChange,
        handleEndTimeChange,
        handleSessionNameChange,
        HandleSessionBy,
        no_of_sessions,
        set_no_of_sessions,
        break_area,
        set_break_area,
        attendees,
        setAttendees
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
