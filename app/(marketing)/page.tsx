import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

const HeadinFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootPage() {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Heading Container */}
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          HeadinFont.className
        )}
      >
        {/* Medal And Batch Container */}
        <div className="mb-4 flex items-center justify-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase ">
          <Medal className="h-6 w-6 mr-2" />
          Event Report Generator
        </div>
        {/* Marketing Heading  */}
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          {" "}
          Docify Helps in Reports{" "}
        </h1>
        {/*Gradient Text*/}
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2  rounded-sm">
          move forward
        </div>
      </div>

      {/* Description */}
      <div
        className={cn(
          "text-sm md:text-xl mt-4 text-center max-w-xs md:max-w-2xl"
        )}
      >
        Streamline your event reporting process with our intuitive and
        comprehensive tool. From conferences to workshops, galas to seminars,
        we've got you covered. 
      </div>

      {/* Sign Up Button */}
      <Button className="mt-6" size={"lg"} asChild>
        <Link href={"/sign-up"}>Get Docify for free </Link>
      </Button>
    </div>
  );
}
