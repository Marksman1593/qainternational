
function handleIntersection5(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add('floater-space-after');
            
            // Add the class for 1 second, then remove it
            
            
            observer.unobserve(entry.target);
        }
    });
  }
  
  // Create an Intersection Observer instance for .pics
  const observer5 = new IntersectionObserver(handleIntersection5, { threshold: 0.0 });
  
  // Observe the .pics element
  const floaters = document.querySelectorAll('.floater-space');
  floaters.forEach(element => {
      observer5.observe(element);
  });

const history1 = document.getElementById("history");
const timeline = document.getElementById("timeline");

  function changeslide(num){
    if(num == 2){
        timeline.style.display = "block";
        history1.style.display = "none";
    }
    else{
        history1.style.display = "block";
        timeline.style.display = "none";
    }
  }