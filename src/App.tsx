import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Explore } from "./pages/Explore";
import { ExploreSome } from "./pages/ExploreSome";
import { Planets } from "./pages/Planets";
import { Comets } from "./pages/Comets";
import { Asteroids } from "./pages/Asteroids";

export default function App() {
 return (
  <>
   <BrowserRouter basename="/SoroWorld">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Explore" element={<Explore />} />
     <Route path="/Explore/:group/:name" element={<ExploreSome />} />
     <Route path="/Explore/Planets" element={<Planets />} />
     <Route path="/Explore/Comets" element={<Comets />} />
     <Route path="/Explore/Asteroids" element={<Asteroids />} />
     <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  </>
 );
}
