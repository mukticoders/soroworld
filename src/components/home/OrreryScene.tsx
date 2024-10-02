import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CelestialBody from "./CelestialBody";
import Orbit from "./Orbit";
import Stars from "./Stars";
import { celestialBodies } from "../../data/orrery";
import fetchNeoData from "../../data/fetchNEO";
import { Celestial } from "../../types/data";
import { useNavigate } from "react-router-dom";

// Define props type
interface OrrerySceneProps {
 setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
 setData: React.Dispatch<React.SetStateAction<Celestial | null>>;
}

const OrreryScene: React.FC<OrrerySceneProps> = ({ setIsOpen, setData }) => {
 const mountRef = useRef<HTMLDivElement | null>(null);
 const navigate = useNavigate();

 useEffect(() => {
  let inExplore = false;

  // Initialize Scene, Camera, Renderer, and Controls
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   1000
  );
  camera.position.z = 40;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  mountRef.current?.appendChild(renderer.domElement); // Ensure mountRef is not null

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.maxDistance = 200;

  const solarSystemGroup = new THREE.Group();
  scene.add(solarSystemGroup);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Initialize celestial animations
  const celestialAnimations: Array<(time: number) => void> = [];
  const textureLoader = new THREE.TextureLoader();

  // Track dragging state
  let isDragging = false;
  let mouseDownPosition = { x: 0, y: 0 };

  // Function to add celestial bodies to the scene
  const addCelestialBody = (body: Celestial) => {
   const { texture, name, params, group } = body;
   const { size, orbitRadius, inclination, velocity } = params;

   const _texture = texture ? textureLoader.load(texture) : null;
   if (_texture) {
    _texture.minFilter = THREE.LinearFilter;

    const celestialBody = new CelestialBody({
     texture: _texture,
     size,
     orbitRadius,
     name,
     group,
    });

    const bodyGroup = new THREE.Group();
    bodyGroup.rotation.x = THREE.MathUtils.degToRad(inclination);
    bodyGroup.add(celestialBody.mesh);
    if (celestialBody.sprite) {
     bodyGroup.add(celestialBody.sprite);
    }
    solarSystemGroup.add(bodyGroup);

    if (orbitRadius > 0) {
     const bodyOrbit = Orbit(orbitRadius, group);
     bodyGroup.add(bodyOrbit.line!);
    }

    const isNEO = group === "NEC" || group === "NEA" || group === "PHA";
    const animate = (time: number) => {
     const angle = isNEO ? Math.random() * 360 : time * velocity * 0.01;
     celestialBody.updatePosition(angle);
    };

    if (!isNEO) celestialAnimations.push(animate);
    else animate(0);
   }
  };

  // Add Celestial Bodies from static data
  celestialBodies.forEach(addCelestialBody);

  // Fetch and Add NEOs
  fetchNeoData((neoData: Celestial[]) => {
   neoData.forEach(addCelestialBody);
  });

  // Add Stars to Scene
  const stars = Stars();
  scene.add(stars.mesh);

  // Set Solar System Inclination
  const solarSystemInclinationRad = THREE.MathUtils.degToRad(30);
  solarSystemGroup.rotation.x = solarSystemInclinationRad;

  // Handle Window Resize
  const handleResize = () => {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
  };

  // Mouse Event Handlers to Differentiate Click from Drag
  const handleMouseDown = (event: MouseEvent) => {
   mouseDownPosition = { x: event.clientX, y: event.clientY };
   isDragging = false;
  };

  const handleMouseMove = (event: MouseEvent) => {
   const moveThreshold = 5; // Adjust the threshold as needed
   if (
    Math.abs(event.clientX - mouseDownPosition.x) > moveThreshold ||
    Math.abs(event.clientY - mouseDownPosition.y) > moveThreshold
   ) {
    isDragging = true;
   }
  };

  const handleMouseUp = (event: MouseEvent) => {
   if (!isDragging) {
    document.body.style.cursor = "pointer";
    handleClick(event);
    setTimeout(() => {
     document.body.style.cursor = "auto";
    }, 100);
   }
  };

  // Handle Mouse Click
  const handleClick = (event: MouseEvent) => {
   event.preventDefault();

   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

   raycaster.setFromCamera(mouse, camera);
   const intersects = raycaster.intersectObjects(scene.children, true);

   const goToPage = (name: string, group: string) => {
    inExplore = true;
    navigate(`/Explore/${group}/${name}`);
   };

   intersects.forEach((intersect) => {
    if (
     intersect.object instanceof THREE.Mesh ||
     intersect.object instanceof THREE.Sprite
    ) {
     const data = celestialBodies.find(
      (body) => body.name === intersect.object.name
     );
     if (!inExplore) {
      if (data) {
       setData(data);
       setIsOpen(true);
       goToPage(data.name, data.group);
      } else {
       fetchNeoData((c: Celestial[] | undefined) => {
        const data1 = c?.find((body) => body.name === intersect.object.name);
        if (data1) {
         setData(data1);
         setIsOpen(true);
         goToPage(data1.name, data1.group);
        }
       });
      }
     }
    }
   });
  };

  // Animation Loop
  const animate = () => {
   requestAnimationFrame(animate);
   const time = Date.now() * 0.0001;
   celestialAnimations.forEach((animate) => animate(time));
   controls.update();
   renderer.render(scene, camera);
  };

  // Start Animation
  animate();

  // Add Event Listeners
  window.addEventListener("resize", handleResize);
  window.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  // Cleanup on Unmount
  return () => {
   if (mountRef.current) {
    mountRef.current.removeChild(renderer.domElement);
   }
   window.removeEventListener("resize", handleResize);
   window.removeEventListener("mousedown", handleMouseDown);
   window.removeEventListener("mousemove", handleMouseMove);
   window.removeEventListener("mouseup", handleMouseUp);
  };
 }, []);

 return <div ref={mountRef} />;
};

export default OrreryScene;
