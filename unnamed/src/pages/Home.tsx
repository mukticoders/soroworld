import OrreryScene from "../components/home/OrreryScene";
import { Details } from "../components/home/Details";
import { Planet, NEO } from "../types/data";
import { Navbar } from "../components/home/Navbar";
import { useState } from "react";

const Home: React.FC = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const [data, setData] = useState<Planet | NEO | null>(null);
 return (
  <div>
   <OrreryScene setIsOpen={setIsOpen} setData={setData} />
   <Details isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} />
   <Navbar />
  </div>
 );
};

export default Home;
