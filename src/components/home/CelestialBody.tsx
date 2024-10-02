import * as THREE from "three";

interface CelestialBodyProps {
 texture: THREE.Texture;
 size: number;
 orbitRadius?: number;
 position?: { x: number; y: number; z: number };
 name?: string;
 group?: string;
}

class CelestialBody {
 mesh: THREE.Mesh;
 orbitRadius?: number;
 name?: string;
 sprite?: THREE.Sprite;
 size: number; // Store the size of the celestial body
 group?: string;

 constructor(props: CelestialBodyProps) {
  const { texture, size, position, orbitRadius, name, group } = props;

  this.size = size; // Store the size for later use

  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  this.mesh = new THREE.Mesh(geometry, material);

  if (position && position.x && position.y && position.z) {
   this.mesh.position.set(position.x, position.y, position.z);
  }
  this.orbitRadius = orbitRadius;
  this.name = name;
  this.group = group;

  if (name) {
   this.createLabel(name);
   this.mesh.name = name;
  }
 }

 createLabel(name: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Dynamic canvas size based on planet's size
  const canvasSize = Math.max(this.size * 16, 256); // Use the stored size property
  canvas.width = canvasSize;
  canvas.height = canvasSize / 2;

  if (!context) return;

  // Dynamic font size based on planet size
  const fontSize = Math.max(this.size * 4, 24); // Minimum font size of 24
  context.font = `${fontSize}px Arial`;
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText("• " + name, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  this.sprite = new THREE.Sprite(spriteMaterial);
  this.sprite.name = name;

  // Dynamic sprite scale based on planet size
  const scaleFactor = Math.max(this.size * 1.5, 10); // Use the stored size property
  this.sprite.scale.set(scaleFactor, scaleFactor * 0.5, 1); // Proportional scaling for width and height

  // Dynamic label positioning above the planet, relative to the planet's size
  const heightOffset = Math.max(this.size * 1.2, 5); // Ensure a minimum offset of 5 units above the planet
  this.sprite.position.set(
   this.mesh.position.x,
   this.mesh.position.y + heightOffset,
   this.mesh.position.z
  );
 }

 updatePosition(time: number) {
   this.mesh.position.x = Math.cos(time) * this.orbitRadius!;
   this.mesh.position.z = Math.sin(time) * this.orbitRadius!;

   if (this.sprite) {
    const heightOffset = Math.max(this.size * 1.2, 5); // Ensure consistent label height during orbit
    this.sprite.position.set(
     this.mesh.position.x,
     this.mesh.position.y + heightOffset,
     this.mesh.position.z
    );
   }
 }
}

export default CelestialBody;
