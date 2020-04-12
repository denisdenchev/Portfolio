window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// grecaptcha.ready(function () {
//   grecaptcha.execute("6Le93egUAAAAALHnbbvJ1i_MdUkicw7tfOrXvTg1", {
//     action: "submit",
//   });
//   // .then(function (token) {
//   //   alert("Success");
//   // });
// });

window.onload = () => {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("contact_service", "contact_form", this);
      alert("Sent Successfully");
    });
  // grecaptcha.ready(() => {
  //   grecaptcha
  //     .execute("6Le93egUAAAAALHnbbvJ1i_MdUkicw7tfOrXvTg1", {
  //       action: "validate_captcha",
  //     })
  //     .then((token) => {
  //       alert("Captcha Validated");
  //     });
  // });
};

let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;
