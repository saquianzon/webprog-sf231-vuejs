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


<script></script>


<style></style>