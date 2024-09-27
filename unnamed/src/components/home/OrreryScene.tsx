import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CelestialBody from "./CelestialBody";
import Orbit from "./Orbit";
import Stars from "./Stars";
import { celestialBodies } from "../../../public/data/orrery";
import fetchNeoData from "./../../../public/data/fetchNEO";
import { Celestial } from "../../types/data";

/* https://images-api.nasa.gov/search?q=earth */

class Orrery {
 scene: THREE.Scene;
 camera: THREE.PerspectiveCamera;
 renderer: THREE.WebGLRenderer;
 controls: OrbitControls;
 solarSystemGroup: THREE.Group;
 celestialAnimations: Array<(time: number) => void> = [];
 raycaster: THREE.Raycaster;
 mouse: THREE.Vector2;
 mountRef: React.MutableRefObject<HTMLDivElement | null>;

 constructor(
  mountRef: React.MutableRefObject<HTMLDivElement | null>,
  private setData: React.Dispatch<React.SetStateAction<Celestial | null>>,
  private setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  private MAX_ZOOM_OUT: number = 200,
  private SOLAR_SYSTEM_INCLINATION: number = 30
 ) {
  this.mountRef = mountRef;
  this.scene = new THREE.Scene();
  this.scene.background = new THREE.Color(0x000000);
  this.camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   1000
  );
  this.camera.position.z = 30;
  this.renderer = new THREE.WebGLRenderer();
  this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  this.solarSystemGroup = new THREE.Group();
  this.raycaster = new THREE.Raycaster();
  this.mouse = new THREE.Vector2();
  this.initControls();
  this.initScene();
 }

 initControls() {
  this.controls.enableZoom = true;
  this.controls.enablePan = true;
  this.controls.enableDamping = true;
  this.controls.dampingFactor = 0.05;
  this.controls.screenSpacePanning = true;
  this.controls.maxDistance = this.MAX_ZOOM_OUT;
 }

 initScene() {
  this.scene.add(this.solarSystemGroup);
  const textureLoader = new THREE.TextureLoader();

  fetchNeoData(
   (
    celestialBodies: {
     texture: string;
     name: string;
     group: string;
     params: {
      size: number;
      orbitRadius: number;
      inclination: number;
      velocity: number;
     };
    }[]
   ) => {
    celestialBodies.forEach((body) => {
     const { texture, name, params, group } = body;
     const { size, orbitRadius, inclination, velocity } = params;

     const _texture = texture ? new THREE.TextureLoader().load(texture) : null;
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
      this.solarSystemGroup.add(bodyGroup);

      if (orbitRadius > 0) {
       const bodyOrbit = Orbit(orbitRadius, body.group);
       if (bodyOrbit.line) bodyGroup.add(bodyOrbit.line);
      }

      celestialBody.updatePosition(Math.random() * 360);
     }
    });
   }
  );

  celestialBodies.forEach((body) => {
   const { texture, glb, name, params, group } = body;
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
    this.solarSystemGroup.add(bodyGroup);

    if (orbitRadius > 0) {
     const bodyOrbit = Orbit(orbitRadius, body.group);
     bodyGroup.add(bodyOrbit.line!);
    }

    const animate = (time: number) => {
     const angle = time * velocity * 0.01;
     celestialBody.updatePosition(angle);
    };

    this.celestialAnimations.push(animate);
   }
  });

  const stars = Stars();
  this.scene.add(stars.mesh);

  const solarSystemInclinationRad = THREE.MathUtils.degToRad(
   this.SOLAR_SYSTEM_INCLINATION
  );
  this.solarSystemGroup.rotation.x = solarSystemInclinationRad;
 }

 handleResize = () => {
  this.camera.aspect = window.innerWidth / window.innerHeight;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
 };

 handleClick = (event: MouseEvent) => {
  event.preventDefault();

  this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  this.raycaster.setFromCamera(this.mouse, this.camera);
  const intersects = this.raycaster.intersectObjects(this.scene.children, true);

  intersects.forEach((intersect) => {
   if (intersect.object instanceof THREE.Mesh) {
    const data = celestialBodies.find(
     (body) => body.name === intersect.object.name
    );
    if (data) {
     this.setData(data);
     this.setIsOpen(true);
    } else {
     fetchNeoData((c: Celestial[] | undefined) => {
      const data1 = c?.find((body) => body.name === intersect.object.name);
      if (data1) {
       this.setData(data1!);
       this.setIsOpen(true);
      }
     });
    }
   } else if (intersect.object instanceof THREE.Sprite) {
    const data = celestialBodies.find(
     (body) => body.name === intersect.object.name
    );
    if (data) {
     this.setData(data);
     this.setIsOpen(true);
    } else {
     fetchNeoData((c: Celestial[] | undefined) => {
      const data1 = c?.find((body) => body.name === intersect.object.name);

      if (data1) {
       this.setData(data1!);
       this.setIsOpen(true);
      }
     });
    }
   }
  });
 };

 renderScene() {
  const time = Date.now() * 0.0001;
  this.celestialAnimations.forEach((animate) => animate(time));
  this.controls.update();
  this.renderer.render(this.scene, this.camera);
 }

 start() {
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.mountRef.current?.appendChild(this.renderer.domElement);
  window.addEventListener("resize", this.handleResize);
  window.addEventListener("click", this.handleClick);

  const animate = () => {
   requestAnimationFrame(animate);
   this.renderScene();
  };

  animate();
 }

 cleanup() {
  this.mountRef.current?.removeChild(this.renderer.domElement);
  window.removeEventListener("resize", this.handleResize);
  window.removeEventListener("click", this.handleClick);
 }
}

const OrreryScene: React.FC<{
 setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
 setData: React.Dispatch<React.SetStateAction<Celestial | null>>;
}> = ({ setIsOpen, setData }) => {
 const mountRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const orrery = new Orrery(mountRef, setData, setIsOpen);
  orrery.start();

  return () => {
   orrery.cleanup();
  };
 }, []);

 return <div ref={mountRef} />;
};

export default OrreryScene;
