window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.onload = () => {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("contact_service", "contact_form", this);
      alert("Sent Successfully");
      resetFormValues();
    });
};

let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;

const displayCode = () => {
  document.getElementById(
    "displayHere"
  ).innerHTML = ` Your unique code is: ${finalRandomNum} `;
};

const randomNum1 = Math.floor(Math.random() * 10 + 1);
const randomNum2 = Math.floor(Math.random() * 10 + 1);
const randomNum3 = Math.floor(Math.random() * 10 + 1);
const randomNum4 = Math.floor(Math.random() * 10 + 1);
const finalRandomNum = `${randomNum1}${randomNum2}${randomNum3}${randomNum4}`;
document.getElementById("button").disabled = true;
document.getElementById("button").style.cursor = "not-allowed";

const submitAllowed = () => {
  document.getElementById("uniqueCode").style.backgroundColor = "green";
  document.getElementById("button").style.cursor = "pointer";
  document.getElementById("button").disabled = false;
};

const submitNotAllowed = () => {
  document.getElementById("uniqueCode").style.backgroundColor = "red";
  document.getElementById("button").style.cursor = "not-allowed";
  document.getElementById("button").disabled = true;
};

const verifyCode = () => {
  const codeInputFromUser = document.getElementById("uniqueCode").value;
  codeInputFromUser === finalRandomNum ? submitAllowed() : submitNotAllowed();
};

const resetFormValues = () => {
  document.getElementById("contact-form").reset();
  document.getElementById("displayHere", "uniqueCode").innerHTML = "";
  document.getElementById("uniqueCode").style.backgroundColor = "#eeeeee";
};
