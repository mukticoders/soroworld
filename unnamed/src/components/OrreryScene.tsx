import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CelestialBody from "./CelestialBody";
import Orbit from "./Orbit";
import Stars from "./Stars";

const OrreryScene: React.FC = () => {
 const MAX_ZOOM_OUT = 1000;
 const PLANET_RADIUS_SCALE = 25;
 const SOLAR_SYSTEM_INCLINATION = 30;
 const planets = [
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDydjdQ1RL4q2aBOVkHfCgIMpEjb0IFBiiUg&s",
   name: "Sun",
   params: {
    size: 5,
    orbitRadius: 0, // Sun does not orbit
    inclination: 0, // Sun does not have inclination
   },
  },
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlXCG5Zeg_PJXAHKYmRSBgkjdehPuRoDb8Q&s",
   name: "Earth",
   params: {
    size: 1.5,
    orbitRadius: 1.0 * PLANET_RADIUS_SCALE,
    inclination: 0.00005, // Inclination of Earth's orbit
   },
  },
  {
   texture:
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
   name: "Mars",
   params: {
    size: 1,
    orbitRadius: 1.524 * PLANET_RADIUS_SCALE,
    inclination: 1.85, // Inclination of Mars' orbit
   },
  },
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OMXsZFqfhTgoP2i4r0KdOAsGMHxuHKD0PQ&s",
   name: "Venus",
   params: {
    size: 1.2,
    orbitRadius: 0.72 * PLANET_RADIUS_SCALE,
    inclination: 3.39, // Inclination of Venus' orbit
   },
  },
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORdzdwfM7t3gPHwI267R9fiN8-Fqe2Dr8yg&s",
   name: "Mercury",
   params: {
    size: 0.6,
    orbitRadius: 0.39 * PLANET_RADIUS_SCALE,
    inclination: 7.0, // Inclination of Mercury's orbit
   },
  },
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ABVh6X-rxANutcMkEqX0Q6fQtFt7ERZPkQ&s",
   name: "Jupiter",
   params: {
    size: 5.5,
    orbitRadius: 5.2 * PLANET_RADIUS_SCALE,
    inclination: 1.31, // Inclination of Jupiter's orbit
   },
  },
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEBAq2y8p5pY3Q3JR4DE-fAiyFrXeGTj6VA&s",
   name: "Saturn",
   params: {
    size: 4.5,
    orbitRadius: 9.58 * PLANET_RADIUS_SCALE,
    inclination: 2.49, // Inclination of Saturn's orbit
   },
  },
  {
   texture: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Uranus2.jpg",
   name: "Uranus",
   params: {
    size: 3.9,
    orbitRadius: 19.18 * PLANET_RADIUS_SCALE,
    inclination: 0.77, // Inclination of Uranus' orbit
   },
  },
  {
   texture:
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
   name: "Neptune",
   params: {
    size: 3.8,
    orbitRadius: 30.07 * PLANET_RADIUS_SCALE,
    inclination: 1.77, // Inclination of Neptune's orbit
   },
  },
 ];

 const mountRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   1000
  );
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  mountRef.current?.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;
  controls.enablePan = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;
  controls.maxDistance = MAX_ZOOM_OUT;

  // Create a solar system group
  const solarSystemGroup = new THREE.Group();
  scene.add(solarSystemGroup);

  // Loop through the array to create celestial bodies
  planets.forEach((planet) => {
   const { texture, name, params } = planet;
   const { size, orbitRadius, inclination } = params;
   const _texture = new THREE.TextureLoader().load(texture);

   // Create group for each planet to handle inclination
   const planetGroup = new THREE.Group();
   planetGroup.rotation.x = THREE.MathUtils.degToRad(inclination); // Apply inclination
   scene.add(planetGroup);

   // Create celestial body
   const celestialBody = new CelestialBody({
    texture: _texture,
    size,
    orbitRadius,
    name,
   });

   // Add planet to the group
   planetGroup.add(celestialBody.mesh);
   solarSystemGroup.add(planetGroup);

   // If the planet has an orbit (i.e., is not the Sun), add its orbit
   if (orbitRadius > 0) {
    const planetOrbit = Orbit(orbitRadius);
    planetGroup.add(planetOrbit.line);
   }

   // Update planet position during animation
   const animate = () => {
    const time = Date.now() * 0.001;
    celestialBody.updatePosition(time);
   };

   // Add animate function to requestAnimationFrame
   const renderLoop = () => {
    requestAnimationFrame(renderLoop);
    animate();
    controls.update();
    renderer.render(scene, camera);
   };

   renderLoop();
  });

  // Add stars to the background
  const stars = Stars();
  scene.add(stars.mesh);

  // Apply solar system inclination
  const solarSystemInclinationRad = THREE.MathUtils.degToRad(
   SOLAR_SYSTEM_INCLINATION
  );
  solarSystemGroup.rotation.x = solarSystemInclinationRad;

  // Handle window resize
  window.addEventListener("resize", () => {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return () => {
   mountRef!.current?.removeChild(renderer.domElement);
  };
 }, []);

 return <div ref={mountRef} />;
};

export default OrreryScene;
