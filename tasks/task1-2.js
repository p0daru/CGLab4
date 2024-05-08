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
const texture = textureLoader.load("textures/task1_2.bmp");
const topBottomTexture = textureLoader.load("textures/task1_2.bmp");

// Creating and setting materials for the cube (texture for bottom and top)
const materials = [
  new Three.MeshBasicMaterial({
    color: 0xabdbe3,
    transparent: true,
    opacity: 0,
  }), // right side
  new Three.MeshBasicMaterial({
    color: 0xabdbe3,
    transparent: true,
    opacity: 0,
  }), // left side
  new Three.MeshBasicMaterial({ map: topBottomTexture }), // top side
  new Three.MeshBasicMaterial({ map: topBottomTexture }), // bottom side
  new Three.MeshBasicMaterial({
    color: 0xabdbe3,
    transparent: true,
    opacity: 0,
  }), // front side
  new Three.MeshBasicMaterial({
    color: 0xabdbe3,
    transparent: true,
    opacity: 0,
  }), // back side
];

// Adding the cube to the scene
const cube = new Three.Mesh(new Three.BoxGeometry(), materials);
scene.add(cube);

// Creating wireframe geometry for the cube
const wireframe = new Three.WireframeGeometry(new Three.BoxGeometry());

// Creating material for the wireframe
const wireframeMaterial = new Three.LineBasicMaterial({ color: 0x000000 });

// Creating the wireframe mesh
const wireframeCube = new Three.LineSegments(wireframe, wireframeMaterial);
cube.add(wireframeCube);

// Animation function
function animate() {
  // Requesting the next frame of animation
  requestAnimationFrame(animate);

  // Rotating the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  // Rendering the scene with the camera
  renderer.render(scene, camera);
}

// Starting the animation
animate();
