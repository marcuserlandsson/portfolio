// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Handle navigation link clicks
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navHeight = document.querySelector(".nav").offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Add active state to navigation on scroll
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navItems.forEach((item) => {
          item.classList.remove("active");
          if (item.getAttribute("href") === `#${sectionId}`) {
            item.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // Add click handlers to project tiles for navigation
  const projectTiles = document.querySelectorAll(".project-tile");
  projectTiles.forEach((tile) => {
    tile.addEventListener("click", function () {
      // Get the title from the clicked tile
      const tileTitleElement = this.querySelector(".tile-title");
      if (!tileTitleElement) return;

      const tileTitle = tileTitleElement.textContent.trim();

      // Find the matching project card by title
      const projectCards = document.querySelectorAll(".project-card");
      let targetCard = null;

      projectCards.forEach((card) => {
        const cardTitleElement = card.querySelector(".project-card-title");
        if (
          cardTitleElement &&
          cardTitleElement.textContent.trim() === tileTitle
        ) {
          targetCard = card;
        }
      });

      // Scroll to the matching card or fallback to projects section
      if (targetCard) {
        const navHeight = document.querySelector(".nav").offsetHeight;
        const targetPosition = targetCard.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        // Fallback to projects section if no match found
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          const navHeight = document.querySelector(".nav").offsetHeight;
          const targetPosition = projectsSection.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".project-card, .skill-category, .about-content, .contact-content"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
