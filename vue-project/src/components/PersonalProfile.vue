<template>
      
    <body class="w3-black">
        <!-- Icon Bar (Sidebar - hidden on small screens) -->
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
        
    <!-- Navbar on small screens (Hidden on medium and large screens) -->
    <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar" style="background-color: #130302;"> 
        <div class="w3-bar w3-hover-opacity-off w3-center w3-small">
            <a href="#" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">HOME</a>
            <a href="#about" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">ABOUT</a>
            <a href="#art" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">GALLERY</a>
            <a href="#contact" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">CONTACT</a>
        </div>
    </div>
    
    <!-- Page Content -->
     <div class="w3-padding-large" id="main">
        <!-- Header/Home -->
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

  
            <!-- Grid for pricing tables -->
            <h3 class="w3-padding-16 w3-text-light-grey">Education</h3>
            <div class="flex-container">
                <div class="flex-box">
                    <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                        <li class="custom-color w3-xlarge w3-padding-32 w3-text-light-grey">Schools</li>
                        <li class="w3-padding-16">Victory Elijah Christian College (2018-2021)</li>
                        <li class="w3-padding-16">Ignacio Villamor Senior High School (2021-2023)</li>
                        <li class="w3-padding-16">Asia Pacific College (2023-2027)</li>
                    </ul>
                </div>
                
                <div class="flex-box">
                    <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                        <li class="custom-color2 w3-xlarge w3-padding-32 w3-text-light-grey">Achievements</li>
                        <li class="w3-padding-16">Elementary: 1st Place Mask-Making Contestant</li>
                        <li class="w3-padding-16">Senior High School: With High Honors (Grade 11 & 12)</li>
                        <li class="w3-padding-16">College: Honor Student (1st Year)</li>
                    </ul>
                </div>
                
                <div class="flex-box">
                    <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                        <li class="custom-color3 w3-xlarge w3-padding-32 w3-text-light-grey">Course</li>
                        <li class="w3-padding-16">Technical-Vocational Livelihood (TVL) Information and Communications Technology (ICT)</li>
                        <li class="w3-padding-16">Bachelor of Computer Science with Specialization in Cybersecurity and Forensics</li>
                    </ul>
                </div>
            </div>
            
            <!-- End Grid/Pricing tables -->
        </div>
        
        <!--IT Experience-->
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
            </div><br><br>
            
            <div class="flex-container">
                <div class="flex-box">
                    <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                        <li class="custom-color4 w3-xlarge w3-padding-32 w3-text-light-grey">Software</li>
                        <li class="w3-padding-16">Windows 7 and 10 Operating System Installation</li>
                        <li class="w3-padding-16">Windows Server 2012 r2 Configuration</li>
                        <li class="w3-padding-16">Ubuntu Linux Installation</li>
                    </ul>
                </div>
                
                <div class="flex-box">
                    <ul class="w3-ul w3-white w3-center w3-hover-opacity:hover">
                        <li class="custom-color5 w3-xlarge w3-padding-32 w3-text-light-grey">Hardware</li>
                        <li class="w3-padding-16">Setting up Computer Networks & Servers</li>
                        <li class="w3-padding-16">Assembling/Disassembling Computer Systems</li>
                        <li class="w3-padding-16">Patch Panel Networking</li>
                    </ul>
                </div>
                
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
        
        <br>
        <!--Goals Vue (changed to pass HTML validator as vue is not recognized)-->
        <div id="main-content">
            <div class="w3-content w3-center w3-text-white" id="goals">
                <div id="goals-intro" class="w3-container w3-padding-32"></div>
            </div>
            
            <!-- Preaching Work Section -->
             <section>
                <h3 class="w3-padding-16 w3-center w3-text-light-grey">Preaching and Creative Work</h3>
                <div id="preaching-gallery" class="gallery-container"></div>
            </section>
            
            <!-- Personal Goals Section -->
             <section>
                <h3 class="w3-padding-16 w3-center w3-text-light-grey">Personal Goals</h3>
                <div id="personal-goals-gallery" class="gallery-container"></div>
            </section>
            
            <!-- Gallery Vue (changed to pass HTML validator as vue is not recognized)-->
            <!-- Hobbies and Interests Section -->
            <section>
                <div class="w3-content w3-center w3-text-white" id="photos">
                    <h2 class="w3-padding-16 w3-center w3-text-light-grey">Hobbies and Interests</h2>
                </div>
                <hr style="width:200px" class="center-line">
                <p class="w3-center w3-large">Try clicking on the images!</p>
                <br>
                <div id="hobbies-gallery" class="gallery-container"></div>
            </section>
            
            <!-- Gallery Vue (changed to pass HTML validator as vue is not recognized)-->
            <!-- Art Gallery Section -->
            <section>
                <div class="w3-content w3-center w3-text-white" id="art">
                    <h2 class="w3-padding-16 w3-center w3-text-light-grey">Art Gallery</h2>
                </div>
                <hr style="width:200px" class="center-line">
                <p class="w3-center w3-large">Try clicking on the images!</p>
                <p class="w3-center w3-medium">Please don't steal/repost my works .ᐟ(つ╥﹏╥)つ</p>
                <div id="art-gallery" class="gallery-container"></div>
            </section>
        </div>
        
        <!-- Modal Vue for Full-Size Images (changed to pass HTML validator as vue is not recognized) -->
        <div id="image-modal" class="modal" role="dialog" aria-labelledby="image-caption" aria-hidden="true">
            <button id="close-modal" class="close" aria-label="Close">&times;</button>
            <img class="modal-content" id="modal-image" src="https://via.placeholder.com/300" alt="Full-size view of selected image">
            <div id="image-caption" role="note"></div>
        </div>
        
        <!-- Survey Vue (changed to pass HTML validator as vue is not recognized) -->
        <div id="surveyApp">
            <h2>Website Feedback Survey</h2>
            <!-- Start Survey Screen -->
            <div id="startScreen">
                <p>Congrats for making it this far, visitor! Your feedback helps the developer of this website improve—click below to start the survey!</p>
                <button id="startButton">Start Survey</button>
            </div>
            
            <!-- Survey Questions -->
            <div id="questionScreen" style="display: none;">
                <p id="questionText"></p>
                <ul id="optionsList"></ul>
                <button id="nextButton" style="display: none;">Next</button>
            </div>
            
            <!-- Thank-You Screen -->
            <div id="thankYouScreen" style="display: none;">
                <p class="thank-you">Thank you for your feedback!</p>
                <button id="restartButton">Take Survey Again</button>
                
                <!-- Comment Form -->
                <form id="commentForm">
                    <label for="userName">Your Name:</label>
                    <input type="text" id="userName" placeholder="Enter your name">
                    
                    <label for="additionalFeedback">Additional Comments:</label>
                    <textarea id="additionalFeedback" rows="4" placeholder="Write your feedback here..."></textarea>
                    <button type="submit">Submit Feedback</button>
                </form>
                
                <!-- Display Submitted Comments -->
                <div id="submittedComments">
                    <h3>Submitted Comments:</h3>
                    <ul id="commentsList"></ul>
                </div>
            </div>
        </div>
        
        <!-- Contact Section -->
        <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
            <h2 class="w3-text-light-grey">Contact Me</h2>
            <hr style="width:200px" class="w3-opacity">
            <div class="w3-section">
                
                <p>
                    <b>
                        <i class="fa fa-facebook-official fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
                        <a class="five" href="https://www.facebook.com/shandrae.quianzon" target="_blank">My Facebook Page
                        </a>
                    </b>
                </p>
                
                <p>
                    <b>
                        <i class="fa fa-instagram fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
                        <a class="five" href="https://www.instagram.com/quiassont/" target="_blank">Find me on Instagram
                        </a>
                    </b>
                </p>
                
                <p>
                    <b>
                        <i class="fa fa-linkedin fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
                        <a class="five" href="https://www.linkedin.com/in/shandrae-lois-quianzon-765679288/" target="_blank">Take a look at my LinkedIn Profile
                        </a>
                    </b>
                </p>
            </div>
            
            <!-- End Contact Section -->
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
            <!-- End footer -->
            </footer>
            
            <!-- END PAGE CONTENT -->
        </div>
        
        <!-- No suggestions the website is great! -->
        </body>
</template>


<script></script>
 

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