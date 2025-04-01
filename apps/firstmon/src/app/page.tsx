import { ProfileForm } from "@/components/profileform";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className=" items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-amber-500 to-slate-500 via-white">
      <div className="bg-white p-2 px-5 m-2 ring-1 ring-red-400 shadow-2xl shadow-gray-400">
        <div className="bg-gradient-to-r from-slate-700 to-amber-800 via-amber-500 text-transparent bg-clip-text font-bold text-5xl">
          My first Monorepo
        </div>

      </div>
      <div className="">
        <div className="mt-11 flex justify-center">
          <Button asChild className=" hover:scale-105 shadow-xl ring-1 ring-white">
            <Link href ="https://idavid-ten.vercel.app/aboutMe" target="_blank" rel="noopener noreferrer"> My Journery</Link>
          </Button>
        </div>
        <div className="mt-10 bg-white p-6 m-4 rounded-sm ring-1 shadow-xl flex justify-center">
          <ProfileForm></ProfileForm>
          
        </div>       
      </div>
      
    </div>
    </>
   
  );
}
