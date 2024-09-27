import { useState } from "react";
import { Navbar } from "../components/home/Navbar";
import { useParams } from "react-router-dom";

export const ExploreSome = () => {
 const { group, name } = useParams();

 return (
  <main className="bg-[#0f0e13] text-white min-h-screen">
   <Navbar home={false} />
   <div className="absolute z-20 top-0 left-10 w-[2px] h-full bg-white/40"></div>
   <section className="_hero-section py-10">
    <div className="grid grid-cols-2 items-center min-h-[70vh]">
     <div className="px-16">
      <div className="flex gap-4 items-center -ms-8">
       <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center relative z-30">
        <div className="w-2 h-2 bg-primary rounded-full" />
       </div>
       <p className="text-gray-500">{group}</p>
      </div>

      <h1 className="text-5xl font-[300] font-new mt-3">{name}</h1>
      <p className="py-5 lg:max-w-md">Loading...</p>
      <a href="https://science.nasa.gov/solar-system/">
       <button className="border-2 border-primary text-white px-4 py-2 rounded-tl-lg rounded-br-lg transition-all hover:scale-95 active:bg-primary/70 my-3">
        Learn more
       </button>
      </a>
     </div>
     <div>
      <img
       src="/NASA-Space-Apps-Challenge-2024/solar.png"
       alt=""
       className="w-full"
      />
     </div>
    </div>
   </section>
  </main>
 );
};
