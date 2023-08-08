let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
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

// Create an Intersection Observer instance for .pics
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
          
          // Add the class for 1 second, then remove it
          setTimeout(() => {
              entry.target.classList.remove('initiate');
          }, 1000);
          
          observer.unobserve(entry.target);
      }
  });
}

// Create an Intersection Observer instance for .pics
const observer2 = new IntersectionObserver(handleIntersection1, { threshold: 0.5 });

// Observe the .pics element
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
  // INJECT CSS
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
  // Get the elements
  const inactiveElements = document.querySelectorAll('.inactive');
  const activeElement = document.getElementById('active');
  
  
  // Add mouseover event to each inactive element
  inactiveElements.forEach(function(inactive) {
    inactive.addEventListener('mouseover', function() {
      // Change the style of the active element
      activeElement.style.color = '#1d1d1f';
      
    });
    
    // Add mouseout event to each inactive element (optional)
    inactive.addEventListener('mouseout', function() {
      // Restore the original style of the active element
      activeElement.style.color = '#006600';
    });
  });
});

