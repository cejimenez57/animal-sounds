// TODO: 
// 1. Have a unique sound for each animal
// 2. Download all animal sounds
// 3. Maybe: Switch Break loop?

// FIXME:
// 1. Make each sound generate different according to animal
const animalNoise = document.querySelector('.animal');
var audio = new Audio("/audio/horse.mp3");


animalNoise.addEventListener("click", function(){
    audio.play();
});