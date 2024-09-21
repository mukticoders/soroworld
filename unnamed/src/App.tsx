import React from "react";
import OrreryScene from "./components/home/OrreryScene";
import { Details } from "./components/Details";
import { Planet, NEO } from "./types/data";
import { Navbar } from "./components/Navbar";

const App: React.FC = () => {
 const [isOpen, setIsOpen] = React.useState<boolean>(false);
 const [data, setData] = React.useState<Planet | NEO | null>(null);
 return (
  <div>
   <OrreryScene setIsOpen={setIsOpen} setData={setData} />
   <Details isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} />
   <Navbar />
  </div>
 );
};

export default App;
