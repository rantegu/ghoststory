const sectionWrite = document.querySelectorAll(".descpo");
const sectionAlbum = document.querySelectorAll(".sectionalbum");

const options = {
  root: null,
  threshold: 1,
  rootMargin: "10px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

sectionWrite.forEach((section) => {
  appearOnScroll.observe(section);
});

sectionAlbum.forEach((section) => {
  appearOnScroll.observe(section);
});
