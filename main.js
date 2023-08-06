



let dot1, dotLimit, w, h, w1, h1, line8Height, line8, card1, card2, card3, h1Traveled, card1T, card2T, card3T, card1R, card2R, card3R, card1L, card2L, card3L, vid1, vid2, vid3, h1Text, h2Text, h3Text, g1Text, g2Text, g3Text;

dot1 = document.getElementById("dot1");
line8 = document.getElementById("line8");
card1 = document.getElementById("card1");
card2 = document.getElementById("card2");
card3 = document.getElementById("card3");
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

   

function setStyles(){
w = window.innerWidth;
w1 = w/100;
h = window.innerHeight;
h1 = h/100;
dotLimit = (90*h1);
line8Height = (h1*90)-(w1*23);

///////////////////////CSS MENU PORTAFOLIO/////////////////////////////
if ( ((90*h1) <= (37.5*w1)) && (window.innerWidth>window.innerHeight)){
   //DESKTOP ULTRAWIDE
   line8Height = (16*w1);
   dotLimit = (37*w1);
   card1T = (40*w1);
   card2T = (63*w1);
   card3T = (86*w1);
   vid1.style.width= "25vw";
   vid1.style.height= "37vh";
   vid1.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card1.style.paddingRight ="2%";
   card1.style.paddingTop ="6vh";
   vid2.style.width= "25vw";
   vid2.style.height= "37vh";
   vid2.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card2.style.paddingLeft ="2%";
   card2.style.paddingTop ="6vh";
   vid3.style.width= "25vw";
   vid3.style.height= "37vh";
   vid3.style.borderRadius= ".7vw .7vw .7vw .7vw";
   card3.style.paddingRight ="2%";
   card3.style.paddingTop ="6vh";
   h1Text.style.fontSize = "3vh";
   h2Text.style.fontSize = "3vh";
   h3Text.style.fontSize = "3vh";
   g1Text.style.fontSize = "2vh";
   g2Text.style.fontSize = "2vh";
   g3Text.style.fontSize = "2vh";
   h1Text.style.lineHeight = "1";
   h2Text.style.lineHeight = "1";
   h3Text.style.lineHeight = "1";
   g1Text.style.lineHeight = "1";
   g2Text.style.lineHeight = "1";
   g3Text.style.lineHeight = "1";
   letsWork.style.top = "120vw";
} if (((90*h1) >= (37.5*w1)) && (window.innerWidth>window.innerHeight)){
   //DESKTOP 
   line8Height = (h1*90)-(w1*21);
   dotLimit = (90.9*h1);
   card1T = (110*h1);
   card2T = (170*h1);
   card3T = (230*h1);
   vid1.style.width= "34vw";
   vid1.style.height= "36vh";
   vid2.style.width= "34vw";
   vid2.style.height= "36vh";
   vid3.style.width= "34vw";
   vid3.style.height= "36vh";
   h1Text.style.fontSize = "3vh";
   h2Text.style.fontSize = "3vh";
   h3Text.style.fontSize = "3vh";
   g1Text.style.fontSize = "1.7vh";
   g2Text.style.fontSize = "1.7vh";
   g3Text.style.fontSize = "1.7vh";
   h1Text.style.lineHeight = "1.5";
   h2Text.style.lineHeight = "1.5";
   h3Text.style.lineHeight = "1.5";
   g1Text.style.lineHeight = "1";
   g2Text.style.lineHeight = "1";
   g3Text.style.lineHeight = "1";
   letsWork.style.top = "320vh";
} if ((window.innerWidth>= 480) && window.innerWidth<window.innerHeight){
   //iPAD
   line8Height = (h1*93)-(w1*37);
   dotLimit = (92*h1);
   card1T = (110*h1);
   card2T = (195*h1);
   card3T = (280*h1);  
   card1.style.paddingRight ="2%";
   card1.style.paddingTop ="3vh";
   card2.style.paddingRight ="2%";
   card2.style.paddingTop ="3vh";
   card3.style.paddingRight ="2%";
   card3.style.paddingTop ="3vh";
   vid1.style.width= "50vw";
   vid1.style.height= "25vh";
   vid2.style.width= "50vw";
   vid2.style.height= "25vh";
   vid3.style.width= "50vw";
   vid3.style.height= "25vh";
   h1Text.style.fontSize = "3vh";
   h2Text.style.fontSize = "3vh";
   h3Text.style.fontSize = "3vh";
   g1Text.style.fontSize = "1.7vh";
   g2Text.style.fontSize = "1.7vh";
   g3Text.style.fontSize = "1.7vh";
   h1Text.style.lineHeight = "1";
   h2Text.style.lineHeight = "1";
   h3Text.style.lineHeight = "1";
   g1Text.style.lineHeight = "1";
   g2Text.style.lineHeight = "1";
   g3Text.style.lineHeight = "1";
   letsWork.style.top = "370vh";
} if ((window.innerWidth<= 480) && window.innerWidth<window.innerHeight){
   line8Height = (h1*93)-(w1*10);
   dotLimit = (92*h1);
   card1T = (105*h1);
   card2T = (197*h1);
   card3T = (289*h1);
   card1.style.paddingRight ="10%";
   card1.style.paddingTop ="4vh";
   card2.style.paddingRight ="10%";
   card2.style.paddingTop ="4vh";
   card3.style.paddingRight ="10%";
   card3.style.paddingTop ="4vh";
   vid1.style.width= "64vw";
   vid1.style.height= "25vh";
   vid2.style.width= "64vw";
   vid2.style.height= "25vh";
   vid3.style.width= "64vw";
   vid3.style.height= "25vh";
   h1Text.style.fontSize = "3vh";
   h2Text.style.fontSize = "3vh";
   h3Text.style.fontSize = "3vh";
   g1Text.style.fontSize = "1.7vh";
   g2Text.style.fontSize = "1.7vh";
   g3Text.style.fontSize = "1.7vh";
   h1Text.style.lineHeight = "1";
   h2Text.style.lineHeight = "1";
   h3Text.style.lineHeight = "1";
   g1Text.style.lineHeight = "1.4";
   g2Text.style.lineHeight = "1.4";
   g3Text.style.lineHeight = "1.4";
} 

line8.animate([{ height: 0 + "px"},{height: line8Height + "px"}],{
    duration: 1000,
    iterations: 1,
  }
);

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





window.addEventListener('scroll',(event) => {

   h1Traveled = scrollY/h1;

   if (((90*h1) <= (37.5*w1)) && (window.innerWidth>window.innerHeight)){
      if(scrollY >= 0 && h1Traveled <= 130){
         line8.style.height = line8Height + scrollY*1.625 + "px";
         dot1.style.top = dotLimit + scrollY*1.625 +"px";
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
