import { Dispatch, FormEvent, SetStateAction, createContext } from "react";
import { string } from "zod";

type FormDataType  = {
      id: string;
      title: string;
      startDate: string;
      endDate: string;
      departmentName: string;
      authorId: string;
  } 


type Budget={
      id :number;
      reason : string;
      amount : number;
}



type Session = {
      sessionkey : string;
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

type FormContextType = {
      eventId : string;
      setEventId : Dispatch<SetStateAction<string>>;
      coordinator : string;
      setCoordinator : Dispatch<SetStateAction<string>>;
      subject : string;
      setSubject :  Dispatch<SetStateAction<string>>;
      formData : FormDataType,
      setFormData : Dispatch<SetStateAction<FormDataType>>;
      budgetData : Budget[],
      setBudgetData : Dispatch<SetStateAction<Budget[]>>;
      guestFeedBackData : GuestFeedBackData;
      setGuestFeebBackData : Dispatch<SetStateAction<GuestFeedBackData>>;
      days : Day[]
      addDay : (e : FormEvent)=>void 
      handleDateChange : (day_number: number, date: string)=> void ,
      addSession  : (session: Session, datenum: number)=>void,
      handleSessionNumberChange : (datenum : number , sessionkey : string , sessionnumber :number) => void,
      handleStartTimeChange :  (datenum : number , sessionkey : string , sessionStartTime :string) => void
      handleEndTimeChange  : (datenum: number, sessionkey: string, sessionEndTime: string) => void,
      handleSessionNameChange : (datenum: number, sessionkey: string, sessionName: string) =>  void,
      HandleSessionBy : (datenum: number, sessionkey: string, sessionBy: string) => void
      no_of_sessions : number,
      set_no_of_sessions : Dispatch<SetStateAction<number>>,
      break_area : string;
      set_break_area : Dispatch<SetStateAction<string>>;
      attendees : string,
      setAttendees : Dispatch<SetStateAction<string>>
}

export const FormContext = createContext<FormContextType | null>(null);


