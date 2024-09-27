type CelestialBody = {
 texture: string;
 name: string;
 group: string;
 params: {
  size: number;
  orbitRadius: number;
  inclination: number;
  velocity: number;
 };
};

function fetchNeoData(callback: (celestialBodies: CelestialBody[]) => void) {
 const today = new Date().toISOString().split("T")[0];
 const apiUrl = "https://api.nasa.gov/neo/rest/v1/feed";
 const apiKey = "1wGJOE9pwnGsz1xoc5o2GzOYBf4lbl7dj82dc1qp"; // "9EbbRNj3WUWdVE0oEpcpiW1TuvVLkDeFEYs6pOpx";
 const PLANET_RADIUS_SCALE = 10;
 const PLANET_RADIUS_YINT = 10;

 function convertAUtoKm(au) {
  const AU_TO_KM = 149597870.7;
  return Number(au) * AU_TO_KM;
 }

 // Fetching NEO data from NASA API
 fetch(`${apiUrl}?start_date=${today}&end_date=${today}&api_key=${apiKey}`)
  .then((response) => {
   if (!response.ok) {
    throw new Error("Network response was not ok");
   }
   return response.json();
  })
  .then((data) => {
   const celestialBodies: CelestialBody[] = [];
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
      const distanceFromEarth =
       asteroid.close_approach_data[0].miss_distance.kilometers;
      const distanceFromSunAU =
       asteroid.estimated_diameter.kilometers.estimated_diameter_max;
      const distanceFromSunKm = convertAUtoKm(distanceFromSunAU);

      celestialBodies.push({
       texture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
       name: asteroid.name || "Unnamed Asteroid",
       group: asteroid.is_potentially_hazardous_asteroid ? "PHA" : "NEA",
       params: {
        size: 0.55,
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

export default fetchNeoData;
