const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const DOB = document.querySelector("#dob");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");
// console.log(form);

form.addEventListener("submit", () => {
  // start-end date validation
  if (startDate.value > endDate.value) {
    alert("ERROR: Start date can not be farther than End date!!");
  }
});
