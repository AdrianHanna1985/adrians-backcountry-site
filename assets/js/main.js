/* main.js - Adrian's Backcountry Adventures */

// === Responsive Navigation Toggle ===
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // === Lightbox Setup ===
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  document.body.appendChild(lightbox);

  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.innerHTML = ''; // Clear previous image
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt || 'Expanded gallery image';
      lightbox.appendChild(img);
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // === Smooth Scroll for Anchor Links ===
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // === Optional: Preload Critical Images ===
  const preloadImages = [
    '/assets/images/adrian\'s-backcountry-adventures-logo.png',
    '/assets/images/mt_whitney_summit_2024.jpg'
  ];
  preloadImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

});
<script src="/assets/js/main.js" defer></script>
