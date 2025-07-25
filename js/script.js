document.addEventListener("DOMContentLoaded", function () {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section").forEach((section) => {
    sectionObserver.observe(section);
  });

  const progressBars = document.querySelectorAll(".skill-bar .bar div");
  const animateBars = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
        observer.unobserve(bar);
      }
    });
  };
  const barObserver = new IntersectionObserver(animateBars, { threshold: 0.3 });
  progressBars.forEach(bar => {
    barObserver.observe(bar);
  });

  new Typed(".auto-type", {
    strings: ["Software Engineer", "Software Developer", "Web Developer", "Tech Enthusiast"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.style.opacity = '0';
        setTimeout(function () {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    });
  }

  const darkToggle = document.getElementById("darkToggleBtn");
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");
  function setActiveLink() {
    let index = sections.length;
    while (--index && window.scrollY + 80 < sections[index].offsetTop) { }
    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }
  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for your message! I’ll get back to you soon.");
      form.reset();
    });
  }
});

