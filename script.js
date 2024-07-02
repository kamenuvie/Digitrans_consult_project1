// scripts.js

// Array of image URLs
const images = [
    './asserts/ANNIVERSARY_2X4.jpg',
    './asserts/DSC_0466.JPG',
    './asserts/excursion.jpg',
    // Add more image URLs as needed
];

let currentIndex = 0;
const slideshowImg = document.getElementById('slideshow-img');

function startSlideshow() {
    setInterval(changeImage, 3000); // Change image every 3 seconds (adjust as needed)
}

function changeImage() {
    slideshowImg.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Start the slideshow when the page loads
window.onload = startSlideshow;
