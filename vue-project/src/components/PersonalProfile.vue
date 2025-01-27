<template>
    <head>
      <title>My Personal Website</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="css/styles.css?version=0.3">
      <link rel="stylesheet" href="css/image.css?version=0.3">
      <link rel="stylesheet" href="css/survey.css?version=0.2">
      <link rel="stylesheet" href="css/modal.css?version=0.4">
    </head>
  
    <body class="w3-black">
      <!-- Sidebar -->
      <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" id="sidebar">
        <a href="#" class="w3-bar-item w3-button w3-padding-large">
          <i class="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </a>
        <a href="#about" class="w3-bar-item w3-button w3-padding-large">
          <i class="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </a>
        <a href="#it" class="w3-bar-item w3-button w3-padding-large">
          <i class="fa fa-wrench fa-3x"></i>
          <p>IT SKILLS</p>
        </a>
        <a href="#goals" class="w3-bar-item w3-button w3-padding-large">
          <i class="fa fa-trophy fa-4x"></i>
          <p>GOALS</p>
        </a>
        <a href="#photos" class="w3-bar-item w3-button w3-padding-large">
          <i class="fa fa-camera-retro fa-3x"></i>
          <p>HOBBIES</p>
        </a>
        <a href="#art" class="w3-bar-item w3-button w3-padding-large">
          <i class="fa fa-paint-brush fa-3x"></i>
          <p>ARTWORKS</p>
        </a>
        <a href="#contact" class="w3-bar-item w3-button w3-padding-large">
          <i class="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </a>
      </nav>
  
      <!-- Navbar for Small Screens -->
      <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar" style="background-color: #130302;"> 
        <div class="w3-bar w3-hover-opacity-off w3-center w3-small">
          <a href="#" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">HOME</a>
          <a href="#about" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">ABOUT</a>
          <a href="#art" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">GALLERY</a>
          <a href="#contact" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">CONTACT</a>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="w3-padding-large" id="main">
        <!-- Header -->
        <header class="w3-container w3-padding-32 w3-center" id="home" style="background-color: #22121b;">
          <h1 class="w3-jumbo" style="font-size: 80px;">
            <span class="w3-hide-small">Hej! I'm</span> Shandrae Quianzon
          </h1>
          <img id="img1" src="https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/yearbook-cropped.jpg?raw=true" alt="Profile Pic" width="300" height="300">
          <p>Welcome to my first website!</p>
          <p>Oh and in case I don't see ya, good afternoon, good evening, and good night! - Truman Burbank, The Truman Show</p>
        </header>
  
        <!-- About Section -->
        <div class="w3-content w3-center w3-text-white w3-padding-64" id="about">
          <h2 class="w3-text-light-grey">About Me</h2>
          <hr style="width:200px" class="center-line">
          <p>I'm a Dinophile and Ailurophile! (Someone who loves dinosaurs and cats)</p>
          <p>As someone who enjoys quiet environments, I love seeing the wonders of nature and would spend time learning about them during my free time by reading or showing my appreciation of them through drawing.</p>
  
          <!-- Education Section -->
          <h3 class="w3-padding-16 w3-text-light-grey">Education</h3>
          <div class="flex-container">
            <!-- Schools -->
            <div class="flex-box">
              <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                <li class="custom-color w3-xlarge w3-padding-32 w3-text-light-grey">Schools</li>
                <li class="w3-padding-16">Victory Elijah Christian College (2018-2021)</li>
                <li class="w3-padding-16">Ignacio Villamor Senior High School (2021-2023)</li>
                <li class="w3-padding-16">Asia Pacific College (2023-2027)</li>
              </ul>
            </div>
            <!-- Achievements -->
            <div class="flex-box">
              <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                <li class="custom-color2 w3-xlarge w3-padding-32 w3-text-light-grey">Achievements</li>
                <li class="w3-padding-16">Elementary: 1st Place Mask-Making Contestant</li>
                <li class="w3-padding-16">Senior High School: With High Honors (Grade 11 & 12)</li>
                <li class="w3-padding-16">College: Honor Student (1st Year)</li>
              </ul>
            </div>
            <!-- Course -->
            <div class="flex-box">
              <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                <li class="custom-color3 w3-xlarge w3-padding-32 w3-text-light-grey">Course</li>
                <li class="w3-padding-16">Technical-Vocational Livelihood (TVL) Information and Communications Technology (ICT)</li>
                <li class="w3-padding-16">Bachelor of Computer Science with Specialization in Cybersecurity and Forensics</li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- IT Skills Section -->
        <div class="w3-content w3-center w3-text-white" id="it">
          <h2 class="w3-padding-16 w3-center w3-text-light-grey">IT Experience</h2>
          <hr style="width:200px" class="center-line">
          <p class="w3-wide">Network Configuration</p>
          <div class="w3-white">
            <div class="custom-color7" style="height:28px;width:66%"></div>
          </div>
          <p class="w3-wide">Coding</p>
          <div class="w3-white">
            <div class="custom-color7" style="height:28px;width:56%"></div>
          </div>
          <p class="w3-wide">Digital Art</p>
          <div class="w3-white">
            <div class="custom-color7" style="height:28px;width:94%"></div>
          </div>
  
          <!-- IT Skills Grid -->
          <div class="flex-container">
            <!-- Software -->
            <div class="flex-box">
              <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                <li class="custom-color4 w3-xlarge w3-padding-32 w3-text-light-grey">Software</li>
                <li class="w3-padding-16">Windows 7 and 10 Operating System Installation</li>
                <li class="w3-padding-16">Windows Server 2012 r2 Configuration</li>
                <li class="w3-padding-16">Ubuntu Linux Installation</li>
              </ul>
            </div>
            <!-- Hardware -->
            <div class="flex-box">
              <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                <li class="custom-color5 w3-xlarge w3-padding-32 w3-text-light-grey">Hardware</li>
                <li class="w3-padding-16">Setting up Computer Networks & Servers</li>
                <li class="w3-padding-16">Assembling/Disassembling Computer Systems</li>
                <li class="w3-padding-16">Patch Panel Networking</li>
              </ul>
            </div>
            <!-- Applications -->
            <div class="flex-box">
              <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                <li class="custom-color6 w3-xlarge w3-padding-32 w3-text-light-grey">Applications</li>
                <li class="w3-padding-16">Basic Python, Java, HTML, MySQL</li>
                <li class="w3-padding-16">Microsoft 365, Visual Studio Code, Oracle VirtualBox</li>
                <li class="w3-padding-16">Figma, Canva, Ibis Paint X, Medibang, FireAlpaca</li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Add additional sections here with similar organization -->
      </div>
  
      <!-- Footer -->
      <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
        <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
        <p class="w3-medium">Thank you for visiting my first website. If you see this message, here's a free cookie 🍪 </p>
      </footer>
    </body>
  </template>


