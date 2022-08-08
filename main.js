const togglebtn = document.querySelector('.navbar_togglebtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togglebtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

document.querySelector('.btn2').addEventListener('click',function(){
    document.querySelector('.main').style.transform = 'translate(-100vw)';
});
document.querySelector('.btn3').addEventListener('click',function(){
    document.querySelector('.main').style.transform = 'translate(-200vw)';
});
document.querySelector('.btn1').addEventListener('click',function(){
    document.querySelector('.main').style.transform = 'translate(0vw)';
});