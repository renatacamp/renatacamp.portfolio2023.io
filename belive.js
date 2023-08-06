const carrusel = document.getElementById('carrusel');
const images = [
  {
    desktop: 'assets/images/beLive/carrusel1.png',
    mobile: 'assets/images/beLive/carrusel1Mobile.png'
  },
  {
    desktop: 'assets/images/beLive/carrusel2.png',
    mobile: 'assets/images/beLive/carrusel2Mobile.png'
  }
];
let currentIndex = 0;

function changeImage() {
  carrusel.style.opacity = 0;

  setTimeout(function() {
    var screenWidth = window.innerWidth;
    var imagePath = (screenWidth < 768) ? images[currentIndex].mobile : images[currentIndex].desktop;

    carrusel.src = imagePath;
    carrusel.style.opacity = 1;

    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }, 200);
}

setInterval(changeImage, 3000);


let carouselImages = ["brandbook", "brandbook2", "brandbook3", "brandbook4", "brandbook5", "brandbook6", "brandbook0"];
let currentImageIndex = 0;

function showImage(index) {
  let container = document.getElementById("BbContainer");
  let currentImage = document.getElementById(carouselImages[currentImageIndex]);
  let nextImage = document.getElementById(carouselImages[index]);

  currentImage.style.opacity = 0;
  nextImage.style.opacity = 1;

  currentImageIndex = index;
}

function prevImage() {
  let index = (currentImageIndex === 0) ? carouselImages.length - 1 : currentImageIndex - 1;
  showImage(index);
}

function nextImage() {
  let index = (currentImageIndex === carouselImages.length - 1) ? 0 : currentImageIndex + 1;
  showImage(index);
}

document.getElementById("prevButton").addEventListener("click", prevImage);
document.getElementById("nextButton").addEventListener("click", nextImage);

var bbimages = [
  { id: "brandbook", desktop: "assets/images/beLive/brandbook1.png", mobile: "assets/images/beLive/brandbook1Mobile.png" },
  { id: "brandbook2", desktop: "assets/images/beLive/brandbook2.png", mobile: "assets/images/beLive/brandbook2Mobile.png" },
  { id: "brandbook3", desktop: "assets/images/beLive/brandbook3.png", mobile: "assets/images/beLive/brandbook3Mobile.png" },
  { id: "brandbook4", desktop: "assets/images/beLive/brandbook4.png", mobile: "assets/images/beLive/brandbook4Mobile.png" },
  { id: "brandbook5", desktop: "assets/images/beLive/brandbook5.png", mobile: "assets/images/beLive/brandbook5Mobile.png" },
  { id: "brandbook6", desktop: "assets/images/beLive/brandbook6.png", mobile: "assets/images/beLive/brandbook6Mobile.png" },
  { id: "brandbook0", desktop: "assets/images/beLive/brandbook0.png", mobile: "assets/images/beLive/brandbook0Mobile.png" },
  { id: "brandbook0", desktop: "assets/images/beLive/brandbook0.png", mobile: "assets/images/beLive/brandbook0Mobile.png" },
  { id: "carrusel2", desktop: "assets/images/beLive/banners.jpg", mobile: "assets/images/beLive/bannersMobile.png" },
  { id: "laptop", desktop: "assets/images/beLive/laptop.png", mobile: "assets/images/beLive/laptopMobile.png" },
  { id: "papeleria", desktop: "assets/images/beLive/papeleria.png", mobile: "assets/images/beLive/papeleriaMobile.png" }
];

function setImageSources() {
  var screenWidth = window.innerWidth;

  bbimages.forEach(function(image) {
    var imgElement = document.getElementById(image.id);
    var imagePath = (screenWidth < 768) ? image.mobile : image.desktop;
    imgElement.src = imagePath;
  });
}

// Call the function on page load and when the window is resized
window.addEventListener("load", setImageSources);
window.addEventListener("resize", setImageSources);