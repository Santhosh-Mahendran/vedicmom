// JavaScript to handle scroll event
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-heading', {
    scrollTrigger: '.hero-heading',
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2
  });

  gsap.from('.hero-img', {
    scrollTrigger: '.hero-img',
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2
  });

  gsap.from('.whatsapp-button', {
    scrollTrigger: '.whatsapp-button',
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2
  });

  gsap.from('.why-card1', {
    scrollTrigger: '.why-card1',
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2
  });

  gsap.from('.why-card2', {
    scrollTrigger: '.why-card2',
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2
  });
  
  gsap.from('.why-card3', {
    scrollTrigger: '.why-card3',
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2
  });
  
  gsap.from('.why-card4', {
    scrollTrigger: '.why-card4',
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2
  });


  
  



  
  