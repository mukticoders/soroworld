import * as THREE from "three";

interface CelestialBodyProps {
 texture: THREE.Texture;
 size: number;
 orbitRadius?: number;
 position?: { x: number; y: number; z: number };
 name?: string;
}

class CelestialBody {
 mesh: THREE.Mesh;
 orbitRadius?: number;

 constructor(props: CelestialBodyProps) {
  const { texture, size, position, orbitRadius } = props;

  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  this.mesh = new THREE.Mesh(geometry, material);

  if (position && position.x && position.y && position.z) {
   this.mesh.position.set(position.x, position.y, position.z);
  }
  this.orbitRadius = orbitRadius;
 }

 updatePosition(time: number) {
  if (this.orbitRadius) {
   this.mesh.position.x = Math.cos(time) * this.orbitRadius;
   this.mesh.position.z = Math.sin(time) * this.orbitRadius;
  }
 }
}

export default CelestialBody;
