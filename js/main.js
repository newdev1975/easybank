const hamburger_icon = document.querySelector('#hamburger_icon');
const mobile_nav = document.querySelector('.mobile_nav'); 
const close_item = document.querySelector('#close'); 
let nav_size = 0;

hamburger_icon.addEventListener('click', () => {
    mobile_nav.style.display = 'flex';
});

close_item.addEventListener('click', () => {
    mobile_nav.style.display = 'none';
});

window.addEventListener('resize', () => {
    nav_size = window.innerWidth;
    if(nav_size > 756){
        mobile_nav.style.display = 'none';
    }
});
    


