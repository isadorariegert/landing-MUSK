const header = document.querySelector(".header")

window.onscroll = function() {headerStiky()};

function headerStiky() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("stiky");
  } else {
    header.classList.remove("stiky");
  }
}