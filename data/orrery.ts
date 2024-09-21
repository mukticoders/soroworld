const PLANET_RADIUS_SCALE = 10;
const PLANET_RADIUS_YINT = 10;

export const celestialBodies = [
 {
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDydjdQ1RL4q2aBOVkHfCgIMpEjb0IFBiiUg&s",
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
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlXCG5Zeg_PJXAHKYmRSBgkjdehPuRoDb8Q&s",
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
  texture:
   "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
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
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OMXsZFqfhTgoP2i4r0KdOAsGMHxuHKD0PQ&s",
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
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORdzdwfM7t3gPHwI267R9fiN8-Fqe2Dr8yg&s",
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
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ABVh6X-rxANutcMkEqX0Q6fQtFt7ERZPkQ&s",
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
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEBAq2y8p5pY3Q3JR4DE-fAiyFrXeGTj6VA&s",
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
  texture:
   "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
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
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5m6I1cNvdxJo1hMYBzgmMzcD1viyiItRiyg&s",
  name: "Neptune",
  group: "Planet",
  params: {
   size: 3.8,
   orbitRadius: PLANET_RADIUS_YINT + 30.07 * PLANET_RADIUS_SCALE,
   inclination: 1.77,
   velocity: 5.4,
  },
 },
 // Adding NEC, PHA, and NEA
 {
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
  name: "NEC - Comet Holmes",
  group: "NEO",
  params: {
   size: 0.2,
   orbitRadius: PLANET_RADIUS_YINT + 1.5 * PLANET_RADIUS_SCALE,
   inclination: 10.0,
   velocity: 10,
  },
 },
 {
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
  name: "PHA - Asteroid 46610",
  group: "NEO",
  params: {
   size: 0.2,
   orbitRadius: PLANET_RADIUS_YINT + 1.2 * PLANET_RADIUS_SCALE,
   inclination: 8.0,
   velocity: 10,
  },
 },
 {
  texture:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
  name: "NEA - Asteroid 2004 EW95",
  group: "NEO",
  params: {
   size: 0.2,
   orbitRadius: PLANET_RADIUS_YINT + 1.0 * PLANET_RADIUS_SCALE,
   inclination: 12.0,
   velocity: 10,
  },
 },
];

/*
 const celestialBodies = [
  {
   gtf: "/models/Sun_1_1391000.glb",
   name: "Sun",
   group: "Star",
   params: {
    size: 5,
    orbitRadius: 0,
    inclination: 0,
    velocity: 0,
   },
  },
  {
   gtf: "/models/Earth_1_12756.glb",
   name: "Earth",
   group: "Planet",
   params: {
    size: 1.5,
    orbitRadius: 1.0 * PLANET_RADIUS_SCALE,
    inclination: 0.00005,
    velocity: 29.8,
   },
  },
  {
   gtf: "/models/24881_Mars_1_6792.glb",
   name: "Mars",
   group: "Planet",
   params: {
    size: 1,
    orbitRadius: 1.524 * PLANET_RADIUS_SCALE,
    inclination: 1.85,
    velocity: 24.1,
   },
  },
  {
   glb: "/models/Venus_1_12103.glb",
   name: "Venus",
   group: "Planet",
   params: {
    size: 1.2,
    orbitRadius: 0.72 * PLANET_RADIUS_SCALE,
    inclination: 3.39,
    velocity: 35.0,
   },
  },
  {
   glb: "/models/Mercury_1_4878.glb",
   name: "Mercury",
   group: "Planet",
   params: {
    size: 0.6,
    orbitRadius: 0.39 * PLANET_RADIUS_SCALE,
    inclination: 7.0,
    velocity: 47.4,
   },
  },
  {
   glb: "/models/Jupiter_1_142984.glb",
   name: "Jupiter",
   group: "Planet",
   params: {
    size: 5.5,
    orbitRadius: 5.2 * PLANET_RADIUS_SCALE,
    inclination: 1.31,
    velocity: 13.1,
   },
  },
  {
   glb: "/models/Saturn_1_120536.glb",
   name: "Saturn",
   group: "Planet",
   params: {
    size: 4.5,
    orbitRadius: 9.58 * PLANET_RADIUS_SCALE,
    inclination: 2.49,
    velocity: 9.7,
   },
  },
  {
   glb: "/models/Uranus_1_51118.glb",
   name: "Uranus",
   group: "Planet",
   params: {
    size: 3.9,
    orbitRadius: 19.18 * PLANET_RADIUS_SCALE,
    inclination: 0.77,
    velocity: 6.8,
   },
  },
  {
   glb: "/models/Neptune_1_49528.glb",
   name: "Neptune",
   group: "Planet",
   params: {
    size: 3.8,
    orbitRadius: 30.07 * PLANET_RADIUS_SCALE,
    inclination: 1.77,
    velocity: 5.4,
   },
  },
  // Adding NEC, PHA, and NEA
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
   name: "NEC - Comet Holmes",
   group: "NEO",
   params: {
    size: 0.2,
    orbitRadius: 1.5 * PLANET_RADIUS_SCALE,
    inclination: 10.0,
    velocity: 10,
   },
  },
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
   name: "PHA - Asteroid 46610",
   group: "NEO",
   params: {
    size: 0.2,
    orbitRadius: 1.2 * PLANET_RADIUS_SCALE,
    inclination: 8.0,
    velocity: 10,
   },
  },
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",
   name: "NEA - Asteroid 2004 EW95",
   group: "NEO",
   params: {
    size: 0.2,
    orbitRadius: 1.0 * PLANET_RADIUS_SCALE,
    inclination: 12.0,
    velocity: 10,
   },
  },
 ];
 */
