import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Explore } from "./pages/Explore";
import { ExploreSome } from "./pages/ExploreSome";

export default function App() {
 return (
  <>
   <BrowserRouter basename="/SoroWorld">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/explore" element={<Explore />} />
     <Route path="/explore/:group/:name" element={<ExploreSome />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}
