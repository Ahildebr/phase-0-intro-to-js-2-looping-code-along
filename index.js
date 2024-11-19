// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, surprise) {
   const thankYouCards = [];
    for (let i = 0; i < names.length; i++ ) {
        thankYouCards[i] = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
        
    }
   return thankYouCards;
}

writeCards(names);


const time = 10
function countDown(time) {
   // let time = 10
    while (time >= 0) {
        console.log(time)
        time--;
    }
    return time
}
countDown(time)