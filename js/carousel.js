const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const slides = carousel.querySelectorAll('.carousel-slide');
const dots = carousel.querySelectorAll('.carousel-dot');

let currentSlide = 0;
let slideWidth = slides[0].clientWidth;

// Set initial slide width (adjust if needed)
container.style.width = slideWidth * slides.length + 'px';

// Function to move to a specific slide
function moveToSlide(slideIndex) {
  container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  currentSlide = slideIndex;
  activateDot(currentSlide);
}

// Function to activate the corresponding dot for the current slide
function activateDot(slideIndex) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

// Event listeners for navigation dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveToSlide(index);
  });
});

// Optional: Autoplay functionality (adjust interval as desired)
let autoplayInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  moveToSlide(currentSlide);
}, 5000); // Change interval (in milliseconds)

// Pause autoplay on hover
carousel.addEventListener('mouseover', () => {
  clearInterval(autoplayInterval);
});

// Resume autoplay on mouseout
carousel.addEventListener('mouseout', () => {
  autoplayInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    moveToSlide(currentSlide);
  }, 5000);
});
