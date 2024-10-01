import OrreryScene from "../components/home/OrreryScene";
import { Details } from "../components/home/Details";
import { Celestial } from "../types/data";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

const Home: React.FC = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const [data, setData] = useState<Celestial | null>(null);
 return (
  <div className="w-full overflow-hidden">
   <div className="cursor-grab">
    <OrreryScene setIsOpen={setIsOpen} setData={setData} />
   </div>
   <Details isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} />
   <Navbar home={true} />
  </div>
 );
};

export default Home;
