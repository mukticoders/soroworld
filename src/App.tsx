import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Explore } from "./pages/Explore";
import { ExploreBy } from "./pages/ExploreBy";
import { Planets } from "./pages/Planets";
import { Comets } from "./pages/Comets";
import { Asteroids } from "./pages/Asteroids";

export default function App() {
 return (
  <>
   <BrowserRouter basename="/soroworld">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/explore" element={<Explore />} />
     <Route path="/explore/:group/:name" element={<ExploreBy />} />
     <Route path="/explore/planets" element={<Planets />} />
     <Route path="/explore/comets" element={<Comets />} />
     <Route path="/explore/asteroids" element={<Asteroids />} />
     <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  </>
 );
}
