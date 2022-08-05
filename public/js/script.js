const navbtn = document.querySelector('.mobile-nav');
const nav_header = document.querySelector('.nav-main');

const showMenu = () =>{
    nav_header.classList.toggle('active')
}

navbtn.addEventListener('click',showMenu);
