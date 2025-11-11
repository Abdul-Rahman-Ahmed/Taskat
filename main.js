let heading = document.querySelectorAll(".fade-up");

checkVisibility = () => {
  const triggerBottom = window.innerHeight * 0.85;

  heading.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
};
window.addEventListener("scroll", checkVisibility);
checkVisibility();
