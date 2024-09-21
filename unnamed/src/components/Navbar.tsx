export const Navbar = () => {
 return (
  <div className="z-50 fixed top-5 left-[50%] translate-x-[-50%] w-full max-w-3xl mx-auto px-7 py-5 bg-gray-800 rounded-full text-white border border-white/20 flex justify-between">
   <h1 className="text-xl">Orrery App</h1>
   <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">
    Start Exploring
   </button>
  </div>
 );
};
