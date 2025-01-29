<template>    
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

</script>

  
  <style></style>