



let dot1, dotLimit, w, h, w1, h1, line8Height, line8, card1, card2, card3, h1Traveled, card1T, card2T, card3T, card1R, card2R, card3R, card1L, card2L, card3L, vid1, vid2, vid3, h1Text, h2Text, h3Text, g1Text, g2Text, g3Text, canvasLimit, portfolioMargin;

dot1 = document.getElementById("dot1");
line8 = document.getElementById("line8");
card1 = document.getElementById("card1");
card2 = document.getElementById("card2");
card3 = document.getElementById("card3");
lineC1 = document.getElementById("lineC1");
seeProyect1 = document.getElementById("seeProyect1");
lineC2 = document.getElementById("lineC2");
seeProyect2 = document.getElementById("seeProyect2");
vid1 = document.getElementById("vid1");
vid2 = document.getElementById("vid2");
vid3 = document.getElementById("vid3");
h1Text = document.getElementById("myH1");
h2Text = document.getElementById("myH2");
h3Text = document.getElementById("myH3");
g1Text = document.getElementById("myG1");
g2Text = document.getElementById("myG2");
g3Text = document.getElementById("myG3");
letsWork = document.getElementById("letsWork");
footer = document.getElementById("footer");

   
function setStyles(){
w = window.innerWidth;
w1 = w/100;
h = window.innerHeight;
h1 = h/100;
dotLimit = (90*h1);
line8Height = (h1*90)-(w1*23);


///////////////////////////////////////////////////////////////////////
///////////////////////CSS MENU PORTAFOLIO/////////////////////////////
///////////////////////////////////////////////////////////////////////


if ( ((90*h1) <= (37.5*w1)) && (window.innerWidth>window.innerHeight)){


   //DESKTOP ULTRAWIDE
   line8Height = (18*w1);
   dotLimit = (38*w1);
   card1T = (42*w1);
   card2T = (65*w1);
   card3T = (88*w1);
   portfolioMargin = (36*w1);
   canvasLimit = (80*w1);
   vid1.style.width= "25vw";
   vid1.style.height= "37vh";
   vid1.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card1.style.paddingRight ="4vh";
   card1.style.marginLeft ="20vw";
   card1.style.paddingTop ="4vh";
   card1.style.width ="26.5vw";
   card1.style.borderRadius= "2vw 2vw 2vw 2vw";
   lineC1.style.width="25vw";
   lineC1.style.marginLeft="4vh";
   seeProyect1.style.marginLeft="4vh";
   vid2.style.width= "25vw";
   vid2.style.height= "37vh";
   vid2.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card2.style.paddingLeft ="4vh";
   card2.style.paddingTop ="4vh";
   card2.style.width ="26.5vw";
   card2.style.borderRadius= "2vw 2vw 2vw 2vw";
   card2.style.marginRight ="20vw";
   lineC2.style.width="25vw";
   lineC2.style.marginLeft="0vw";
   seeProyect2.style.marginLeft="16vw";
   vid3.style.width= "25vw";
   vid3.style.height= "37vh";
   vid3.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card3.style.paddingRight ="4vh";
   card3.style.marginLeft ="20vw";
   card3.style.paddingTop ="4vh";
   card3.style.width ="26.5vw";
   card3.style.borderRadius= "2vw 2vw 2vw 2vw";
   lineC3.style.width="25vw";
   lineC3.style.marginLeft="4vh";
   seeProyect3.style.marginLeft="4vh";
   h1Text.style.fontSize = "3vh";
   h2Text.style.fontSize = "3vh";
   h3Text.style.fontSize = "3vh";
   g1Text.style.fontSize = "1.6vh";
   g2Text.style.fontSize = "1.6vh";
   g3Text.style.fontSize = "1.6vh";
   h1Text.style.lineHeight = "1.1";
   h2Text.style.lineHeight = "1.1";
   h3Text.style.lineHeight = "1.1";
   g1Text.style.lineHeight = "1.5";
   g2Text.style.lineHeight = "1.5";
   g3Text.style.lineHeight = "1.5";
   letsWork.style.top = "125vw";
   footer.style.top = "125vw";


} if (((90*h1) >= (37.5*w1)) && (window.innerWidth>window.innerHeight)){


   //DESKTOP 
   line8Height = (h1*87)-(w1*20);
   dotLimit = (h1*87.5);
   card1T = (110*h1);
   card2T = (170*h1);
   card3T = (230*h1);
   portfolioMargin = (100*h1);
   canvasLimit = (218*h1);
   vid1.style.width= "34vw";
   vid1.style.height= "36vh";
   vid1.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card1.style.marginLeft ="0";
   card1.style.paddingRight ="5vh";
   card1.style.paddingTop ="5vh";
   card1.style.width ="44%";
   card1.style.borderRadius= "0vw 2vw 2vw 0vw";
   lineC1.style.width="33.9vw";
   lineC1.style.marginLeft="9.5vw";
   seeProyect1.style.marginLeft="9.5vw";
   vid2.style.width= "34vw";
   vid2.style.height= "36vh";
   vid1.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card2.style.paddingLeft ="5vh";
   card2.style.paddingTop ="5vh";
   card2.style.width ="44%";
   card2.style.borderRadius= "2vw 0vw 0vw 2vw";
   card2.style.marginRight ="0";
   lineC2.style.width="33.9vw";
   lineC2.style.marginLeft="0vw";
   seeProyect2.style.marginLeft="25vw";
   vid3.style.width= "34vw";
   vid3.style.height= "36vh";
   card3.style.marginLeft ="0";
   card3.style.paddingRight ="5vh";
   card3.style.paddingTop ="5vh";
   card3.style.width ="44%";
   card3.style.borderRadius= "0vw 2vw 2vw 0vw";
   lineC3.style.width="33.9vw";
   lineC3.style.marginLeft="9.5vw";
   seeProyect3.style.marginLeft="9.5vw";
   h1Text.style.fontSize = "3.5vh";
   h2Text.style.fontSize = "3.5vh";
   h3Text.style.fontSize = "3.5vh";
   g1Text.style.fontSize = "1.7vh";
   g2Text.style.fontSize = "1.7vh";
   g3Text.style.fontSize = "1.7vh";
   h1Text.style.lineHeight = ".9";
   h2Text.style.lineHeight = ".9";
   h3Text.style.lineHeight = ".9";
   g1Text.style.lineHeight = "1.8";
   g2Text.style.lineHeight = "1.8";
   g3Text.style.lineHeight = "1.8";
   letsWork.style.top = "330vh";
   footer.style.top = "340vh";


} if ((window.innerWidth>= 480) && window.innerWidth<window.innerHeight){


   //iPAD
   line8Height = (h1*94)-(w1*37);
   dotLimit = (92*h1);
   card1T = (110*h1);
   card2T = (195*h1);
   card3T = (280*h1);
   portfolioMargin = (103*h1);
   canvasLimit = (230*h1);
   card1.style.paddingRight ="2%";
   card1.style.paddingTop ="1vh";
   card1.style.borderRadius= "4vw 0vw 0vw 4vw";
   card1.style.width= "70%";
   lineC1.style.width="65.5vw";
   lineC1.style.marginLeft="1vw";
   seeProyect1.style.marginLeft="50vw";
   card2.style.paddingRight ="2%";
   card2.style.paddingTop ="1vh";
   card2.style.borderRadius= "4vw 0vw 0vw 4vw";
   card2.style.borderRadius= "4vw 0vw 0vw 4vw";
   card2.style.width= "68%";
   lineC2.style.width="65.5vw";
   lineC2.style.marginLeft="1vw";
   seeProyect2.style.marginLeft="50vw";
   card3.style.paddingRight ="2%";
   card3.style.paddingTop ="1vh";
   card3.style.borderRadius= "4vw 0vw 0vw 4vw";
   card3.style.borderRadius= "4vw 0vw 0vw 4vw";
   card3.style.width= "70%";
   lineC3.style.width="65.5vw";
   lineC3.style.marginLeft="1vw";
   seeProyect3.style.marginLeft="50vw";
   vid1.style.width= "67vw";
   vid1.style.height= "28vh";
   vid1.style.borderRadius= "3.5vw 3.5vw 3.5vw 3.5vw";
   vid2.style.width= "67vw";
   vid2.style.height= "28vh";
   vid3.style.width= "67vw";
   vid3.style.height= "28vh";
   h1Text.style.fontSize = "2.7vh";
   h2Text.style.fontSize = "2.7vh";
   h3Text.style.fontSize = "2.7vh";
   g1Text.style.fontSize = "1.7vh";
   g2Text.style.fontSize = "1.7vh";
   g3Text.style.fontSize = "1.7vh";
   h1Text.style.lineHeight = "1.2";
   h2Text.style.lineHeight = "1.2";
   h3Text.style.lineHeight = "1.2";
   g1Text.style.lineHeight = ".9";
   g2Text.style.lineHeight = ".9";
   g3Text.style.lineHeight = ".9";
   letsWork.style.top = "396vh";
   footer.style.top = "346vh";


} if ((window.innerWidth<= 480) && window.innerWidth<window.innerHeight){


   //MOBILE
   line8Height = (h1*93)-(w1*10);
   dotLimit = (92*h1);
   card1T = (105*h1);
   card2T = (197*h1);
   card3T = (289*h1);
   portfolioMargin = (105*h1);
   canvasLimit = (240*h1);
   card1.style.paddingRight ="1vh";
   card1.style.paddingTop ="1vh";
   lineC1.style.width="81vw";
   lineC1.style.marginLeft=".5vw";
   seeProyect1.style.marginLeft=".1vw";
   card2.style.paddingRight ="1vh";
   card2.style.paddingTop ="1vh";
   lineC2.style.width="81vw";
   lineC2.style.marginLeft=".5vw";
   seeProyect2.style.marginLeft=".1vw";
   card3.style.paddingRight ="1vh";
   card3.style.paddingTop ="1vh";
   lineC3.style.width="81vw";
   lineC3.style.marginLeft=".5vw";
   seeProyect3.style.marginLeft=".1vw";
   vid1.style.width= "84vw";
   vid1.style.height= "32vh";
   vid2.style.width= "84vw";
   vid2.style.height= "32vh";
   vid3.style.width= "84vw";
   vid3.style.height= "32vh";
   h1Text.style.fontSize = "5.5vw";
   h2Text.style.fontSize = "5.5vw";
   h3Text.style.fontSize = "5.5vw";
   g1Text.style.fontSize = "3.3vw";
   g2Text.style.fontSize = "3.3vw";
   g3Text.style.fontSize = "3.3vw";
   h1Text.style.lineHeight = "1";
   h2Text.style.lineHeight = "1";
   h3Text.style.lineHeight = "1";
   g1Text.style.lineHeight = "1.5";
   g2Text.style.lineHeight = "1.5";
   g3Text.style.lineHeight = "1.5";
   letsWork.style.top = "430vh";
   footer.style.top = "430vh";
} 

line8.style.height = line8Height +"px";
dot1.style.top = dotLimit+"px";
card1.style.top = card1T+"px";
card2.style.top = card2T+"px";
card3.style.top = card3T+"px";
}

