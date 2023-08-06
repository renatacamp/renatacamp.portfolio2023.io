import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoaderPath';
import { RGBELoader } from 'RGBELoaderPath';

let container, camera, scene, renderer, mesh, mixer, light1, model, modelStatic, secondModelPos, thirdModelPos, modelStaticCopy;

const clock = new THREE.Clock();
let mouseX = 0;
let accumulatedRotation = 0;
let h1Traveled = 0;
let h = window.innerHeight;
let h1 = h/100;

let initialX = 7.5;
let initialXCopy = 7.5;
let secondX = -7;
let secondXCopy = -7;
let secondXCopy2 = -7;
let thirdX = -7;

let initialY = 3.5;
let initialYCopy = 3.5;
let secondY = 5;
let secondYCopy = 5;
let secondYCopy2 = 5;
let thirdY = 7.5;

let initialZ = 9;
let initialZCopy = 9;
let secondZ = 8.5;
let secondZCopy = 9;
let secondZCopy2 = 9;
let secondZCopy3 = 9;
let thirdZ = 9;

let initialRotationXCopy = 0;
let initialRotationX = 0;
let secondRotationX = 0;
let secondRotationXCopy = 0;
let secondRotationXCopy2 = 0;
let thirdRotationX = 0;

let initialRotationYCopy = 0;
let initialRotationY = 0;
let secondRotationY = Math.PI *.4;
let secondRotationYCopy = Math.PI *.4;
let secondRotationYCopy2 = Math.PI *.4;
let thirdRotationY = Math.PI *.4;

let initialRotationZCopy = 0;
let initialRotationZ = 0;
let secondRotationZ = 0;
let secondRotationZCopy = 0;
let secondRotationZCopy2 = 0;
let thirdRotationZ = 0;

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
  camera.position.set(initialX, initialY, initialZ);

  scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
  scene.add(light);

  new RGBELoader()
    .setPath('assets/3d/')
    .load('studio.hdr', function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    });

    const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
    light1 = new THREE.PointLight( 0xff0040, 10, 50 );
    light1.position.set(0,12,0);
    light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
    scene.add( light1 ); 

  modelSettings();

  
}

function modelSettings() {
  const loader = new GLTFLoader().setPath('assets/3d/');
  loader.load('computer.gltf', function (gltf) {
    model = gltf.scene;
    scene.add(model);
    model.rotation.set(0,-1.7,0);
    const newMaterial = new THREE.MeshLambertMaterial({color: '#F00', emissive: '#0FF', emissiveIntensity :'25'});
   model.children[16].traverse((o) => {
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
    if (h1Traveled <=1) {
    model.rotation.y += accumulatedRotation;
   }
  }

  
  //Model Scroll Animation
  modelStaticCopy = model.rotation.y;
  secondModelPos = Math.PI * -.6;
  modelStatic = modelStaticCopy + (h1Traveled / 20) * (secondModelPos - modelStaticCopy);
  if (h1Traveled >=0 && h1Traveled <=20 ){
    model.rotation.y= modelStatic;
  }


  //Camera Scroll Animation
  initialZ = initialZCopy + (h1Traveled / 70) * (secondZ - initialZCopy);
  initialY = initialYCopy + (h1Traveled / 70) * (secondY - initialYCopy);
  initialX = initialXCopy + (h1Traveled / 70) * (secondX - initialXCopy);

  initialRotationX = initialRotationXCopy + (h1Traveled / 70) * (secondRotationX - initialRotationXCopy);
  initialRotationY = initialRotationYCopy + (h1Traveled / 70) * (secondRotationY - initialRotationYCopy);
  initialRotationZ = initialRotationZCopy + (h1Traveled / 70) * (secondRotationZ - initialRotationZCopy);

  if (h1Traveled >=0 && h1Traveled <=70 ){
    camera.position.set(initialX, initialY, initialZ);
    camera.rotation.set(initialRotationX, initialRotationY, initialRotationZ);
  }

  secondZCopy = secondZCopy2 + (h1Traveled / 70) * (thirdZ - secondZCopy2);
  secondYCopy = secondYCopy2 + (h1Traveled / 70) * (thirdY - secondYCopy2);
  secondXCopy = secondXCopy2 + (h1Traveled / 70) * (thirdX - secondXCopy2);

  secondRotationXCopy = secondRotationXCopy2 + (h1Traveled / 70) * (thirdRotationX - secondRotationXCopy2);
  secondRotationYCopy = secondRotationYCopy2 + (h1Traveled / 70) * (thirdRotationY - secondRotationYCopy2);
  secondRotationZCopy = secondRotationZCopy2 + (h1Traveled / 70) * (thirdRotationZ - secondRotationZCopy2);

  if (h1Traveled >=70 && h1Traveled <=150 ){
    camera.position.set(secondXCopy, secondYCopy, secondZCopy);
    camera.rotation.set(secondRotationXCopy, secondRotationYCopy, secondRotationZCopy);
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}



function onDocumentMouseMove(event) {
  if (typeof event.clientX !== 'undefined') {
    const deltaX = event.clientX - mouseX;
    mouseX = event.clientX;
    const rotationAngle = (deltaX / window.innerWidth) * Math.PI * -.015;
    accumulatedRotation += rotationAngle;
  }
}


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

window.addEventListener('scroll',(event) => {
  h1Traveled = scrollY/h1;
  console.log(h1Traveled);
});

if(h1Traveled >= 10 && h1Traveled <= 100 && (window.innerWidth>window.innerHeight)){
  card1.style.left = h1Traveled*3 - 100*3 +"px";
} if(h1Traveled >= 65 && h1Traveled <= 160 && (window.innerWidth>window.innerHeight)){
  card2.style.left = -h1Traveled*3 + 160*3 + (54*w1) +"px";
} if(h1Traveled >= 80 && h1Traveled <= 135 && (window.innerWidth>window.innerHeight)){
  card3.style.left = h1Traveled*3 - 135*3 +"px";
}


if(h1Traveled >= 10 && h1Traveled <= 65 && (window.innerWidth<window.innerHeight) && (window.innerWidth>= 480)){
  card1.style.left = -h1Traveled*3 + 65*3 + (26*w1) +"px";
} if(h1Traveled >= 45 && h1Traveled <= 100 && (window.innerWidth<window.innerHeight) && (window.innerWidth>= 480)){
  card2.style.left = -h1Traveled*3 + 100*3 + (26*w1) +"px";
} if(h1Traveled >= 80 && h1Traveled <= 135 && (window.innerWidth<window.innerHeight) && (window.innerWidth>= 480)){
  card3.style.left = -h1Traveled*3 + 135*3 + (26*w1) +"px";
}


if(h1Traveled >= 10 && h1Traveled <= 65 && (window.innerWidth<window.innerHeight) && (window.innerWidth<= 480)){
  card1.style.left = h1Traveled*3 - 65*3 +"px";
} if(h1Traveled >= 55 && h1Traveled <= 130 && (window.innerWidth<window.innerHeight) && (window.innerWidth<= 480)){
  card2.style.left = h1Traveled*3 - 130*3 +"px";
} if(h1Traveled >= 130 && h1Traveled <= 180 && (window.innerWidth<window.innerHeight) && (window.innerWidth<= 480)){
  card3.style.left = h1Traveled*3 - 180*3 +"px";
}