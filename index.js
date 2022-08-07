const startObserver = () => {
  let navLis = document.querySelector("nav").querySelectorAll("li");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let navIntersected = document.querySelector(
            `[href="#${entry.target.parentNode.id}"]`
          );

          navLis.forEach((li) => {
            li.classList.remove("nav__item--selected");
          });
          navIntersected.parentNode.classList.toggle("nav__item--selected");
        }
      });
    },
    { threshold: 1.0 }
  );

  document.querySelectorAll("h2").forEach((h2) => {
    observer.observe(h2);
  });
};

window.onload = () => {
  startObserver();
};
