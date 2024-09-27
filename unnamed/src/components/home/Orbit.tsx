import * as THREE from "three";

const Orbit = (radius: number, group: string) => {
 if (group === "NEC" || group === "NEA" || group === "PHA") {
  return { line: null };
 }
 const points = [];
 const segments = 64;

 for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * Math.PI * 2;
  const x = Math.cos(theta) * radius;
  const z = Math.sin(theta) * radius;
  points.push(new THREE.Vector3(x, 0, z));
 }

 const geometry = new THREE.BufferGeometry().setFromPoints(points);
 const material = new THREE.LineBasicMaterial({
  color: Math.random() * 0xffffff,
 });
 const line = new THREE.LineLoop(geometry, material);

 return { line };
};

export default Orbit;
