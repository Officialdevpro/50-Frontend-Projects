const button = document.querySelector(".ripple");

button.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const buttonLeft = e.target.offsetLeft;
  const buttonTop = e.target.offsetTop;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.left = xInside + "px";
  circle.style.top = yInside + "px";

  button.appendChild(circle);

  setTimeout(() => circle.remove(), 1000);
});
