import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-amber-500">
      <div className="bg-white p-2 px-5 m-2 rounded-4xl ring-1 ring-red-400 shadow-2xl">
        <div className="bg-gradient-to-r from-slate-700 to-amber-800 via-amber-500 text-transparent bg-clip-text font-bold text-5xl">
          My first Mono
        </div>

      </div>
      
    </div>
    </>
   
  );
}