<script>

// Goals introduction data
const goalsIntro = {
  heading: "Goals in Life/Dreams",
  paragraph1:
    "An international volunteer and one of Jehovah's Witnesses, sharing Bible-based advice and God's promises for a future free of suffering, sickness, and even death.",
  paragraph2:
    "My love for God, Jehovah, and for people motivates me to spread this hope alongside fellow volunteers from over 240 lands.",
};

// Preaching gallery data
const preachingGallery = [
  {
    src: "https://cms-imgp.jw-cdn.org/img/p/2019361/univ/art/2019361_univ_cnt_2_xl.jpg",
    alt: "Preaching the Good News",
    description: "Sharing Good News From the Bible",
  },
  {
    src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/animations.gif?raw=true",
    alt: "Animation demos",
    description: "Aspiring 2D professional artist/animator",
  },
];

// Function to render goals introduction
function renderGoalsIntro(containerId, intro) {
  const container = document.getElementById(containerId);

  if (!container) return console.error(`Container with ID ${containerId} not found.`);

  container.innerHTML = `
    <h2 class="w3-padding-16 w3-center w3-text-light-grey">${intro.heading}</h2>
    <hr style="width:200px" class="center-line">
    <p class="w3-center">${intro.paragraph1}</p>
    <p class="w3-center">${intro.paragraph2}</p>
  `;
}

