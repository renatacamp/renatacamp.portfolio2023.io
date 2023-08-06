document.addEventListener("DOMContentLoaded", function() {
  // Read the language from the query parameter (if available)
  const urlParams = new URLSearchParams(window.location.search);
  const selectedLanguage = urlParams.get('lang');
  
  // Check for stored language in local storage
  var storedLanguage = localStorage.getItem("selectedLanguage");

  // Set the language based on the query parameter, stored value, or default to English ("en")
  var currentLanguage = selectedLanguage || storedLanguage || "en";
  setLanguage(currentLanguage);
});

function setLanguage(language) {
  // Set the document's language
  document.documentElement.lang = language;



/////////////////////////////////////////////////////////////////////
////////////////////////////ENGLISH//////////////////////////////////
/////////////////////////////////////////////////////////////////////
  if (language === "en") {

    var buttonContact = document.getElementById("buttonContact");
    if (buttonContact) {
      buttonContact.innerText = "Contact";
    }

    var buttonAbout = document.getElementById("buttonAbout");
    if (buttonAbout) {
      buttonAbout.innerText = "About Me";
    }

    var buttonPortfolio = document.getElementById("buttonPortfolio");
    if (buttonPortfolio) {
      buttonPortfolio.innerText = "Portfolio";
    }

    var info = document.getElementById("info");
    if (info) {
      info.innerText = "Through technology and design, creativity finds its perfect canvas in a digital world, with solutions: web design.";
    }

    var seeProyect1 = document.getElementById("seeProyect1");
    if (seeProyect1) {
      seeProyect1.innerText = "See \nProject";
    }

    var seeProyect2 = document.getElementById("seeProyect2");
    if (seeProyect2) {
      seeProyect2.innerText = "See \nProject";
    }

    var seeProyect3 = document.getElementById("seeProyect3");
    if (seeProyect3) {
      seeProyect3.innerText = "See \nProject";
    }

    var myG1 = document.getElementById("myG1");
    if (myG1) {
      myG1.innerText = "Brand Identity";
    }

    var myG2 = document.getElementById("myG2");
    if (myG2) {
      myG2.innerText = "3D Render - Brand Identity";
    }

    var myG3 = document.getElementById("myG3");
    if (myG3) {
      myG3.innerText = "Web Design and Development";
    }

    /////////////////////////////////////////////////////////////////////
    ////////////////////////////BELIVE///////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    var clientInfoTitle = document.getElementById("clientInfoTitle");
    if (clientInfoTitle) {
      clientInfoTitle.innerText = "Client";
    }

    var servicesInfoTitle = document.getElementById("servicesInfoTitle");
    if (servicesInfoTitle) {
      servicesInfoTitle.innerText = "Services Provided";
    }

    var servicesInfoInfo = document.getElementById("servicesInfoInfo");
    if (servicesInfoInfo) {
      servicesInfoInfo.innerText = "Visual Identity, Brandbook and Visualizations";
    }

    var dateInfoTitle = document.getElementById("dateInfoTitle");
    if (dateInfoTitle) {
      dateInfoTitle.innerText = "Date";
    }

    var overviewInfoInfo = document.getElementById("overviewInfoInfo");
    if (overviewInfoInfo) {
      overviewInfoInfo.innerText = "The Be+Live brand identity project visually represents their innovative and holistic approach to English language education, combining experiential learning activities for solid intellectual, social, and emotional foundations. The project created a vibrant visual identity, including logos, typography, colors, and imagery, showcasing Be+Live as a leading force in revolutionizing English language education.";
    }

    var buttonback = document.getElementById("buttonback");
    if (buttonback) {
      buttonback.innerText = "Home";
    }

    var introText = document.getElementById("introText");
    if (introText) {
      introText.innerText = "The Be+Live brand aimed for a visually captivating representation aligned with their core values and aspirations. The brand identity radiates optimism, joy, and a forward-thinking mindset through vibrant colors, dynamic typography, and engaging imagery, reflecting their commitment to empowering students and enhancing their educational experience.";
    }

    var introText3 = document.getElementById("introText3");
    if (introText3) {
     introText3.innerText = "The Brandbook is a comprehensive reference guide for graphic designers working with Be+Live's visual elements. It provides guidance for marketing, advertising, and editorial designers, as well as designers from partner schools. It outlines visual guidelines, ensuring consistency across all brand assets. Below, you'll find a selection of pages:";
    }
  } 
  
  
  
/////////////////////////////////////////////////////////////////////
////////////////////////////ESPANISH/////////////////////////////////
/////////////////////////////////////////////////////////////////////
  else if (language === "es") {
    var buttonContact = document.getElementById("buttonContact");
    if (buttonContact) {
      buttonContact.innerText = "Contacto";
    }

    var buttonAbout= document.getElementById("buttonAbout");
    if (buttonAbout) {
      buttonAbout.innerText = "Acerca de mí";
    }

    var info = document.getElementById("info");
    if (info) {
      info.innerText = "A través de la tecnología y el diseño, la creatividad encuentra su lienzo perfecto en un mundo digital, diseño web.";
    }

    var buttonPortfolio = document.getElementById("buttonPortfolio");
    if (buttonPortfolio) {
      buttonPortfolio.innerText = "Portafolio";
    }

    var seeProyect1 = document.getElementById("seeProyect1");
    if (seeProyect1) {
      seeProyect1.innerText = "Ver \nProyecto";
    }

    var seeProyect2 = document.getElementById("seeProyect2");
    if (seeProyect2) {
      seeProyect2.innerText = "Ver \nProyecto";
    }

    var seeProyect3 = document.getElementById("seeProyect3");
    if (seeProyect3) {
      seeProyect3.innerText = "Ver \nProyecto";
    }

    var myG1 = document.getElementById("myG1");
    if (myG1) {
      myG1.innerText = "Identidad de marca";
    }

    var myG2 = document.getElementById("myG2");
    if (myG2) {
      myG2.innerText = "3D Render - Identidad de marca";
    }

    var myG3 = document.getElementById("myG3");
    if (myG3) {
      myG3.innerText = "Diseño y desarrollo web";
    }


    /////////////////////////////////////////////////////////////////////
    ////////////////////////////BELIVE///////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    var clientInfoTitle = document.getElementById("clientInfoTitle");
    if (clientInfoTitle) {
      clientInfoTitle.innerText = "Cliente";
    }

    var servicesInfoTitle = document.getElementById("servicesInfoTitle");
    if (servicesInfoTitle) {
      servicesInfoTitle.innerText = "Servicios proporcionados";
    }

    var servicesInfoInfo = document.getElementById("servicesInfoInfo");
    if (servicesInfoInfo) {
      servicesInfoInfo.innerText = "Identidad visual, brandbook and visualizaciones";
    }

    var dateInfoTitle = document.getElementById("dateInfoTitle");
    if (dateInfoTitle) {
      dateInfoTitle.innerText = "Fecha";
    }

    var overviewInfoInfo = document.getElementById("overviewInfoInfo");
    if (overviewInfoInfo) {
      overviewInfoInfo.innerText = "El proyecto para Be+Live representa visualmente su enfoque innovador y holístico de la educación del idioma inglés, combinando actividades de aprendizaje experiencial para una sólida base intelectual, social y emocional. Se creó una identidad visual vibrante, que incluye logotipos, tipografía, colores e imágenes, mostrando a Be+Live como una fuerza líder en la revolución de la educación.";
    }

    var buttonBack = document.getElementById("buttonback");
    if (buttonBack) {
      buttonBack.innerText = "Regresar";
    }

    var introText = document.getElementById("introText");
    if (introText) {
      introText.innerText = "La marca Be+Live buscaba una representación cautivadora, alineada con sus valores y aspiraciones fundamentales. La identidad irradia optimismo, alegría y una mentalidad con visión hacia el futuro. Esto se logro a través de colores vibrantes, una tipografía dinámica e imágenes atractivas, que reflejan su compromiso de empoderar a los estudiantes y mejorar su experiencia educativa.";
    }

    var introText3 = document.getElementById("introText3");
    if (introText3) {
      introText3.innerText = "Es una guía de referencia para los diseñadores gráficos que trabajan con los elementos visuales de Be+Live. Brinda orientación para áreas de marketing y editorial, así como para las escuelas asociadas. Describe pautas que garantizan la coherencia en todos los activos de la marca. A continuación, se presenta una selección de páginas:";
    }
  }
}