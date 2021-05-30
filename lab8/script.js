let burger = document.getElementById('burger');
line1 = document.getElementById('line1');
line2 = document.getElementById('line2');
line3 = document.getElementById('line3');

burger.addEventListener('click', function(){
    line1.classList.toggle('line1-animate');
    line2.classList.toggle('line2-animate');
    line3.classList.toggle('line3-animate');
});

let switcher = document.getElementById('switch');
let lamp = document.getElementById('lamp');
switcher.addEventListener('click', function(){
    lamp.classList.toggle('light')
})

