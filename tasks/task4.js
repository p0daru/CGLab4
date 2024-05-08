// Importing necessary modules from three.js
import * as Three from "three";

// Getting the width and height of the window
const winW = window.innerWidth;
const winH = window.innerHeight;

// Creating the scene
const scene = new Three.Scene();

// Creating a camera
const camera = new Three.PerspectiveCamera(
  45, // field of view
  winW / winH, // aspect ratio
  0.1, // near clipping plane
  1000 // far clipping plane
);

// Setting the initial camera position
camera.position.z = 3;

// Creating a renderer
const renderer = new Three.WebGLRenderer();
renderer.setSize(winW, winH);
renderer.setClearColor(0xffffff, 0); // transparent background
document.body.appendChild(renderer.domElement);

// Loading a texture
const textureLoader = new Three.TextureLoader();
const texture = textureLoader.load("textures/pattern.bmp");
// texture.repeat.set(1, 1);

// Creating materials for the cube
const materials = [
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
];

// Creating the cube and adding it to the scene
const cube = new Three.Mesh(new Three.BoxGeometry(), materials);
scene.add(cube);

// Animation function
function animate() {
  // Requesting the next frame of animation
  requestAnimationFrame(animate);

  // Rotating the cube
  cube.rotation.x += 0.02;
  cube.rotation.z += 0.01;
  cube.rotation.y += 0.005;

  // Rendering the scene with the camera
  renderer.render(scene, camera);
}

// Starting the animation
animate();
