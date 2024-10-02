import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ home }: { home?: boolean }) => {
 return (
  <>
   <nav className={"w-full z-50 left-0 top-0" + (home ? " fixed" : " sticky")}>
    {!home && (
     <div className="bg-[#0f0e13] w-full h-5 relative">
      <div className="absolute top-0 left-4 md:left-10 w-[2px] h-full bg-white/40" />
     </div>
    )}
    <div
     className={
      "w-full px-7 bg-gray-800 text-white flex justify-between bg-gradient-to-r from-primary via-[#1f1f1f] to-{#1f1f1f]" +
      (home ? " py-4" : " py-3")
     }
    >
     <Link to="/">
      <div className="flex gap-4 items-center">
       <img
        src="/soroworld/images/logo.jpeg"
        alt="logo"
        className="w-10 h-10 rounded-full"
       />
       <h1 className="text-xl font-new font-medium">SoroWorld</h1>
      </div>
     </Link>
     <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
      <div className="gap-4 md:gap-6 items-center hidden lg:flex">
       {[
        ["Solar System", "/explore"],
        ["The Sun", "/explore/star/sun"],
        ["Planets", "/explore/planets"],
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
        <button className="bg-blue-500 text-white px-5 py-1.5 rounded-tl-md rounded-br-md hover:bg-blue-600 active:bg-blue-700 flex items-center gap-1">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-4"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
         </svg>
         Search
        </button>
       </Link>
      </div>
     </div>
     <div hidden={!home}>
      <Link to="/explore">
       <button className="bg-blue-500 text-white px-5 py-1.5 rounded-tl-md rounded-br-md hover:bg-blue-600 active:bg-blue-700">
        Start Exploring
       </button>
      </Link>
     </div>
    </div>
   </nav>
  </>
 );
};
