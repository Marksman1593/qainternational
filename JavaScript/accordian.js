const top1 = document.querySelectorAll('.top');
top1.forEach(acc => {
    acc.addEventListener("click", function() {
        const ques = this.closest('.question');
        ques.classList.toggle("open");
        if(ques.classList.contains("open")){
            console.log(acc.querySelector('.arrow').innerHTML = '-');
            acc.style.backgroundColor = "#006600";
        }else{
            console.log(acc.querySelector('.arrow').innerHTML = '+');
            acc.style.backgroundColor = "#0c61ab";
        }
    });
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
            cls.style.fill ='';
        });
        const cls3 = category.querySelectorAll('.cls-3');
        cls3.forEach(cls => {
            cls.style.stroke ='';
        });
        const p = category.querySelector('.p');
        p.style.color = "";
    }

    });
  }
