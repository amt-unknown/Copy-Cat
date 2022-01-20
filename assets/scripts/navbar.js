//Menu-Button Toggle
const menuClick = document.querySelector('.navbar-toggler');
const headerDisplay = document.querySelector('header').style.display;
const mainDisplay = document.querySelector('main').style.display;
const footerDisplay = document.querySelector('footer').style.display;
const asideDisplay = document.querySelector('aside').style.display;


function ShowBag(){
    if(!click){
        click=true;
        document.querySelector("#store-bag-collapsed").style = "opacity: 0";
        document.querySelector('header').style.display = "none";
        document.querySelector('main').style.display = "none";
        document.querySelector('footer').style.display = "none";
        document.querySelector('aside').style.display = "none";
    }
    else{
        click=false;
        document.querySelector("#store-bag-collapsed").style = "opacity: 100";
        document.querySelector('header').style.display = headerDisplay;  
        document.querySelector('main').style.display = mainDisplay;
        document.querySelector('footer').style.display = footerDisplay;
        document.querySelector('aside').style.display = asideDisplay;      
    }
}

var click = false;
menuClick.addEventListener('click', ShowBag);
console.log('hello');
