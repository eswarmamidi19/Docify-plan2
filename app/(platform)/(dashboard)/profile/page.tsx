import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { CardWrapper } from "../_components/card-wrapper";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import CardContainer from "../_components/cardContainer";
import localFont from "next/font/local"

const font = localFont({
      src:"../../../../public/fonts/font.woff2"
})

export default async function ProfilePage() {
  const { userId } = auth();
  const user = await currentUser();
  const dbUser = await db.user.findFirst({
    where: {
      authId: userId || " ",
    },
    include: {
      eventforms: true,
    },
  });
  
  return (
    <div className="w-full mt-16 p-7">
       
       <h1 className={cn(font.className , "text-5xl")}> Welcome {user?.username} </h1>
       <p className=""> Visit Your Forms </p>
      {dbUser?.eventforms.length === 0 ? (
        <h1>No Events Available</h1>
      ) : (
         <CardContainer>
               {
                  dbUser?.eventforms.map((form)=>{
                        return <CardWrapper key={form.id} title={form.title} eventId={form.id} > {form.title}</CardWrapper>
                  })
               }
         </CardContainer>
      )}
    </div>
  );
}
