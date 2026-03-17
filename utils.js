function buttonToggle(button) {
  console.log(button);
  document.getElementById("nav-btn-one").classList.remove("bg-blueColor", "text-white");
  document.getElementById("nav-btn-two").classList.remove("bg-blueColor", "text-white");
  document.getElementById("nav-btn-three").classList.remove("bg-blueColor", "text-white");

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

// dynamic card
function displayReuseableJobCard(title, role, jobType, status, description) {
  const div = document.createElement("div");
  div.classList.add("bg-white", "p-5", "border", "border-[#e8e8ea]", "rounded-lg", "space-y-4");
  div.innerHTML = `
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-xl font-semibold text-blackColor mb-1">${title}</h3>
              <h5 class="text-grayColor">${role}</h5>
            </div>
            <button>
              <i
                class="text-grayColor border border-[#e7e7ea] p-3 rounded-full cursor-pointer fa-solid fa-trash-can"
              ></i>
            </button>
          </div>
          <p class="text-grayColor pb-1">${jobType}</p>
          <div class="bg-[#EEF4FF] inline px-4 py-2.5 rounded-md">
            <span class="text-md font-medium text-blackColor uppercase">${status}</span>
          </div>
          <p class="pt-5 text-darkGrayColor">${description}</p>
          
  `;
  return div;
}
