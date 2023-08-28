const pictures = ["Pictures/Slider-01.jpg", "Pictures/Slider-02.jpg", "Pictures/Slider-03.jpg", "Pictures/Slider-04.jpg"];
const qoutes = ["QA INTERNATIONAL 1", "QA INTERNATIONAL 2", "QA INTERNATIONAL 3", "QA INTERNATIONAL 4"];
const slideshow = document.getElementsByClassName("slideshow");
setTimeout(function(){
  slideshower(1);
}, 2000) 

var j = 2;
setInterval(function() {
  slideshower(j%4);
  j++;
  console.log(j + "\n" + j%4)
}, 8000);
function slideshower(n){
  classadd();
  var img0 = slideshow[0].querySelector("img");
  var img1 = slideshow[1].querySelector("img");
  var text0 = slideshow[0].querySelector("h1");
  var text1 = slideshow[1].querySelector("h1");
  setTimeout(function(){
    img0.setAttribute("src", pictures[n]);
    text0.innerHTML = qoutes[n];
    img1.setAttribute("src", pictures[n]);
    text1.innerHTML = qoutes[n]; 
  }, 1500)
  setTimeout(function(){
    classremove();
  }, 4500) 
}
function classadd(){
  slideshow[0].classList.add("animate");
  slideshow[1].classList.add("animate");
}
function classremove(){
  slideshow[0].classList.remove("animate");
  slideshow[1].classList.remove("animate");
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
      }
  });
  
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.05 });
const observer1 = new IntersectionObserver(handleIntersection, { threshold: 0.05});

const picsElement = document.querySelector('.pics');
observer.observe(picsElement);

const textElement = document.querySelector('.text1');
observer1.observe(textElement);


function handleIntersection1(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          
          entry.target.classList.add('initiate');
          
          setTimeout(() => {
              entry.target.classList.remove('initiate');
          }, 1000);
          
          observer.unobserve(entry.target);
      }
  });
}

const observer2 = new IntersectionObserver(handleIntersection1, { threshold: 0.5 });

const serviceElements = document.querySelectorAll('.service');
serviceElements.forEach(element => {
    observer2.observe(element);
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 100) || 4000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
 
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
 
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
 
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
 
  var that = this;
  var delta = 50;
 
  if (this.isDeleting) { delta /= 2; }
 
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    plusSlide(1);
    this.loopNum++;
    delta = 50;
  }
 
  setTimeout(function() {
    that.tick();
  }, delta);
};
 
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

var slidesIndex = 1;
showSlide(slidesIndex);

function plusSlide(n) {
  n=1;
  showSlide(slidesIndex += n);
}

function currentSlides(n) {
  showSlide(slidesIndex = n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("textSlides");
  if (n > slide.length) {slidesIndex = 1}
    if (n < 1) {slidesIndex = slide.length}
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
  slide[slidesIndex-1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const inactiveElements = document.querySelectorAll('.inactive');
  const activeElement = document.getElementById('active');
  
  
  inactiveElements.forEach(function(inactive) {
    inactive.addEventListener('mouseover', function() {
      activeElement.style.color = '#1d1d1f';
      
    });
    
    inactive.addEventListener('mouseout', function() {
      activeElement.style.color = '#006600';
    });
  });
});

function moreDetail(slider1,num){
  var slider2 = document.getElementById("slider-one");
  var slide = slider2.getElementsByClassName("slide")[num-1];
  var cert_text2 = slide.getElementsByClassName("cert-text2")[0];
  var cer = slide.getElementsByClassName("cer")[0];
  
  // cer.innerHTML = "Less Detail";
  if(cert_text2.style.display == "block"){
    slide.style.minHeight = "";
    cert_text2.style.display = "";
    cert_text2.style.color = ""
    cer.innerHTML = "View Detail";
  }else{
    slide.style.minHeight = "65vh";
    setTimeout(() => {
      cert_text2.style.display = "block";
  }, 250);
    setTimeout(() => {
      cert_text2.style.color = "rgba(29, 29, 31, 1)"
  }, 1000);
    
    cer.innerHTML = "Less Detail";
  }
  var slider3 = document.getElementById("slider-two");
  var slide1 = slider3.getElementsByClassName("slide")[num-1];
  var cert_text21 = slide1.getElementsByClassName("cert-text2")[0];
  var cer1 = slide1.getElementsByClassName("cer")[0];
  
  // cer.innerHTML = "Less Detail";
  if(cert_text21.style.display == "block"){
    slide1.style.minHeight = "";
    cert_text21.style.display = "";
    cert_text21.style.color = ""
    cer1.innerHTML = "View Detail";
  }else{
    slide1.style.minHeight = "65vh";
    setTimeout(() => {
      cert_text21.style.display = "block";
  }, 250);
    setTimeout(() => {
      cert_text21.style.color = "rgba(29, 29, 31, 1)"
  }, 1000);
    
    cer1.innerHTML = "Less Detail";
  }
}