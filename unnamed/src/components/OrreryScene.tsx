import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import CelestialBody from "./CelestialBody";
import Orbit from "./Orbit";
import Stars from "./Stars";

const OrreryScene: React.FC = () => {
 const MAX_ZOOM_OUT = 1000;
 const PLANET_RADIUS_SCALE = 25;
 const SOLAR_SYSTEM_INCLINATION = 30;

 const celestialBodies = [
  {
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDydjdQ1RL4q2aBOVkHfCgIMpEjb0IFBiiUg&s",
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
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlXCG5Zeg_PJXAHKYmRSBgkjdehPuRoDb8Q&s",
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
   texture:
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
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
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OMXsZFqfhTgoP2i4r0KdOAsGMHxuHKD0PQ&s",
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
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORdzdwfM7t3gPHwI267R9fiN8-Fqe2Dr8yg&s",
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
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ABVh6X-rxANutcMkEqX0Q6fQtFt7ERZPkQ&s",
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
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEBAq2y8p5pY3Q3JR4DE-fAiyFrXeGTj6VA&s",
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
   texture:
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
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
   texture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5m6I1cNvdxJo1hMYBzgmMzcD1viyiItRiyg&s",
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

  // Loaders
  const textureLoader = new THREE.TextureLoader();

  // Hold references to celestial bodies for animation
  const celestialAnimations: Array<(time: number) => void> = [];
  celestialBodies.forEach((body) => {
   const { texture, name, params } = body;
   const { size, orbitRadius, inclination, velocity } = params;

   if (texture) {
    const _texture = textureLoader.load(texture);
    _texture.minFilter = THREE.LinearFilter; // Optional: to avoid mipmap artifacts

    const celestialBody = new CelestialBody({
     texture: _texture,
     size,
     orbitRadius,
     name,
    });

    const bodyGroup = new THREE.Group();
    bodyGroup.rotation.x = THREE.MathUtils.degToRad(inclination);
    bodyGroup.add(celestialBody.mesh);
    solarSystemGroup.add(bodyGroup);

    if (orbitRadius > 0) {
     const bodyOrbit = Orbit(orbitRadius, body.group);
     bodyGroup.add(bodyOrbit.line);
    }

    const animate = (time: number) => {
     const angle = time * velocity * 0.01;
     celestialBody.updatePosition(angle);
    };

    celestialAnimations.push(animate);
   }
  });

  const stars = Stars();
  scene.add(stars.mesh);

  const solarSystemInclinationRad = THREE.MathUtils.degToRad(
   SOLAR_SYSTEM_INCLINATION
  );
  solarSystemGroup.rotation.x = solarSystemInclinationRad;

  const renderLoop = () => {
   requestAnimationFrame(renderLoop);

   const time = Date.now() * 0.001; // Time in seconds
   celestialAnimations.forEach((animate) => animate(time));

   controls.update();
   renderer.render(scene, camera);
  };

  renderLoop();

  window.addEventListener("resize", () => {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return () => {
   mountRef.current?.removeChild(renderer.domElement);
  };
 }, []);

 return <div ref={mountRef} />;
};

export default OrreryScene;
