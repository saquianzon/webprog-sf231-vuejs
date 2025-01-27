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