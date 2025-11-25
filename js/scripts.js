 
$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }

    // scroll spy
    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear')
  });

  // Form submission
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });

  // Initialize particles.js
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    }
  });
});

document.addEventListener('visibilitychange',
  function () {
    if (document.visibilityState === "visible") {
      document.title = "Portfolio | Anish";
      $("#favicon").attr("href", "#");
    }
    else {
      document.title = "Come Back To Portfolio";
      $("#favicon").attr("href", "#");
    }
  }); 

 // typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Artificial intelligence", "Machine learning", "Data Science", "FrontEnd development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

// Initialize Tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});

// Initialize ScrollReveal
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .socials', { delay: 400 });
srtop.reveal('.home .social-icons li', { interval: 200 });

/* SCROLL ABOUT */
srtop.reveal('.about .image', { delay: 400 });
srtop.reveal('.about .content h3', { delay: 600 });
srtop.reveal('.about .content .tag', { delay: 800 });
srtop.reveal('.about .content p', { delay: 1000 });
srtop.reveal('.about .content .box-container', { delay: 1200 });
srtop.reveal('.about .resumebtn', { delay: 1400 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box-container .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .projects .project-card', { interval: 200 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });


// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}