// Function to render a gallery
function renderGallery(containerId, galleryItems) {
  const container = document.getElementById(containerId);

  if (!container) return console.error(`Container with ID ${containerId} not found.`);

  container.className = "preaching-jw"; // Apply the class for the flex layout
  container.innerHTML = ""; // Clear existing content

  galleryItems.forEach((item) => {
    const galleryDiv = document.createElement("div");
    galleryDiv.className = "preaching";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.style.width = "100%";
    img.style.height = "auto";
    img.className = "clickable"; // Add the clickable class for modal functionality

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = item.description;

    galleryDiv.appendChild(img);
    galleryDiv.appendChild(desc);

    container.appendChild(galleryDiv);
  });

  // Initialize modal functionality for the images
  initializeModal();
}

// Function to initialize modal functionality
function initializeModal() {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("image-caption");
  const closeModal = document.getElementById("close-modal");

  const images = document.querySelectorAll(".clickable");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      modalCaption.textContent = this.alt;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Render goals introduction and galleries
renderGoalsIntro("goals-intro", goalsIntro);
renderGallery("preaching-gallery", preachingGallery);

// Render gallery function
// Render gallery function
function renderGallery(containerId, galleryItems) {
  const container = document.getElementById(containerId);

  if (!container) return console.error(`Container with ID ${containerId} not found.`);

  container.innerHTML = ""; // Clear existing content

  galleryItems.forEach((item) => {
    const galleryDiv = document.createElement("div");
    galleryDiv.className = "gallery";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.style.width = "320px";
    img.style.height = "280px";
    img.dataset.link = item.link;
    img.dataset.description = item.description;

    // Add CSS style for hover pointer
    img.style.cursor = "pointer";

    // Add click event to open the modal
    img.addEventListener("click", () => openModal(img));

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.innerText = item.description;

    galleryDiv.appendChild(img);
    galleryDiv.appendChild(desc);
    container.appendChild(galleryDiv);
  });
}

// Modal functionality
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("image-caption");
const closeModal = document.getElementById("close-modal");

// Function to open the modal
function openModal(imageElement) {
  modal.style.display = "block";
  modalImage.src = imageElement.dataset.link || imageElement.src;
  modalCaption.textContent = imageElement.dataset.description || "";
}

// Close modal on click
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on outside click
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// Sample gallery data
const hobbiesGallery = [
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/digital%20drawing.png?raw=true",
            alt: "Digital Drawing",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/digital%20drawing.png?raw=true",
            description: "Digital Drawing",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/gahoole.jpg?raw=true",
            alt: "Reading Novels",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/gahoole.jpg?raw=true",
            description: "Reading Novels",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/doors%20figure.png?raw=true",
            alt: "Video Games",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/doors%20figure.png?raw=true",
            description: "Video Games",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/cat.png?raw=true",
            alt: "Cats",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/cat.png?raw=true",
            description: "Cats",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/dinosaurs.png?raw=true",
            alt: "Dinosaurs",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/dinosaurs.png?raw=true",
            description: "Dinosaurs",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/nature.png?raw=true",
            alt: "Nature",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/nature.png?raw=true",
            description: "Nature",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/godzilla.jpg?raw=true",
            alt: "Watching Movies/Shows",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/godzilla.jpg?raw=true",
            description: "Watching Sci-Fi Movies/Shows",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/ukulele.png?raw=true",
            alt: "Playing/Listening to Music",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/ukulele.png?raw=true",
            description: "Playing/Listening to Music",
          },
  // Add your hobbies gallery items here
];

