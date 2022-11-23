document.addEventListener("DOMContentLoaded", function(){

const nav = document.querySelector('.navbar');
const showList = document.querySelector(".navbar-collapse");
const menuItems = document.querySelectorAll(".nav-link");

function addSchadow (){
    if (window.scrollY>=120){
        nav.classList.add('shadow-bg');
    }
    else{
        nav.classList.remove('shadow-bg');
    }
}

menuItems.forEach(list => {
    list.addEventListener('click', () => 
    showList.classList.remove('show'))
});

window.addEventListener('scroll', addSchadow);

});

