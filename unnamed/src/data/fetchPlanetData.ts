export type Planet = {
    name: string;
    group: string;
    desc: string;
    params: {
      diameter: number;
      orbitRadius: number;
      inclination: number;
      velocity: number;
    };
  };
  
  function fetchPlanetData(
    planetName: string,
    callback: (planets: Planet[]) => void,
    error: (error: string) => void
  ) {
    const planetApiUrl = `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`;
    
    fetch(planetApiUrl)
      .then((response) => {
        if (!response.ok) {
          return error("Failed to fetch planet data!");
        }
        return response.json();
      })
      .then((planetData) => {
        const planets: Planet[] = [];
  
        planets.push({
          name: planetData.englishName || "Unnamed",
          group: "Planet",
          desc: "No description available",
          params: {
            diameter: planetData.meanRadius || 0,
            orbitRadius: planetData.semimajorAxis || 0,
            inclination: planetData.inclination || 0,
            velocity: planetData.meanOrbitalVelocity || 0,
          },
        });
  
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${planetData.englishName}`)
          .then((res) => {
            if (!res.ok) {
              return error("Failed to fetch planet description!");
            }
            return res.json();
          })
          .then((descData) => {
            const description = descData.extract || "No description available";
            planets[0].desc = description;

            if (typeof callback === "function") {
              callback(planets);
            }
          })
          .catch(() => {
            error("Failed to fetch description!");
          });
      })
      .catch(() => {
        error("Failed to fetch planet data!");
      });
  }
  
  export default fetchPlanetData;
  