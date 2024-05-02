import { Navbar } from "./_components/navbar";

export default function dashBoardLayOut({children} : {children:React.ReactNode}){
     return <div className="h-screen bg-slate-100 flex flex-col">
            <Navbar/>
            {children}
     </div>
}