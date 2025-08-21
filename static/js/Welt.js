
//Navbar scroll script
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
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
