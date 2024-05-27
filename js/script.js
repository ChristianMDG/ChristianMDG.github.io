// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

// Remove toggle icon and navbar when click navbar links (scroll)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Animation footer on scroll
window.addEventListener('scroll', () => {
    let footer = document.querySelector('footer');
    if (window.scrollY > (document.body.scrollHeight - window.innerHeight) * 0.8) {
        footer.classList.add('animate-footer');
    } else {
        footer.classList.remove('animate-footer');
    }
});

const carousel = document.querySelector('.carousel');
const carouselImages = carousel.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= carouselImages.length) return;

  carouselImages.forEach(image => image.style.opacity = 0); // Hide all images
  carouselImages[slideIndex].style.opacity = 1; // Show the target image
  currentSlide = slideIndex;
}

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

// Optionally, add logic for autoplay using setInterval


function ch_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function ch_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}