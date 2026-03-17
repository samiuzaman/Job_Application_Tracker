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
  // interview button task
  if (event.target.classList.contains("interview-btn")) {
    updatedJobCount("dashboard-interview-job-count");
    updatedJobCount("nav-interview-job-count");
    const jobCard = event.target.parentElement.parentElement;
    const jobTitle = jobCard.querySelector("#job-title").textContent;
    const jobRole = jobCard.querySelector("#job-role").textContent;
    const jobType = jobCard.querySelector("#job-type").textContent;
    const jobStatus = "Interview";
    const jobDescription = jobCard.querySelector("#job-description").textContent;
    const interviewCard = displayReuseableJobCard(
      jobTitle,
      jobRole,
      jobType,
      jobStatus,
      jobDescription,
    );
    document.getElementById("interview-job-container").appendChild(interviewCard);
  }

  // rejected button task
  if (event.target.classList.contains("rejected-btn")) {
    updatedJobCount("dashboard-rejected-job-count");
    updatedJobCount("nav-rejected-job-count");
    const jobCard = event.target.parentElement.parentElement;
    const jobTitle = jobCard.querySelector("#job-title").textContent;
    const jobRole = jobCard.querySelector("#job-role").textContent;
    const jobType = jobCard.querySelector("#job-type").textContent;
    const jobStatus = "Rejected";
    const jobDescription = jobCard.querySelector("#job-description").textContent;
    const interviewCard = displayReuseableJobCard(
      jobTitle,
      jobRole,
      jobType,
      jobStatus,
      jobDescription,
    );
    document.getElementById("rejected-job-container").appendChild(interviewCard);
  }
  // Delete Button Task
  if (event.target.classList.contains("delete-btn")) {
    const card = event.target.parentElement.parentElement;
    card.classList.add("hidden");
    decrementTotalJobCount("dashboard-all-job-count");
    decrementTotalJobCount("nav-all-job-count");
  }
});
