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
