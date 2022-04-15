//loading-page
var loader = document.getElementById("preload");
window.addEventListener("load", function() {
    loader.style.display = "none";
})

var animationElements = document.querySelectorAll('.show-on-scroll');

function animationElementInWindow(element) {
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight

    //check xem element có bên trong màn hình hay không
    if (!(rect.top > heightScreen)) {
        element.classList.add('start')
    } else {
        element.classList.remove('start')
    }

}

function checkAnimation() {
    animationElements.forEach(el => {
        animationElementInWindow(el)
    })
}


//toggle nav
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.ph__secondary__menu');


burger.addEventListener('click', () => {
    nav.classList.toggle('nav_active');
    burger.classList.toggle('toggle');
})

const burgermobile = document.querySelector('.mobile .hamburger');
const navmobile = document.querySelector('.ph__mobile__menu');


burgermobile.addEventListener('click', () => {
    navmobile.classList.toggle('nav_active_mobile');
    burgermobile.classList.toggle('toggle');
})






window.onscroll = function() { myFunction(), checkAnimation() };

//get the header
var header = document.getElementById("page__header");

//get the ofset position of the navbar
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//show on scroll

//scroll left row slider

var items = document.querySelector(".row__slider")
let isMouseDown = false
let startX, scrollLeft

items.addEventListener('mousedown', (e) => {
    isMouseDown = true
    startX = e.pageX - items.offsetLeft
    scrollLeft = items.scrollLeft
})
items.addEventListener('mouseleave', () => {
    isMouseDown = false
})
items.addEventListener('mouseup', () => {
    isMouseDown = false
})
items.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return

    const x = e.pageX - items.offsetLeft
        // 3 là tốc độ scroll
    const walk = (x - startX) * 3
    items.scrollLeft = scrollLeft - walk
})