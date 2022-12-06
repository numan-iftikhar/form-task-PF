const fName = document.querySelector("#name");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const DOB = document.querySelector("#dob");
const file = document.querySelector("#upload-file");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");

const data = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // name validation
  let regEx = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regEx.test(fName)) {
    alert("Invalid name given.");
  }
  // start-end date validation
  if (startDate.value > endDate.value) {
    alert("ERROR: Start date can not be farther than End date!!");
  }

  // store form data in data array
  data.name = `${fName.value}`;
  data.dob = `${DOB.value}`;
  data.startDate = `${startDate.value}`;
  data.endDate = `${endDate.value}`;
  data.fileName = `${file.value}`;
  localStorage.setItem("formData", JSON.stringify(data));
});

//new function event to save file
const input = document.getElementById("upload-file");
const link = document.getElementById("link");
let objectURL;

input.addEventListener("change", function () {
  if (objectURL) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL);
  }

  const fil = this.files[0];
  objectURL = URL.createObjectURL(fil);

  link.download = fil.name; // this name is used when the user downloads the file
  link.href = objectURL;
});
