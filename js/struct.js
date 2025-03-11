// Global Variables --->
var lastScroll = 0;
var y = 0;
var head = document.getElementById("header");
var slide = document.getElementsByClassName("sl");
// FUNCTION ====>
window.addEventListener("scroll", function () {
  var scroll = window.scrollY || document.documentElement.scrollTop;

  if (scroll > lastScroll) {
    head.style.top = "-80px";
    // if(y != -80){
    //   y += -40;
    //
    // }
  } else {
    head.style.top = 0;
    // if(y != 0){
    //   y += 40;
    // }
  }
  console.log(
    "Scroll top = " + scroll + ", " + "last Scroll top =" + lastScroll
  );
  lastScroll = scroll;
});

const Social = document.getElementsByClassName("social");
// EVENT ===>
