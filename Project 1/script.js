let sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
  section.addEventListener("click", () => {
    removeActiveClasses()
    document
      .querySelectorAll(".container section")
      [index].classList.add("active");
  });
});

function removeActiveClasses() {
  document
    .querySelectorAll("section")
    .forEach((i) => i.classList.remove("active"));
}
