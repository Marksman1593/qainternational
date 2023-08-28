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

    
