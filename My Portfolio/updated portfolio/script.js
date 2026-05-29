/* ===== MENU ICON NAVBAR ===== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  /* ===== STICKY NAVBAR ===== */
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // /* ===== REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (MOBILE) ===== */
  // menuIcon.classList.remove('bx-x');
  // navbar.classList.remove('active');
};

/* ===== SCROLL REVEAL ANIMATION ===== */
ScrollReveal({
  // reset: true, // যদি চাই প্রতিবার scroll করলে animation repeat হবে
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, .contact form',
  { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ===== TYPED JS (TYPING EFFECT) ===== */
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer', 'Programmer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Contact form submit handler with SweetAlert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: { Accept: 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: '✅ Your message has been delivered successfully.',
          showConfirmButton: false,
          timer: 2000,
        });
        this.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '❌ Something went wrong. Please try again.',
        });
      }
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: '⚠️ Please check your internet connection and try again.',
      });
    });
});
