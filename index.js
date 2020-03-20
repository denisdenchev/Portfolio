// // When the user scrolls the page, execute myFunction
// // window.onscroll = function() {
// //   myFunction();
// // };

// // Get the navbar
// const navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// const sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

// const stickyNavbar = () => {
//   window.pageYOffset >= sticky
//     ? navbar.classList.add("sticky")
//     : navbar.classList.remove("sticky");
// };

// window.onscroll(() => {
//   stickyNavbar;
// });

const nav = document.querySelector("#nav");
const topOfnav = nav.offsetTop;
console.log(topOfnav);

// const fixNav = () => {
//   console.log(topOfnav, window.scrolly);
// };

// window.addEventListener("scroll", fixNav);
