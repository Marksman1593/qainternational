function openseseme(){
    const question = document.getElementById('question');
    question.classlist.toggle('open');
}
const colors = ["#006600", "#0c61ab"];
let colorIndex = 0;
var acc = document.getElementById('top');
var i;
acc.addEventListener("click", function() {
    var ques = document.getElementById('question');
    ques.classList.toggle("open");
    this.style.backgroundColor = colors[colorIndex];

  // Increment colorIndex and wrap around if necessary
  colorIndex = (colorIndex + 1) % colors.length;
});

function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.categories');
    categories.forEach(category => {
      if (category.id === categoryId) {
        category.classList.add('active');
        const slide = category.querySelector('.slide1');
        slide.style.transform = 'translateX(0%)';
        const cls1 = category.querySelectorAll('.cls-1');
        cls1.forEach(cls => {
            cls.style.fill ='#fff';
        });
        const cls3 = category.querySelectorAll('.cls-3');
        cls3.forEach(cls => {
            cls.style.stroke ='#fff';
        });
        const p = category.querySelector('.p');
        p.style.color = "#fff";
    } else {
        category.classList.remove('active');
        const slide = category.querySelector('.slide1');
        slide.style.transform = '';
        const computedStyle = window.getComputedStyle(slide);
        const cls1 = category.querySelectorAll('.cls-1');
        cls1.forEach(cls => {
            cls.style.fill ='#1d1d1f';
        });
        const cls3 = category.querySelectorAll('.cls-3');
        cls3.forEach(cls => {
            cls.style.stroke ='#1d1d1f';
        });
        const p = category.querySelector('.p');
        p.style.color = "#1d1d1f";
    }

    });
  }
