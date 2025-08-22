/* 
   © 2025 Welt Research Pvt. Ltd. - Designed & Developed by
   Swastik Adhikari - Kathmandu, Nepal
   Website: https://swastikadhikari.com.np/
   GitHub:  https://github.com/sskadk
   Email:   adk.swastik246@gmail.com (Feel free to contact me)
   Phone:   +977 9865503351 - Whatsapp/Viber (Feel free to contact me)
   Remote Friendly - Contact me anytime
*/

// Hide preloader after page load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => preloader.style.display = "none", 500);
});

//Navbar scroll script
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("stuck");
  } else {
    navbar.classList.remove("stuck");
  }
});

//Navbar for small devices
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Custom cursor movement
const cursor = document.getElementById('cursor');
const follower = document.getElementById('follower');

// Move cursor and follower
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Change cursor color on hover over links/buttons
const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.backgroundColor = '#32a7a1ff'; // color on hover (example: red)
    follower.style.borderColor = '#2f70a5ff';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.backgroundColor = '#41a715'; // default color
    follower.style.borderColor = '#41a715';
  });
});



//Carousel Hero Section
const slides = document.getElementById("carousel-slides");
const totalSlides = slides.children.length;
let index = 0;

function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("prev").addEventListener("click", () => showSlide(index - 1));
document.getElementById("next").addEventListener("click", () => showSlide(index + 1));


// Auto-slide every 6s
setInterval(() => showSlide(index + 1), 6000);
