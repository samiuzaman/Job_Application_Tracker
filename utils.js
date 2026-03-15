function buttonToggle(button) {
  console.log(button);
  document
    .getElementById("nav-btn-one")
    .classList.remove("bg-blueColor", "text-white");
  document
    .getElementById("nav-btn-two")
    .classList.remove("bg-blueColor", "text-white");
  document
    .getElementById("nav-btn-three")
    .classList.remove("bg-blueColor", "text-white");

  button.classList.remove("bg-white", "text-darkGrayColor");
  button.classList.add("bg-blueColor", "text-white");
}


