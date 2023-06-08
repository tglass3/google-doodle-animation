console.log('ready to go!');

// let swordPull = Math.floor(Math.random() * 100) + 1;

let swordPull = 42;

const doodle = document.querySelector('#stage');


stage.addEventListener('click', item => {
if (swordPull == 42) {
    console.log(swordPull);
    
    gsap.to('#sword', {duration: 1, x: 0, y: -65}, yoyo);

    swordPull = Math.floor(Math.random() * 100) + 1;
}

else {
    console.log(swordPull)

    gsap.to('#sword', {duration: 1, x: 0, y: 0});
    
    swordPull = Math.floor(Math.random() * 100) + 1;
}

});