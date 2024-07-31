const carouselImages = document.querySelector('.carousel-images');
const totalImages = carouselImages.children.length;
let index = 0;

function autoScroll() {
    index = (index + 1) % totalImages; // Increment index and loop back to 0 if it exceeds total images
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-scroll every 3 seconds
setInterval(autoScroll, 3000);

// Optionally, you can add the auto-scroll effect on page load as well
window.addEventListener('load', autoScroll);
