import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({
    publicRoutes : ["/"],
    afterAuth(auth ,req){
         let path = "/profile";   
         if(auth.userId  && auth.isPublicRoute){
              return NextResponse.redirect(new URL("/profile" , req.url));
         }
         if(!auth.userId && !auth.isPublicRoute){
             return NextResponse.redirect(new URL("/" , req.url))
         }
         

    }
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};