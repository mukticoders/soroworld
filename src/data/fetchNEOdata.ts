import {
 convertAUtoKm,
 NASA_API_KEY,
 PLANET_RADIUS_SCALE,
 PLANET_RADIUS_YINT,
} from "./global";

export type CelestialBody = {
 texture: string;
 name: string;
 group: string;
 desc: string;
  link: string;
 params: {
  size: number;
  diameter: number;
  orbitRadius: number;
  inclination: number;
  velocity: number;
 };
};

function fetchNeoData(
 asteroidId: string,
 callback: (celestialBodies: CelestialBody[]) => void,
 error: (error: string) => void
) {
 const apiUrl = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}`;

 fetch(`${apiUrl}?api_key=${NASA_API_KEY}`)
  .then((response) => {
   if (!response.ok) {
    return error("Network response was not ok!");
   }
   return response.json();
  })
  .then((data) => {
   const celestialBodies: CelestialBody[] = [];
   const asteroid = data;

   const distanceFromSunAU =
    asteroid.estimated_diameter.kilometers.estimated_diameter_max;
   const distanceFromSunKm = convertAUtoKm(distanceFromSunAU);

   celestialBodies.push({
    texture:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
    name: asteroid.name || "Unnamed",
    group: asteroid.is_potentially_hazardous_asteroid ? "PHA" : "NEA",
    desc:
     asteroid.orbital_data.orbit_class.orbit_class_description ||
     "No description available",
     link: asteroid.nasa_jpl_url,
    params: {
     size: 0.55,
     diameter: distanceFromSunKm,
     orbitRadius:
      PLANET_RADIUS_YINT + (distanceFromSunKm / 1e6) * PLANET_RADIUS_SCALE,
     inclination: Math.random() * 10,
     velocity:
      asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour /
      1000,
    },
   });

   if (typeof callback === "function") {
    callback(celestialBodies);
   }
  })
  .catch(() => {
   error("Failed to fetch data!");
  });
}

export default fetchNeoData;
