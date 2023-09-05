const pictures = [
  "Pictures/Slider-01.jpg",
  "Pictures/Slider-02.jpg",
  "Pictures/Slider-03.jpg",
  "Pictures/Slider-04.jpg",
];
const qoutes = [
  "QA INTERNATIONAL 1",
  "QA INTERNATIONAL 2",
  "QA INTERNATIONAL 3",
  "QA INTERNATIONAL 4",
];
const slideshow = document.getElementsByClassName("slideshow");
setTimeout(function () {
  slideshower(1);
}, 2000);

var j = 2;
setInterval(function () {
  slideshower(j % 4);
  j++;
}, 8000);
function slideshower(n) {
  classadd();
  var img0 = slideshow[0].querySelector("img");
  var img1 = slideshow[1].querySelector("img");
  var text0 = slideshow[0].querySelector("h1");
  var text1 = slideshow[1].querySelector("h1");
  setTimeout(function () {
    img0.setAttribute("src", pictures[n]);
    text0.innerHTML = qoutes[n];
    img1.setAttribute("src", pictures[n]);
    text1.innerHTML = qoutes[n];
  }, 1500);
  setTimeout(function () {
    classremove();
  }, 4500);
}
function classadd() {
  slideshow[0].classList.add("animate");
  slideshow[1].classList.add("animate");
}
function classremove() {
  slideshow[0].classList.remove("animate");
  slideshow[1].classList.remove("animate");
}
