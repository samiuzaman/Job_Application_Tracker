// Nav Menu Button Functionality
document.getElementById("nav-btn-one").addEventListener("click", function (event) {
  buttonToggle(event.target);
  displayConditionalData("job-card-container");
  displayJobCount("nav-all-job-count");
  const allJobCount = document.getElementById("dashboard-all-job-count").innerText;
  if (parseInt(allJobCount) < 1) {
    document.getElementById("job-card-container").classList.add("hidden");
    document.getElementById("no-job-available").classList.remove("hidden");
  } else {
    document.getElementById("no-job-available").classList.add("hidden");
  }
});
document.getElementById("nav-btn-two").addEventListener("click", function (event) {
  buttonToggle(event.target);
  displayConditionalData("interview-job-container");
  displayJobCount("nav-interview-job-count");
  const interviewCount = document.getElementById("dashboard-interview-job-count").innerText;
  if (parseInt(interviewCount) < 1) {
    document.getElementById("interview-job-container").classList.add("hidden");
    document.getElementById("no-job-available").classList.remove("hidden");
  } else {
    document.getElementById("no-job-available").classList.add("hidden");
  }
});
document.getElementById("nav-btn-three").addEventListener("click", function (event) {
  buttonToggle(event.target);
  displayConditionalData("rejected-job-container");
  displayJobCount("nav-rejected-job-count");
  const rejectedCount = document.getElementById("dashboard-rejected-job-count").innerText;
  if (parseInt(rejectedCount) < 1) {
    document.getElementById("rejected-job-container").classList.add("hidden");
    document.getElementById("no-job-available").classList.remove("hidden");
  } else {
    document.getElementById("no-job-available").classList.add("hidden");
  }
});

// All Job Card Functionality
const jobCardContainer = document.getElementById("job-card-container");
jobCardContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    console.log("Interview");
    console.log(event.target);
    updatedJobCount("dashboard-interview-job-count");
    updatedJobCount("nav-interview-job-count");
  }

  if (event.target.classList.contains("rejected-btn")) {
    console.log("rejected");
    console.log(event.target);
    updatedJobCount("dashboard-rejected-job-count");
    updatedJobCount("nav-rejected-job-count");
  }
});

// const availableJobCount = document.getElementById("available-job-count");
// if (parseInt(availableJobCount.innerText) === 0) {
//   document.getElementById("no-job-available").classList.remove("hidden");
// }
