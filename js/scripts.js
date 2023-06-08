
console.log('ready to go!');

let swordPull = Math.floor(Math.random() * 50) + 1;

// let swordPull = 40;


const doodle = document.querySelector('#stage');



stage.addEventListener('click', item => {
if (swordPull == 25) {
    console.log(swordPull);
    
    gsap.to('#sword', {duration: 1, x: 0, y: -65, yoyo: 'true', repeat: 1, repeatDelay: 2});

    swordPull = Math.floor(Math.random() * 50) + 1;
}

else {
    console.log(swordPull)

    // gsap.to('#sword', {duration: .075, x:-2, yoyo: 'true', repeat: 1});
    gsap.to('#sword', 0.1, {x:"2", yoyo:'true', repeat:3});
    gsap.to('#sword', 0.1, {x:"-2", yoyo:'true', repeat:3});
    
    
    swordPull = Math.floor(Math.random() * 50) + 1;
}

});