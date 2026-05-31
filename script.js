/*
  This script controls the scroll interaction.

  Intersection Observer detects when each section enters the screen.
  When a section is visible, it receives the "visible" class.
  This makes the card fade in through CSS.

  The script also changes the body class based on the section's data-mood.
  This changes the background colour while the user scrolls.

  The progress bar shows how far the user has scrolled through the page.
*/

const sections = document.querySelectorAll(".section");
const progressFill = document.querySelector("#progressFill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const mood = entry.target.dataset.mood;

        entry.target.classList.add("visible");

        document.body.className = "";
        document.body.classList.add(mood);
      }
    });
  },
  {
    threshold: 0.5
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / pageHeight) * 100;

  progressFill.style.width = progress + "%";
});