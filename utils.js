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

function displayConditionalData(sectionId) {
  // display section
  document.getElementById("job-card-container").classList.add("hidden");
  document.getElementById("interview-job-container").classList.add("hidden");
  document.getElementById("rejected-job-container").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
  document.getElementById(sectionId).classList.add("block");
}

function displayJobCount(countId) {
  console.log(countId);
  document.getElementById("nav-all-job-count").classList.add("hidden");
  document.getElementById("nav-interview-job-count").classList.add("hidden");
  document.getElementById("nav-rejected-job-count").classList.add("hidden");
  document.getElementById(countId).classList.remove("hidden");
}

function updatedJobCount(countId) {
  const count = document.getElementById(countId);
  const convertCount = parseInt(count.textContent) + 1;
  return (count.innerText = convertCount);
}
