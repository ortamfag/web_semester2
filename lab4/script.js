const getEl = sel => document.querySelector(sel)

const cloudAnim1 = anime({
    targets: '.cloud1',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 30000,
});

const cloudAnim2 = anime({
    targets: '.cloud2',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 35000,
});

const cloudAnim3 = anime({
    targets: '.cloud3',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 45000,
});


const cloudAnim4 = anime({
    targets: '.cloud4',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 28000,
});

const play = getEl('.play')
const pause = getEl('.pause')

const cloud1 = getEl('.cloud1');
const cloud2 = getEl('.cloud2');
const cloud3 = getEl('.cloud3');
const cloud4 = getEl('.cloud4');

play.addEventListener('click', () => {
    cloudAnim1.play();
    cloudAnim2.play();
    cloudAnim3.play();
    cloudAnim4.play();
});

pause.addEventListener('click', () => {
    cloudAnim1.pause();
    cloudAnim2.pause();
    cloudAnim3.pause();
    cloudAnim4.pause();
})