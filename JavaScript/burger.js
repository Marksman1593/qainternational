function openDrawer(burger){

    var patties = burger.getElementsByClassName("burger-patty");
    patties[0].classList.toggle("patty1");
    patties[1].classList.toggle("patty2");
    patties[2].classList.toggle("patty3");

    var menu = document.getElementsByClassName("menu");
    if(patties[0].classList.contains("patty1")){
        menu[0].style.transform = 'translateX(0%)';
    }else{
        menu[0].style.transform = 'translateX(-100%)';
    }
}