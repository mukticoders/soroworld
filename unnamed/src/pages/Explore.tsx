import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
/*
 * https://science.nasa.gov/solar-system/
 */
export const Explore = () => {
 return (
  <main className="bg-[#0f0e13] text-white min-h-screen">
   <Navbar home={false} />
   <div className="fixed z-20 top-0 left-4 md:left-10 w-[2px] h-full bg-white/40" />
   <section className="_hero-section py-10">
    <div className="grid lg:grid-cols-2 items-center min-h-[70vh]">
     <div className="ps-[2.6rem] md:ps-16 pe-4 md:pe-16 xl:py-0">
      <div className="flex gap-4 items-center -ms-8">
       <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center relative z-30">
        <div className="w-2 h-2 bg-primary rounded-full" />
       </div>
       <p className="text-gray-500">Overview</p>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-[300] font-new mt-3">
       Our Solar System
      </h1>
      <p className="text-sm leading-6 py-5 lg:max-w-md">
       The solar system has one star (the Sun), eight planets, five dwarf
       planets, hundreds of moons, thousands of comets, and over a million
       asteroids. It is located in the Milky Way galaxy and orbits the galactic
       center at about 515,000 miles per hour, taking around 230 million years
       to complete one orbit.
      </p>
      <a href="https://science.nasa.gov/solar-system/">
       <button className="border-2 border-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-tl-lg rounded-br-lg transition-all hover:scale-95 active:bg-primary/70 my-3">
        Learn more
       </button>
      </a>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:mt-12">
       {[
        {
         name: "The Sun",
         desc: "A star in daylight",
         link: "/explore/Star/Sun",
         icon: "planets.png",
        },
        {
         name: "Planets",
         desc: "Eight planets",
         link: "/explore/planets",
         icon: "planets.png",
        },
        {
         name: "Moons",
         desc: "Natural satellites",
         link: "/explore/moons",
         icon: "planets.png",
        },
        {
         name: "Comets",
         desc: "Icy bodies",
         link: "/explore/comets",
         icon: "planets.png",
        },
        {
         name: "Asteroids",
         desc: "Rocky bodies",
         link: "/explore/asteroids",
         icon: "planets.png",
        },
       ].map(({ name, desc, link, icon }) => (
        <Link to={link} key={name}>
         <div className="select-none rounded-2xl rounded-tr-none flex gap-2 bg-secondary overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group relative">
          <img
           src={`/SoroWorld/images/${icon}`}
           alt={name}
           className="w-16 aspect-square object-cover transition-all duration-300 group-hover:scale-110"
          />
          <div className="py-3">
           <h2 className="text-lg font-new font-medium leading-5">{name}</h2>
           <p className="text-xs line-clamp-1 mt-1">{desc}</p>
          </div>
         </div>
        </Link>
       ))}
      </div>
     </div>
     <div>
      <img src="/SoroWorld/images/solar.png" alt="" className="w-full" />
     </div>
    </div>
   </section>
  </main>
 );
};
