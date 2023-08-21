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
//   console.log(walk);
// });

const slider = document.querySelector(".horizontal-slider");
const content = slider.querySelector(".slider-content");
const sliderWidth = slider.offsetWidth;
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("scroll", () => {
  if (slider.scrollLeft + sliderWidth >= content.offsetWidth) {
    slider.scrollLeft = 0; // Reset scroll position to the beginning
  }
});


function checkForm(){
  var name1 = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var company = document.getElementById("company").value;
  var service = document.getElementById("cars").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var submitButton = document.getElementById("submit");
  var checkboxButton = document.getElementById("newsletter");

  if (name1 !== "" && email !== "" && company !== "" && service !== "" && emailPattern.test(email)) {
    // submitButton.disabled = false;
    submitButton.classList.remove("disabled");
    submitButton.removeAttribute("disabled");
    checkboxButton.removeAttribute("disabled");

  } else {
  // submitButton.disabled = true;
  submitButton.classList.add("disabled");
  submitButton.setAttribute("disabled", "disabled");
  checkboxButton.setAttribute("disabled", "disabled");
  }
}

// function validateEmail() {
//   // Get the email input field
//   const emailInput = document.getElementById("emailInput");

//   // Get the validation message element
//   const validationMessage = document.getElementById("validationMessage");

//   // Regular expression to match a valid email format
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//   // Check if the entered email matches the valid format
//   if (emailPattern.test(emailInput.value)) {
//       validationMessage.textContent = "Email is valid!";
//       validationMessage.style.color = "green";
//   } else {
//       validationMessage.textContent = "Invalid email format. Please enter a valid email.";
//       validationMessage.style.color = "red";
//   }
// }