setStyles();

window.onresize = function(event) {
   setStyles();
} 














///////////////////////////////////////////////////////////////////////
////////////////////Scroll Responsive Elements/////////////////////////
///////////////////////////////////////////////////////////////////////


window.addEventListener('scroll',(event) => {

   h1Traveled = scrollY/h1;

   if (((90*h1) <= (37.5*w1)) && (window.innerWidth>window.innerHeight)){
      if(scrollY >= 0 && h1Traveled <= 130){
         line8.style.height = line8Height + scrollY*1.45 + "px";
         dot1.style.top = dotLimit + scrollY*1.45 +"px";
      } 
   } if (((90*h1) >= (37.5*w1)) && (window.innerWidth>window.innerHeight)){
      if(scrollY >= 0 && h1Traveled <= 130){
         line8.style.height = line8Height + scrollY*1.6 + "px";
         dot1.style.top = dotLimit + scrollY*1.6 +"px";
      } 
   } if ((window.innerWidth>= 480) && window.innerWidth<window.innerHeight){
      if(scrollY >= 0 && h1Traveled <= 130){
         line8.style.height = line8Height + scrollY*1.8 + "px";
         dot1.style.top = dotLimit + scrollY*1.8 +"px";
      } 
   } if ((window.innerWidth<= 480) && window.innerWidth<window.innerHeight){
      if(scrollY >= 0 && h1Traveled <= 185){
         line8.style.height = line8Height + scrollY*1.575 + "px";
         dot1.style.top = dotLimit + scrollY*1.575 +"px";
      } 
   } 

});













