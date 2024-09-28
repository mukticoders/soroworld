import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ home }: { home?: boolean }) => {
 return (
  <>
   <div
    className={
     "z-50 left-0 w-full px-7 bg-gray-800 text-white flex justify-between bg-gradient-to-r from-primary via-[#1f1f1f] to-{#1f1f1f]" +
     (home ? " fixed top-0 py-4" : " sticky top-5 py-3")
    }
   >
    <Link to="/">
     <div className="flex gap-4 items-center">
      <img
       src="/NASA-Space-Apps-Challenge-2024/images/logo.jpeg"
       alt="logo"
       className="w-10 h-10 rounded-full"
      />
      <h1 className="text-xl font-new font-medium">SoroWorld</h1>
     </div>
    </Link>
    <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
     <div className="flex gap-4 md:gap-6 items-center">
      {[
       ["Our Solar System", "/explore"],
       ["The Sun", "/explore/Star/Sun"],
       ["Planets", "/explore/planets"],
       ["Moons", "/explore/moons"],
       ["Comets", "/explore/comets"],
       ["Asteroids", "/explore/asteroids"],
      ].map(([name, path], i) => (
       <NavLink
        to={path}
        key={name}
        end
        className={({ isActive }) =>
         isActive ? "border-b border-white/50" : ""
        }
       >
        <button
         className={
          "leading-4 text-sm hover:text-white/50 transition-all " +
          (home && i != 0 && " border-s-2 border-white/50 ps-4 md:ps-6")
         }
        >
         {name}
        </button>
       </NavLink>
      ))}
     </div>
     <div hidden={home}>
      <Link to="/">
       <button className="bg-blue-500 text-white px-3 py-1.5 rounded-tl-md rounded-br-md hover:bg-blue-600 active:bg-blue-700">
        Search
       </button>
      </Link>
     </div>
    </div>
    <div hidden={!home}>
     <Link to="/explore">
      <button className="bg-blue-500 text-white px-3 py-1.5 rounded-tl-md rounded-br-md hover:bg-blue-600 active:bg-blue-700">
       Start Exploring
      </button>
     </Link>
    </div>
   </div>
  </>
 );
};
