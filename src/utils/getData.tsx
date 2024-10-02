import { Celestial } from "../types/data";
import {
 convertAUtoKm,
 NASA_API_KEY,
 PLANET_RADIUS_SCALE,
 PLANET_RADIUS_YINT,
} from "./global";

export const allBodies = [
 {
  texture: "/soroworld/images/2k_sun.jpg",
  name: "Sun",
  group: "Star",
  params: {
   size: 7,
   orbitRadius: 0,
   inclination: 0,
   velocity: 0,
  },
 },
 {
  texture: "/soroworld/images/2k_earth_daymap.jpg",
  name: "Earth",
  group: "Planet",
  params: {
   size: 1.5,
   orbitRadius: PLANET_RADIUS_YINT + 1.0 * PLANET_RADIUS_SCALE,
   inclination: 0.00005,
   velocity: 29.8,
  },
 },
 {
  texture: "/soroworld/images/2k_mars.jpg",
  name: "Mars",
  group: "Planet",
  params: {
   size: 1,
   orbitRadius: PLANET_RADIUS_YINT + 1.524 * PLANET_RADIUS_SCALE,
   inclination: 1.85,
   velocity: 24.1,
  },
 },
 {
  texture: "/soroworld/images/2k_venus_surface.jpg",
  name: "Venus",
  group: "Planet",
  params: {
   size: 1.2,
   orbitRadius: PLANET_RADIUS_YINT + 0.72 * PLANET_RADIUS_SCALE,
   inclination: 3.39,
   velocity: 35.0,
  },
 },
 {
  texture: "/soroworld/images/2k_mercury.jpg",
  name: "Mercury",
  group: "Planet",
  params: {
   size: 0.6,
   orbitRadius: PLANET_RADIUS_YINT + 0.39 * PLANET_RADIUS_SCALE,
   inclination: 7.0,
   velocity: 47.4,
  },
 },
 {
  texture: "/soroworld/images/2k_jupiter.jpg",
  name: "Jupiter",
  group: "Planet",
  params: {
   size: 5.5,
   orbitRadius: PLANET_RADIUS_YINT + 5.2 * PLANET_RADIUS_SCALE,
   inclination: 1.31,
   velocity: 13.1,
  },
 },
 {
  texture: "/soroworld/images/2k_saturn.jpg",
  name: "Saturn",
  group: "Planet",
  params: {
   size: 4.5,
   orbitRadius: PLANET_RADIUS_YINT + 9.58 * PLANET_RADIUS_SCALE,
   inclination: 2.49,
   velocity: 9.7,
  },
 },
 {
  texture: "/soroworld/images/2k_uranus.jpg",
  name: "Uranus",
  group: "Planet",
  params: {
   size: 3.9,
   orbitRadius: PLANET_RADIUS_YINT + 19.18 * PLANET_RADIUS_SCALE,
   inclination: 0.77,
   velocity: 6.8,
  },
 },
 {
  texture: "/soroworld/images/2k_neptune.jpg",
  name: "Neptune",
  group: "Planet",
  params: {
   size: 3.8,
   orbitRadius: PLANET_RADIUS_YINT + 30.07 * PLANET_RADIUS_SCALE,
   inclination: 1.77,
   velocity: 5.4,
  },
 },
];

export function getBody(
 bodyName: string,
 callback: (bodies: Celestial[]) => void,
 error: (error: string) => void
) {
 const bodyApiUrl = `https://api.le-systeme-solaire.net/rest/bodies/${bodyName}`;

 fetch(bodyApiUrl)
  .then((response) => {
   if (!response.ok) {
    return error("Failed to fetch data!");
   }

   return response.json();
  })
  .then((bodyData) => {
   const bodies: Celestial[] = [];

   bodies.push({
    name: bodyData.englishName || "Unnamed",
    group: "Planet",
    params: {
     diameter: bodyData.meanRadius || 0,
     orbitRadius: bodyData.semimajorAxis || 0,
     inclination: bodyData.inclination || 0,
     velocity: bodyData.meanOrbitalVelocity || 0,
    },
   });

   fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${bodyData.englishName}`
   )
    .then((res) => {
     if (!res.ok) {
      return error("Failed to fetch description!");
     }

     return res.json();
    })
    .then((descData) => {
     bodies[0].desc = descData.extract || "No description available";
     bodies[0].link = descData.content_urls.desktop.page || "";

     if (typeof callback === "function") {
      callback(bodies);
     }
    })
    .catch(() => {
     error("Failed to fetch description!");
    });
  })
  .catch(() => {
   error("Failed to fetch data!");
  });
}

export function getAllNeo(callback: (celestialBodies: Celestial[]) => void) {
 const today = new Date().toISOString().split("T")[0];
 const beforeDays = new Date();
 beforeDays.setDate(beforeDays.getDate() - 6);
 const apiUrl = "https://api.nasa.gov/neo/rest/v1/feed";

 fetch(
  `${apiUrl}?start_date=${
   beforeDays.toISOString().split("T")[0]
  }&end_date=${today}&api_key=${NASA_API_KEY}`
 )
  .then((response) => {
   if (!response.ok) {
    throw new Error("Network response was not ok");
   }
   return response.json();
  })
  .then((data) => {
   const celestialBodies: Celestial[] = [];
   const asteroids = data.near_earth_objects;
   for (const date in asteroids) {
    asteroids[date].forEach(
     (asteroid: {
      close_approach_data: {
       miss_distance: { kilometers: number };
       relative_velocity: { kilometers_per_hour: number };
      }[];
      estimated_diameter: { kilometers: { estimated_diameter_max: number } };
      is_potentially_hazardous_asteroid: boolean;
      name: string;
      orbiting_body: string;
     }) => {
      const distanceFromSunAU =
       asteroid.estimated_diameter.kilometers.estimated_diameter_max;
      const distanceFromSunKm = convertAUtoKm(distanceFromSunAU);

      celestialBodies.push({
       texture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
       name: asteroid.name || "Unnamed",
       group: asteroid.is_potentially_hazardous_asteroid ? "PHA" : "NEA",
       params: {
        size: 0.3,
        orbitRadius:
         PLANET_RADIUS_YINT + (distanceFromSunKm / 1e6) * PLANET_RADIUS_SCALE,
        inclination: asteroid.orbiting_body ? 0 : Math.random() * 10,
        velocity:
         asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour /
         1000,
       },
      });
     }
    );
   }

   if (typeof callback === "function") {
    callback(celestialBodies);
   }
  })
  .catch((error) => {
   console.error("There was a problem with your fetch operation:", error);
  });
}

export function getNeo(
 asteroidId: string,
 callback: (celestialBodies: Celestial[]) => void,
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
   const celestialBodies: Celestial[] = [];
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
