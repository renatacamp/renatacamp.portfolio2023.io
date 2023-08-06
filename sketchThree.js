import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoaderPath';
import { RGBELoader } from 'RGBELoaderPath';

let container, camera, scene, renderer, mesh, mixer, light1, model, modelStaticCopy, secondModelPos, modelStatic;
const clock = new THREE.Clock();
let mouseX = 0;
let accumulatedRotation = 0;
let h1Traveled = 0;
let h = window.innerHeight;
let h1 = h / 100;
let w = window.innerWidth;
let w1 = w / 100;

const cameraTrajectory1 = [
  { position: new THREE.Vector3(7.5, 3.5, 9), rotation: new THREE.Euler(0, 0, 0), length: 90},
  { position: new THREE.Vector3(-6, 4.5, 9), rotation: new THREE.Euler(0, Math.PI * 0.4, 0), length: 50 },
  { position: new THREE.Vector3(-12, 11, 5), rotation: new THREE.Euler(0, Math.PI * 0.8, 0), length: 55 },
  { position: new THREE.Vector3(-6, 8.5, 8), rotation: new THREE.Euler(0, Math.PI * 1.1, 0), length: 70 },
];

const cameraTrajectory2 = [
  { position: new THREE.Vector3(6, 3.5, 9), rotation: new THREE.Euler(0, 0, 0), length: 100 },
  { position: new THREE.Vector3(-6, 4, 8.5), rotation: new THREE.Euler(0, Math.PI * 0.4, 0), length: 50 },
  { position: new THREE.Vector3(-13, 11, 5), rotation: new THREE.Euler(0, Math.PI * 0.8, 0), length: 65 },
  { position: new THREE.Vector3(-6, 8, 8), rotation: new THREE.Euler(0, Math.PI * 1.1, 0), length: 50 },
];

const cameraTrajectory3 = [
  { position: new THREE.Vector3(0, 4, 12), rotation: new THREE.Euler(0, 0, 0), length: 100 },
  { position: new THREE.Vector3(-5, 6, 6.5), rotation: new THREE.Euler(0, Math.PI * 0.45, 0), length: 50 },
  { position: new THREE.Vector3(-11, 10, 8), rotation: new THREE.Euler(0, Math.PI * 0.8, 0), length: 75 },
  { position: new THREE.Vector3(-7, 7, 8), rotation: new THREE.Euler(0, Math.PI * 1.1, 0), length: 70 },
];

const cameraTrajectory4 = [
  { position: new THREE.Vector3(1, 6, 16), rotation: new THREE.Euler(0, 0, 0), length: 80 },
  { position: new THREE.Vector3(-3, 5, 6), rotation: new THREE.Euler(0, Math.PI * 0.4, 0), length: 40 },
  { position: new THREE.Vector3(-10, 9, 5), rotation: new THREE.Euler(0, Math.PI * 0.8, 0), length: 70 },
  { position: new THREE.Vector3(-8, 7, 8), rotation: new THREE.Euler(0, Math.PI * 1.1, 0), length: 70 },
];

init();

document.body.appendChild(container);
renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
document.addEventListener('mousemove', onDocumentMouseMove, false);

function init() {
  container = document.getElementById('canvas');

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(7.5, 3.5, 9); // Set initial camera position

  scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);

  new RGBELoader().setPath('assets/3d/').load('studio.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
  });

  const sphere = new THREE.SphereGeometry(0.5, 16, 8);
  light1 = new THREE.PointLight(0xff0040, 10, 50);
  light1.position.set(0, 12, 0);
  light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
  scene.add(light1);

  modelSettings();
}

function modelSettings() {
  const loader = new GLTFLoader().setPath('assets/3d/');
  loader.load('computer.gltf', function (gltf) {
    model = gltf.scene;
    scene.add(model);
    model.rotation.set(0, -1.7, 0);
    const newMaterial = new THREE.MeshLambertMaterial({ color: '#F00', emissive: '#0FF', emissiveIntensity: '25' });
    model.children[50].traverse((o) => {
      if (o.isMesh) o.material = newMaterial;
    });

    mixer = new THREE.AnimationMixer(model);
    const clips = gltf.animations;
    clips.forEach(function (clip) {
      const action = mixer.clipAction(clip);
      action.play();
    });

    animate();
  });
}