const artGallery = [
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Stray.png?raw=true",
            alt: "Cat and B12",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Stray.png?raw=true",
            description: "Stray Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/A%20Quiet%20Place%20fanart%20.png?raw=true",
            alt: "A Quiet Place Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/A%20Quiet%20Place%20fanart%20.png?raw=true",
            description: "A Quiet Place Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/BB-8%20and%20D-0%20-%20Art%20Activity.png?raw=true",
            alt: "BB8 & D-0",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/BB-8%20and%20D-0%20-%20Art%20Activity.png?raw=true",
            description: "BB8 & D-0",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/The%20Eagle%20and%20the%20Turtle.png?raw=true",
            alt: "The Eagle and Turtle",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/The%20Eagle%20and%20the%20Turtle.png?raw=true",
            description: "The Eagle and Turtle",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/JWD%20Blue%20&%20Beta.png?raw=true",
            alt: "Blue & Beta from Jurassic World",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/JWD%20Blue%20&%20Beta.png?raw=true",
            description: "Blue & Beta from Jurassic World",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/anniversary%20gift.png?raw=true",
            alt: "19th Anniversary Gift for Parents",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/anniversary%20gift.png?raw=true",
            description: "19th Anniversary Gift for Parents",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Pure%20Vessel.png?raw=true",
            alt: "Hollow Knight Pure Vessel Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Pure%20Vessel.png?raw=true",
            description: "Hollow Knight Pure Vessel Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/HK%20OC%20-%20Vale.png?raw=true",
            alt: "Hollow Knight Vale OC",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/HK%20OC%20-%20Vale.png?raw=true",
            description: "Hollow Knight Vale OC",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Little%20Ghost.png?raw=true",
            alt: "Hollow Knight The Knight Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Little%20Ghost.png?raw=true",
            description: "Hollow Knight The Knight Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Hornet.jpg?raw=true",
            alt: "Hollow Knight Hornet Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Hornet.jpg?raw=true",
            description: "Hollow Knight Hornet Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Silver%20.png?raw=true",
            alt: "Cat Sona OC",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Silver%20.png?raw=true",
            description: "Cat Sona OC",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/A%20Light%20of%20Hope%20and%20Peace%20-%20Art%20Appreciation%20Final%20Project.png?raw=true",
            alt: "ARTAPPRE Final Project",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/A%20Light%20of%20Hope%20and%20Peace%20-%20Art%20Appreciation%20Final%20Project.png?raw=true",
            description: "ARTAPPRE Final Project",
          },
];

// Personal goals gallery data
const personalGoalsGallery = [
  {
    src: "https://i.pinimg.com/564x/59/59/9c/59599c11c023caa2612a987c96e3a326.jpg",
    alt: "Cat and Piano",
    link: "https://i.pinimg.com/564x/59/59/9c/59599c11c023caa2612a987c96e3a326.jpg",
    description: "Learn to Play Piano",
  },
  {
    src: "https://soranews24.com/wp-content/uploads/sites/3/2019/10/gs-2.png",
    alt: "Travel to Japan",
    link: "https://soranews24.com/wp-content/uploads/sites/3/2019/10/gs-2.png",
    description:
      "Travel to Japan for their Cherry Blossoms & Godzilla attractions",
    width: "400px",
    height: "280px",
  },
  {
    src: "https://media.tenor.com/sh_5zpuzWs4AAAAM/cat-pull-cat-snatch.gif",
    alt: "catnapped",
    link: "https://media.tenor.com/sh_5zpuzWs4AAAAM/cat-pull-cat-snatch.gif",
    description: "Have a cat (TOP PRIORITY)",
  },
];

// Render galleries
renderGallery("hobbies-gallery", hobbiesGallery);
renderGallery("art-gallery", artGallery);
renderGallery("personal-goals-gallery", personalGoalsGallery);

