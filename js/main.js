// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animations
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Update progress bars
const progressBars = document.querySelectorAll('.progress-fill');
progressBars.forEach(bar => {
  const targetWidth = bar.getAttribute('data-progress') || '5';
  bar.style.width = `${targetWidth}%`;
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  const images = [
    "images/hero-1.jpg",
    "images/hero-2.png",
    "images/hero-3.jpg"
  ];

  let current = 0;

  // bg elementi oluşturma
  const bg = document.createElement("div");
  bg.style.position = "absolute";
  bg.style.inset = "0";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.transition = "opacity 1s ease-in-out";
  bg.style.zIndex = "0";

  hero.appendChild(bg);

  function changeBackground() {
    bg.style.opacity = 0;

    setTimeout(() => {
      bg.style.backgroundImage = `url(${images[current]})`;
      bg.style.opacity = 1;
      current = (current + 1) % images.length;
    }, 500);
  }

  // ilk resim
  bg.style.backgroundImage = `url(${images[0]})`;
  bg.style.opacity = 1;
  current = 1;

  // 5 saniyede bir değiştir
  setInterval(changeBackground, 5000);
});
