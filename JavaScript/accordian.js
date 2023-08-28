const top1 = document.querySelectorAll('.top');
top1.forEach(acc => {
    acc.addEventListener("click", function() {
        const ques = this.closest('.question');
        ques.classList.toggle("open");
        const ans = ques.querySelector('.answer');
        if(ques.classList.contains("open")){
            acc.querySelector('.arrow').innerHTML = '-';
            acc.style.backgroundColor = "#006600";  
            ans.style.display = "block";
            setTimeout(() => {
                ans.style.opacity = "1";
            }, 250);
            // ans.style.opacity = "1";
        }else{
            acc.querySelector('.arrow').innerHTML = '+';
            acc.style.backgroundColor = "#0c61ab";
            ans.style.display = "";
            ans.style.opacity = "";
        }
    });
});


function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.categories');
    let index = 0;
    categories.forEach(category => {
        
        const slider = document.querySelectorAll('.slider');
        if (category.id === categoryId) {
            console.log(index);
            slider[index].classList.remove("begone");
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
            console.log(index);
            slider[index].classList.add("begone");
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
        index++;
    });
}