// JavaScript to handle clickable images and the modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("image-caption");
  const closeModal = document.getElementById("close-modal");

  // Get all images that should trigger the modal
  const images = document.querySelectorAll(".image-container img");

  images.forEach((image) => {
    // Add 'clickable' class to all images
    image.classList.add("clickable");

    // Add event listener to open the modal on click
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      modalCaption.textContent = this.alt;
    });
  });

  // Close the modal when clicking the close button
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const app = {
    started: false,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showThankYou: false,
    feedback: [],
    questions: [
      {
        question: "How would you rate the design of this website?",
        options: ["Excellent", "Good", "Average", "Poor"],
      },
      {
        question: "Was the website easy to navigate?",
        options: ["Very Easy", "Somewhat Easy", "Neutral", "Difficult"],
      },
      {
        question: "Would you recommend this website to others?",
        options: ["Definitely", "Probably", "Not Sure", "No"],
      },
      {
        question: "Any suggestions for improvement?",
        options: ["Better Design", "More Features", "More Interactions", "None"],
      },
    ],

    startSurvey() {
      this.started = true;
      this.updateScreen();
    },

    selectAnswer(index) {
      this.selectedAnswer = index;
      document.getElementById("nextButton").style.display = "inline-block";
      const options = document.querySelectorAll("#optionsList li");
      options.forEach((option, i) => {
        option.classList.toggle("selected", i === index);
      });
    },

    nextQuestion() {
      this.feedback.push({
        question: this.questions[this.currentQuestionIndex].question,
        answer: this.questions[this.currentQuestionIndex].options[this.selectedAnswer],
      });
      this.selectedAnswer = null;
      document.getElementById("nextButton").style.display = "none";

      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.showThankYou = true;
        this.started = false;
      }
      this.updateScreen();
    },

    restartSurvey() {
      this.currentQuestionIndex = 0;
      this.feedback = [];
      this.selectedAnswer = null;
      this.showThankYou = false;
      this.started = false;
      this.updateScreen();
    },

    updateScreen() {
      const startScreen = document.getElementById("startScreen");
      const questionScreen = document.getElementById("questionScreen");
      const thankYouScreen = document.getElementById("thankYouScreen");
      const questionText = document.getElementById("questionText");
      const optionsList = document.getElementById("optionsList");

      startScreen.style.display = this.started ? "none" : this.showThankYou ? "none" : "block";
      questionScreen.style.display = this.started ? "block" : "none";
      thankYouScreen.style.display = this.showThankYou ? "block" : "none";

      if (this.started) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsList.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
          const li = document.createElement("li");
          li.textContent = option;
          li.addEventListener("click", () => this.selectAnswer(index));
          optionsList.appendChild(li);
        });
      }
    },
  };

  // Event listeners for survey buttons
  document.getElementById("startButton").addEventListener("click", () => app.startSurvey());
  document.getElementById("nextButton").addEventListener("click", () => app.nextQuestion());
  document.getElementById("restartButton").addEventListener("click", () => app.restartSurvey());

  // Additional feedback submission logic
  const commentForm = document.getElementById("commentForm");
  const commentsList = document.getElementById("commentsList");

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const feedbackText = document.getElementById("additionalFeedback").value.trim();

    if (!userName) {
      alert("Please enter your name before submitting.");
      return;
    }

    if (!feedbackText) {
      alert("Please enter your feedback before submitting.");
      return;
    }

    // Add the comment to the list
    const commentItem = document.createElement("li");
    commentItem.innerHTML = `<strong>${userName}:</strong> ${feedbackText}`;
    commentsList.appendChild(commentItem);

    // Clear the form fields
    document.getElementById("userName").value = "";
    document.getElementById("additionalFeedback").value = "";
  });
});

</script>


<style>

.gallery-container {
  display: flex;
  justify-content: center; /* Centers items horizontally */
  gap: 20px; /* Reduces space between images */
  flex-wrap: wrap; /* Ensures images wrap to the next row if needed */
}

div.gallery img {
  width: 320px; /* Fixed width */
  height: 280px; /* Fixed height */
  object-fit: cover; /* Crops and maintains proportions */
  display: block;
  margin: auto;
  border-radius: 5px; /* Optional: Adds rounded corners */
}

div.gallery {
  flex: 0 1 auto; /* Keeps dimensions flexible */
  text-align: center; /* Centers text under each image */
  margin-bottom: 10px; /* Reduces spacing below the text */
}

 
div.desc {
  padding: 15px;
  text-align: center;
}

