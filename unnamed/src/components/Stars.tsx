import * as THREE from "three";

const Stars = () => {
 const starGeometry = new THREE.BufferGeometry();
 const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });

 const starCount = 1000;
 const starVertices = [];

 for (let i = 0; i < starCount; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
 }

 starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3)
 );
 const stars = new THREE.Points(starGeometry, starMaterial);

 return { mesh: stars };
};

export default Stars;
