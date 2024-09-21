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
 name?: string;
 sprite?: THREE.Sprite;

 constructor(props: CelestialBodyProps) {
  const { texture, size, position, orbitRadius, name } = props;

  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  this.mesh = new THREE.Mesh(geometry, material);

  if (position && position.x && position.y && position.z) {
   this.mesh.position.set(position.x, position.y, position.z);
  }
  this.orbitRadius = orbitRadius;
  this.name = name;

  if (name) {
   this.createLabel(name);
   this.mesh.name = name; // Set the name of the mesh
  }
 }

 createLabel(name: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return;

  context.font = "24px Arial";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText(name, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  this.sprite = new THREE.Sprite(spriteMaterial);
  this.sprite.scale.set(10, 5, 1); // Adjust size as needed

  // Set position slightly above the celestial body
  if (this.mesh.position) {
   this.sprite.position.set(
    this.mesh.position.x,
    this.mesh.position.y + 2, // Adjust height as needed
    this.mesh.position.z
   );
  }
 }

 updatePosition(time: number) {
  if (this.orbitRadius) {
   this.mesh.position.x = Math.cos(time) * this.orbitRadius;
   this.mesh.position.z = Math.sin(time) * this.orbitRadius;

   if (this.sprite) {
    this.sprite.position.set(
     this.mesh.position.x,
     this.mesh.position.y + 2, // Adjust height as needed
     this.mesh.position.z
    );
   }
  }
 }
}

export default CelestialBody;
