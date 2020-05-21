var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (70 > currentScrollPos) {
    document.getElementsByClassName("example").style.top = "0";
  } else {
    document.getElementsByClassName("example").style.transition = "all 300ms"
    document.getElementsByClassName("example").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};