function openDrawer(burger){
    // var burger = document.getElementsByClassName("burger");
    console.log(burger);

    var patties = burger.getElementsByClassName("burger-patty");
    patties[0].classList.toggle("patty1");
    patties[1].classList.toggle("patty2");
    patties[2].classList.toggle("patty3");
}