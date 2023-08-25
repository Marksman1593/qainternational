// const slider = document.querySelector(".horizontal-slider");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 1; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
// });

// slider.addEventListener("scroll", () => {
//   if (slider.scrollLeft + sliderWidth >= content.offsetWidth) {
//     slider.scrollLeft = 0; // Reset scroll position to the beginning
//   }
// });


function checkForm(){
  var name1 = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var company = document.getElementById("company").value;
  var service = document.getElementById("cars").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var submitButton = document.getElementById("submit");
  var checkboxButton = document.getElementById("newsletter");
  var AFR = document.getElementById("AFR");

  if (name1 !== "" && email !== "" && company !== "" && service !== "" && emailPattern.test(email)) {
    // submitButton.disabled = false;
    submitButton.classList.remove("disabled");
    submitButton.removeAttribute("disabled");
    checkboxButton.removeAttribute("disabled");
    AFR.style.color = "#006600";

  } else {
  // submitButton.disabled = true;
  submitButton.classList.add("disabled");
  submitButton.setAttribute("disabled", "disabled");
  checkboxButton.setAttribute("disabled", "disabled");
  AFR.style.color = "#d7d7d7";
  }
}

function sendEmail(){
  var msg = "No Comment."
  var news = "Not subscribed to newsletter."
  var comment = document.getElementById("comments").value;
  if(comment !== ""){
      msg = comment;
  }

  var cb = document.getElementById("newsletter");
  if(cb.checked){
      news = "Subscribed to newsletter."
  }

  console.log(msg + "\n" + news)
  
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "bilalazfar1593@gmail.com",
      Password : "C8AA68DD73AF589B5DDCB6CCB3E0A4470D83",
      To : 'bscs2012242@szabist.pk',
      From : "bilalazfar1593@gmail.com",
      Subject : document.getElementById("company").value + ", " + document.getElementById("name").value + ", Contact us Enquiry",
      Body : msg + "\n\n" + document.getElementById("email").value + "\n\n" + news
  }).then(
    alert("Email sent")
 // message => alert(message)
  );
}

const pictures = ["Pictures/Slider-01.jpg", "Pictures/Slider-02.jpg"];
const qoutes = ["QA INTERNATIONAL 1", "QA INTERNATIONAL 2"];
const slideshow = document.getElementsByClassName("slideshow");

// for(var i = 0; i < 1; i++){
//   classadd();
//   const img = slideshow[0].querySelector("img");
//     console.log(i);
//     setInterval(function(){
//       img.setAttribute("src", pictures[i]);
//       console.log(pictures[i]);
//     }, 5000);
//   const img1 = slideshow[1].querySelector("img");
//   console.log(i);
//   img1.setAttribute("src", pictures[i]);
//   console.log(pictures[i])
//   setInterval(function(){
//     classremove();   
//   }, 7000);  
// }
slideshower()

function slideshower(){
  for(var i = 0; i < slideshow.length; i++){
    classadd();
    var img = slideshow[i].querySelector("img");
    console.log(img);
    console.log(pictures[i]);

    setTimeout(function(){
      img.setAttribute("src", pictures[i]);
    }, 7000)
  }
}

function classadd(){
  slideshow[0].classList.add("animate");
  slideshow[1].classList.add("animate");
}

function classremove(){
  slideshow[0].classList.remove("animate");
  slideshow[1].classList.remove("animate");
}
    