////////////////////////////////////////////////////////////////////
/////////////////////////PORTFOLIO BUTTON///////////////////////////
////////////////////////////////////////////////////////////////////
document.getElementById("buttonPortfolio").addEventListener("click", function() {
    var targetElement = document.getElementById("card1");
    var scrollToPosition = portfolioMargin;

    window.scrollBy({ top: scrollToPosition, behavior: "smooth" });
});

  const container = document.getElementById('canvas');
  let isFixed = true;

  function updateContainerPosition() {
    const scrollY = window.scrollY || window.scrollY;
    
    if (scrollY > canvasLimit && isFixed) {
      const containerRect = container.getBoundingClientRect();
      container.style.position = 'absolute';
      container.style.top = `${scrollY}px`;
      container.style.left = `${containerRect.left}px`;
      container.style.transform = 'none';
      isFixed = false;
    } else if (scrollY <= canvasLimit && !isFixed) {
      container.style.position = 'fixed';
      container.style.top = '0'; 
      container.style.left = '50%'; 
      container.style.transform = 'translateX(-50%)';
      isFixed = true;
    }
  }

  window.addEventListener('scroll', updateContainerPosition);













////////////////////////////////////////////////////////////////////
///////////////////////////LOTTIE FOTTER////////////////////////////
////////////////////////////////////////////////////////////////////

  function loadLottieAnimation() {
    const container = document.getElementById("footer");
    let path;

    if (window.innerHeight > window.innerWidth) {
      path = "lotties/footerMobile.json";
    } else {
      path = "lotties/footerDesktop.json";
    }

    let animation = bodymovin.loadAnimation({ 
      container: container,
      path: path,
      render: "svg",
      loop: true,
      autoplay: true
    });
    animation.setSpeed(2);
  }
  loadLottieAnimation();
  window.addEventListener("resize", loadLottieAnimation);