.preaching-jw {
  display: flex;
  justify-content: center; /* Centers items horizontally */
  gap: 20px; /* Spacing between items */
  flex-wrap: wrap; /* Allows wrapping to the next line if needed */
  margin-top: 20px; /* Space above the gallery */
  margin-bottom: 20px; /* Space below the gallery */
}


div.preaching {
  flex: 1 1 calc(50% - 20px); /* Each item takes 50% of the container width minus the gap */
  max-width: 600px; /* Limits the maximum width of each item */
  text-align: center; /* Centers text under each image */
  margin-bottom: 15px; /* Spacing below each item */
  box-sizing: border-box; /* Includes padding and border in the width calculation */
}


div.preaching img {
  width: 100%; /* Responsive width */
  height: auto; /* Maintains aspect ratio */
  object-fit: cover; /* Crops and maintains proportions */
  display: block; /* Ensures the image is treated as a block-level element */
  margin: auto; /* Centers the image within the container */
  border-radius: 5px; /* Optional: Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow for visual appeal */
}


.preaching-jw {
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap */
  gap: 20px; /* Space between items */
  justify-content: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */
  margin: 0 auto; /* Ensures the container is centered */
  max-width: 1200px; /* Optional: Limits the container's width */
}


div.preaching {
  flex: 1 1 calc(50% - 20px); /* Each item takes up 50% width minus the gap */
  max-width: 600px; /* Restricts the maximum width */
  text-align: center; /* Centers text under the image */
  box-sizing: border-box; /* Includes padding and border in the width calculation */
}


div.preaching img {
  width: 100%; /* Makes the image responsive */
  height: auto; /* Maintains aspect ratio */
  border-radius: 5px; /* Optional: Adds rounded corners */
  object-fit: cover; /* Ensures the image fits well */
}

div.desc {
  margin-top: 8px;
  font-size: 14px;
  text-align: center; /* Centers the description text */
  color: #fff; /* Optional: Adjust the text color */
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
}

#image-caption {
  margin: 20px auto;
  text-align: center;
  color: white;
  font-size: 18px;
}

.close {
  position: absolute;
  top: 10px;
  right: 25px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.5s; /* Animation for modal appearance */
}

/* Center the modal image */
.modal-content {
  display: block;
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%); /* Vertically center the image */
  max-width: 90%; /* Limit the size */
  max-height: 80%; /* Prevent overflow */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s; /* Zoom-in effect for image */
}

/* Close button styles */
.close {
  position: absolute;
  top: 20px;
  right: 35px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  color: rgb(196, 159, 82);
  background-color: rgba(34, 12, 12, 0.8);
}

.close:hover {
  color: rgb(10, 12, 9);
  background-color: rgba(248, 214, 162, 0.8);
}


/* Change cursor on hover for clickable images */
img.clickable {
  cursor: pointer;
}

/* Keyframe animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: translateY(-50%) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
}

body, h1, h2, h3, h4, h5, h6 {
  font-family: "Montserrat", sans-serif
}

.w3-row-padding img {
  margin-bottom: 12px
}

.w3-sidebar {
  width: 120px; background: #130302;
}

#main {
  margin-left: 120px
}

@media only screen and (max-width: 600px) {
  #main {margin-left: 0}
}

body {
background-image: url("https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Media.png?raw=true");
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
}

.w3-sidebar .w3-button:hover {
  background-color: #daa749 !important;
}

.w3-bar .w3-button:hover {
  background-color: #daa749 !important;
}

.center-line {
  margin: 0 auto;
}

#img1 {
  clip-path: circle(50%);
  width: 200px; /* Fixed width */
  height: 200px; /* Fixed height */
  object-fit: cover; /* Ensures the image fills the circle without stretching */
  display: block; /* Prevents inline spacing issues */
  margin: 0 auto; /* Centers the image horizontally */
}

header h1 {
  font-size: 40px;
}

.w3-hover-opacity:hover {
  opacity: 1 !important; /* Ensures no opacity change */
}


