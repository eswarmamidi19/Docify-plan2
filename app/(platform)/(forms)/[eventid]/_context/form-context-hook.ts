import { useContext } from "react";
import { FormContext } from "./form-context";

export function useForm(){
     return useContext(FormContext);
}