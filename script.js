// NAVBAR
const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')
console.log(toggleButton)

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// //NAVBAR

// BACKGROUND
window.onload = function () {
  var images = ['/media/img/backgrounds/3.jpg'];
  var image = images[Math.floor(Math.random() * images.length)];
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
  document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
  document.getElementsByTagName('body')[0].style.backgroundPosition = "center";
  document.getElementsByTagName('body')[0].style.backgroundAttachment = "fixed";
}
// //BACKGROUND

//REMOVE PAGE TAG
var links = document.getElementsByTagName("a");
Array.prototype.forEach.call(links, function(elem, index) {
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});
// //REMOVE PAGE TAG

// MINECRAFT SERVER INFO
function sideProjectsContentButtonMinecraft() {
  alert("Server IP: mc.molehole.co \r\nVersion: Latest (1.18.2) \r\nPlatform: Java");
}
// //MINECRAFT SERVER INFO

// DISCORD CONTACT
function discordCopyToClipBoard() {
  navigator.clipboard.writeText('BabyMole#5476');
  alert("BabyMole#5476 has been copied to your clipboard.");
}
// //DISCORD CONTACT