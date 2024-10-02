import OrreryScene from "../components/home/OrreryScene";
import { Navbar } from "../components/Navbar";

const Home: React.FC = () => {
 return (
  <div className="w-full overflow-hidden">
   <div className="cursor-grab">
    <OrreryScene />
   </div>
   <Navbar home={true} />
  </div>
 );
};

export default Home;
