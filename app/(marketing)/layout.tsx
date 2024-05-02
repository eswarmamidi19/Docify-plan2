import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

type LayoutType = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: LayoutType) {
  return <div className="h-full bg-slate-100">
            <Navbar/>
            <main className="bg-slate-100 pt-40 pb-20">{children}</main>
            <Footer/> 
    </div>;
}
