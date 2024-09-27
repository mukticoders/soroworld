import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Explore } from "./pages/Explore";
import { ExploreSome } from "./pages/ExploreSome";

export default function App() {
 return (
  <>
   <BrowserRouter basename="NASA-Space-Apps-Challenge-2024">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/explore" element={<Explore />} />
     <Route path="/explore/:group/:name" element={<ExploreSome />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}
