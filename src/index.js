window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// const sendEmail = () => {
//   Email.send({
//     Host: "smtp.yourisp.com",
//     Username: "denisdenchevneosf@gmail.com",
//     Password: "0F863E0D7C865647792803BA8DB1C2711340",
//     To: "denisdenchevneosf@gmail.com",
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// };

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("contact_service", "contact_form", this);
      alert("Send Successfully");
    });
};