////////////////////////////////////////////////////////////////////
///////////////////////////LOTTIE TRANSITION////////////////////////
////////////////////////////////////////////////////////////////////
  let animation;
  function initializeAnimation() {
      animation = bodymovin.loadAnimation({ 
      container: document.getElementById("transitions"),
      path: "lotties/transitions.json",
      renderer: "svg", 
      loop: false,
      autoplay: false 
    });
  }


let transitionsWindow =document.getElementById("transitions");
let transitionsContainer =document.getElementById("transitionContainer");

function resizeLottie() {
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    const lottieAspectRatio = 1920 / 1080;

    if (windowAspectRatio < lottieAspectRatio) {
      transitionsContainer.style.width = ((window.innerHeight/1080)*(1920))+"px";
      console.log("v");
    } else {
     transitionsContainer.style.width = '100vw';
     console.log("h");
    }
  }

  resizeLottie();
  window.addEventListener('resize', resizeLottie);

    function playAnimation() {
    transitionsContainer.style.zIndex = "100000000";
    animation.play();
  }

  const playButton = document.getElementById("contactar");
  playButton.addEventListener("click", playAnimation);
  const BLButton = document.getElementById("card1");
  BLButton.addEventListener("click", playAnimation);

  initializeAnimation();

function delayedPageChange(url) {
  setTimeout(function() {
    window.location.href = url;
  }, 2000);
}







////////////////////////////////////////////////////////////////////
////////////////////////////////LOADER//////////////////////////////
////////////////////////////////////////////////////////////////////

function scrollToTop() {
window.scrollTo({top: 0,});
}

window.addEventListener('load', () => {
  const container = document.getElementById("loaderAnim");
  let animation = bodymovin.loadAnimation({ 
    container: container,
    path: "lotties/loader.json",
    render: "svg",
    loop: true,
    autoplay: true
  });
  animation.setSpeed(1);

  const loader = document.getElementById('loader');
  let progress = 0;
  const totalLineElements = 9;

   window.scrollTo(0, 0);

  function animateLine(lineElement, animationClass) {
    lineElement.classList.remove(animationClass);
    void lineElement.offsetWidth;
    lineElement.classList.add(animationClass);
  }

  function shouldSkipLine(lineNumber) {
    return lineNumber === 8;
  }

  function hideLoader() {
    loader.classList.add('loader-fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 200); // Set the delay to match the transition duration (0.5s)
  }

  function updateLoader(lineNumber) {
    if(progress >= 1) {
      scrollToTop();
    }

    if (progress >= 100) {
      document.body.classList.remove('loader-active');
      scrollToTop();

      for (let i = 1; i <= totalLineElements; i++) {
        if (!shouldSkipLine(i)) {
          const lineElement = document.getElementById(`line${i}`);
          animateLine(lineElement, `animate${i}`);
        }
      }

      line8.animate([{ height: 0 + "px" }, { height: line8Height + "px" }], {
        duration: 1000,
        iterations: 1,
      });

      hideLoader();

    } else {
      progress += 1;
      document.getElementById('loading-text').innerText = `${progress}%`;
      setTimeout(updateLoader, 50);
    }
  }

  updateLoader();
});





