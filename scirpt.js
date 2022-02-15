const menuNavbar = document.querySelector(".menu");
const toggleBtn = document.querySelector(".toggle-arrow");
const arrowBtn = document.querySelector(".fa-arrow-left");
const menuIcon = document.querySelector(".menu-icon");

const navToggleHandler = ()=>{
    arrowBtn.style.transform = 'rotate(180deg)';
    // menuIcon.textContent = '';
}

toggleBtn.addEventListener('click',navToggleHandler);