function animate() {
  mixer.update(clock.getDelta());

  //Model Rotation Animation
  const dampingFactor = 0.95;
  accumulatedRotation *= dampingFactor;
  if (model) {
    if (h1Traveled <= 1) {
      model.rotation.y += accumulatedRotation;
    }
  }

  //Model Scroll Animation
  modelStaticCopy = model.rotation.y;
  secondModelPos = Math.PI * -0.6;
  modelStatic = modelStaticCopy + (h1Traveled / 20) * (secondModelPos - modelStaticCopy);
  if (h1Traveled >= 0 && h1Traveled <= 20) {
    model.rotation.y = modelStatic;
  }


  //Responsive Path
  let cameraTrajectory;
  if (((90*h1) <= (37.5*w1)) && (window.innerWidth>window.innerHeight)) {
    cameraTrajectory = cameraTrajectory1;
  } if (((90*h1) >= (37.5*w1)) && (window.innerWidth>window.innerHeight)) {
    cameraTrajectory = cameraTrajectory2;
  } if ((window.innerWidth>= 480) && window.innerWidth<window.innerHeight) {
    cameraTrajectory = cameraTrajectory3;
  } if ((window.innerWidth<= 480) && window.innerWidth<window.innerHeight) {
    cameraTrajectory = cameraTrajectory4;
  }

  const trajectoryIndex = getTrajectoryIndex(h1Traveled, cameraTrajectory);
  const { position, rotation } = interpolateTrajectory(trajectoryIndex, h1Traveled, cameraTrajectory);

  camera.position.copy(position);
  camera.rotation.copy(rotation);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function getTrajectoryIndex(scrollValue, cameraTrajectory) {
  let accumulatedLength = 0;
  for (let i = 0; i < cameraTrajectory.length; i++) {
    accumulatedLength += cameraTrajectory[i].length;
    if (scrollValue <= accumulatedLength) {
      return i;
    }
  }
  return cameraTrajectory.length - 1;
}

function interpolateTrajectory(trajectoryIndex, scrollValue, cameraTrajectory) {
  const trajectory = cameraTrajectory[trajectoryIndex];
  const nextTrajectory = cameraTrajectory[trajectoryIndex + 1] || trajectory;
  const t = Math.min((scrollValue - getAccumulatedLength(trajectoryIndex, cameraTrajectory)) / trajectory.length, 1);

  const position = new THREE.Vector3().lerpVectors(trajectory.position, nextTrajectory.position, t);
  const rotation = interpolateEuler(trajectory.rotation, nextTrajectory.rotation, t);

  return { position, rotation };
}

function getAccumulatedLength(trajectoryIndex, cameraTrajectory) {
  let accumulatedLength = 0;
  for (let i = 0; i < trajectoryIndex; i++) {
    accumulatedLength += cameraTrajectory[i].length;
  }
  return accumulatedLength;
}

function interpolateEuler(euler1, euler2, t) {
  const x = euler1.x + (euler2.x - euler1.x) * t;
  const y = euler1.y + (euler2.y - euler1.y) * t;
  const z = euler1.z + (euler2.z - euler1.z) * t;
  return new THREE.Euler(x, y, z);
}

function onDocumentMouseMove(event) {
  if (typeof event.clientX !== 'undefined') {
    const deltaX = event.clientX - mouseX;
    mouseX = event.clientX;
    const rotationAngle = (deltaX / window.innerWidth) * Math.PI * -0.015;
    accumulatedRotation += rotationAngle;
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

window.addEventListener('scroll', () => {
  h1Traveled = scrollY / h1;
  if (h1Traveled > getTotalLength(cameraTrajectory1)) {
    h1Traveled = getTotalLength(cameraTrajectory1);
  }
  console.log(h1Traveled);
});

function getTotalLength(cameraTrajectory) {
  let totalLength = 0;
  for (let i = 0; i < cameraTrajectory.length; i++) {
    totalLength += cameraTrajectory[i].length;
  }
  return totalLength;
}