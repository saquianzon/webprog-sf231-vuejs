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