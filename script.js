const fName = document.querySelector("#name");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const DOB = document.querySelector("#dob");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");

const data = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // start-end date validation
  if (startDate.value > endDate.value) {
    alert("ERROR: Start date can not be farther than End date!!");
  }

  // store form data in data array
  data.name = `${fName.value}`;
  data.dob = `${DOB.value}`;
  data.startDate = `${startDate.value}`;
  data.endDate = `${endDate.value}`;
  localStorage.setItem("formData", JSON.stringify(data));
});
