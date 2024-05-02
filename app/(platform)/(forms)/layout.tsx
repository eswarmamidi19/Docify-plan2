import { FormContextProvider } from "./[eventid]/_context/form-context-provider";

type formsLayoutChildren = {
    children : React.ReactNode;
}

export default function formsLayout({children} : formsLayoutChildren){
     return <div>
            <FormContextProvider>
                 {children}
            </FormContextProvider>
          </div>
}