import { useEffect, useState } from "react";
import { Navbar } from "../components/home/Navbar";
import { useParams } from "react-router-dom";
import fetchPlanetData from "../data/fetchPlanetData";
import fetchNeoData from "../data/fetchNEOdata";
import HeroImage from "../components/home/HeroImage";

type CelestialBody = {
 name: string;
 diameter: number | null;
 orbitRadius: number | null;
 inclination: number | null;
 velocity: number | null;
 description: string | null;
};

export const ExploreSome = () => {
 const { group, name } = useParams<{ group: string; name: string }>();
 const [celestialBody, setCelestialBody] = useState<CelestialBody | null>(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const formattedName = encodeURIComponent(
   name?.replace("(", "").replace(")", "") ?? ""
  );

  const fetchCelestialBodyData = (bodyName: string) => {
   setLoading(true);
   setError(null);

   if (group === "NEA" || group === "PHA" || group === "NEC") {
    fetchNeoData(
     bodyName,
     (celestialBodies) => {
      if (celestialBodies.length > 0) {
       const body = celestialBodies[0];
       const celestialBodyData: CelestialBody = {
        name: body.name,
        diameter: body.params.diameter,
        orbitRadius: body.params.orbitRadius,
        inclination: body.params.inclination,
        velocity: body.params.velocity,
        description: body.desc,
       };

       setCelestialBody(celestialBodyData);
      } else {
       setError("No celestial body found.");
      }
      setLoading(false);
     },
     (e) => {
      setError(e);
      setLoading(false);
     }
    );
   } else {
    fetchPlanetData(
     bodyName.toLowerCase(),
     (planets) => {
      if (planets.length > 0) {
       const body = planets[0];
       const celestialBodyData: CelestialBody = {
        name: body.name,
        diameter: body.params.diameter,
        orbitRadius: body.params.orbitRadius,
        inclination: body.params.inclination,
        velocity: body.params.velocity,
        description: body.desc,
       };

       setCelestialBody(celestialBodyData);
      } else {
       setError("No celestial body found.");
      }
      setLoading(false);
     },
     (e) => {
      setError(e);
      setLoading(false);
     }
    );
   }
  };

  if (name) {
   fetchCelestialBodyData(formattedName);
  }
 }, [group, name]);

 return (
  <main className="bg-[#0f0e13] text-white min-h-screen">
   <Navbar home={false} />
   <div className="absolute z-20 top-0 left-10 w-[2px] h-full bg-white/40"></div>
   <section className="_hero-section py-10">
    <div className="grid lg:grid-cols-2 min-h-[80vh]">
     <div className="px-16 flex flex-col justify-center py-4 lg:py-12">
      <div className="flex gap-4 items-center -ms-8">
       <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center relative z-30">
        <div className="w-2 h-2 bg-primary rounded-full" />
       </div>
       <p className="text-gray-500">{group}</p>
      </div>

      <h1 className="text-5xl font-[300] font-new mt-3">
       {celestialBody?.name || name}
      </h1>

      {loading ? (
       <p className="py-5 lg:max-w-md">Loading...</p>
      ) : error ? (
       <p className="py-5 lg:max-w-md text-red-500">{error}</p>
      ) : (
       <div className="py-5 lg:max-w-md">
        <p>{celestialBody?.description}</p>
        <p className="mt-5">
         Diameter:{" "}
         {celestialBody?.diameter ? `${celestialBody.diameter} km` : "N/A"}
        </p>
        <p>
         Orbit Radius:{" "}
         {celestialBody?.orbitRadius
          ? `${celestialBody.orbitRadius} AU`
          : "N/A"}
        </p>
        <p>
         Inclination:{" "}
         {celestialBody?.inclination ? `${celestialBody.inclination}°` : "N/A"}
        </p>
        <p>
         Velocity:{" "}
         {celestialBody?.velocity ? `${celestialBody.velocity} km/s` : "N/A"}
        </p>
       </div>
      )}

      <a href="https://science.nasa.gov/solar-system/">
       <button className="border-2 border-primary text-white px-4 py-2 rounded-tl-lg rounded-br-lg transition-all hover:scale-95 active:bg-primary/70 my-3">
        Learn more
       </button>
      </a>
     </div>
     <div className="flex justify-center items-center relative h-full lg:max-h-[80vh]">
      <HeroImage name={celestialBody?.name || name || ""} group={group || ""} />
     </div>
    </div>
   </section>
  </main>
 );
};