.flex-container {
  display: flex; /* Enables flexbox */
  justify-content: space-between; /* Adjusts spacing between boxes */
  align-items: flex-start; /* Aligns items to the top */
  flex-wrap: wrap; /* Wraps items to the next line if needed */
  gap: 20px; /* Adds spacing between boxes */
}

.flex-box {
  flex: 1 1 calc(33.333% - 20px); /* Ensures equal width for three boxes and accounts for gaps */
  box-sizing: border-box; /* Ensures padding doesn't affect box width */
  min-width: 250px; /* Prevents boxes from shrinking too much */
}

.center-box {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  margin-top: 20px; /* Spacing from the top */
}

.center-box ul {
  width: 100%; /* Adjust the width for responsiveness */
  max-width: 400px; /* Set a max width for the box */
}

.w3-bar .w3-button {
  padding: 16px;
}

.custom-color {
  background-color: #304670;
}

.custom-color2 {
  background-color: #857036;
}

.custom-color3 {
  background-color: #36856b;
}

.custom-color4 {
  background-color: #303470;
}

.custom-color5 {
  background-color: #7f3c81;
}

.custom-color6 {
  background-color: #85364e;
}

.custom-color7 {
  background-color: #437230;
}

a.five:link {color:#ffffff;text-decoration:none;}
a.five:visited {color:#8dfdd8;text-decoration:none;}
a.five:hover {text-decoration:underline;}


.gallery-container {
  display: flex;
  justify-content: center; /* Centers items horizontally */
  gap: 20px; /* Reduces space between images */
  flex-wrap: wrap; /* Ensures images wrap to the next row if needed */
}

div.gallery img {
  width: 320px; /* Fixed width */
  height: 280px; /* Fixed height */
  object-fit: cover; /* Crops and maintains proportions */
  display: block;
  margin: auto;
  border-radius: 5px; /* Optional: Adds rounded corners */
}

div.gallery {
  flex: 0 1 auto; /* Keeps dimensions flexible */
  text-align: center; /* Centers text under each image */
  margin-bottom: 10px; /* Reduces spacing below the text */
}

 
div.desc {
  padding: 15px;
  text-align: center;
}

.preaching-jw {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Centers items horizontally */
  gap: 20px; /* Reduces space between images */
  flex-wrap: wrap; /* Ensures images wrap to the next row if needed */
  margin-top: 20px; /* Adjusts space above the gallery */
  margin-bottom: 15px;
}

div.preaching {
  flex: 0 1 auto; /* Keeps dimensions flexible */
  text-align: center; /* Centers text under each image */
  margin-bottom: 10px; /* Reduces spacing below the text */
}

div.preaching img {
  width: 600px; /* Fixed width */
  height: 300px; /* Fixed height */
  object-fit: cover; /* Crops and maintains proportions */
  display: block;
  margin: auto;
  border-radius: 5px; /* Optional: Adds rounded corners */
}

.w3-text-light-grey {
  font-weight: bold;
}

#surveyApp {
  font-family: Arial, sans-serif;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  padding: 20px;
  line-height: 1.6;
  font-size: 18px;
}

#surveyApp ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#surveyApp li {
  padding: 10px;
  margin: 5px 0;
  background: #3d213c;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

#surveyApp li:hover {
  background: #cf8f46;
  transform: scale(1.02);
}

#surveyApp button {
  padding: 10px 20px;
  background: #406b2c;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

#surveyApp button:hover {
  background: #5cbaf0;
}

#surveyApp .thank-you {
  font-size: 18px;
  color: #66e76a;
}

#surveyApp h2 {
  font-size: 28px;
  font-weight: bold;
}

#commentForm {
  margin-top: 20px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

#commentForm label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}

#commentForm input,
#commentForm textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  background: #fff6e9;
}

#commentForm button {
  width: 100%;
  padding: 10px;
  background: #3d213c;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

#commentForm button:hover {
  background: #cf8f46;
}

#submittedComments {
  max-width: 650px;
  margin: 20px auto;
  text-align: left;
}

#submittedComments h3 {
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
}

#commentsList li {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #262a38;
  margin-bottom: 10px;
  font-size: 16px;
}

</style>