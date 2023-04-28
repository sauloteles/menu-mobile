const btnMenu = document.getElementsByClassName('header__btn')[0];
const nav = document.getElementsByClassName('header__nav')[0];

console.log(nav)

const toggleMenu = (event)=>{
    if(event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');

}

btnMenu.addEventListener('click',toggleMenu);
btnMenu.addEventListener('touchstart',toggleMenu);
