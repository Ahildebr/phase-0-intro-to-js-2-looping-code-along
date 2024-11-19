// Code your solutions in this file
const names = ["Aly", "Aidan", "Rabbi"];

function writeCards(names) {
    for (let i = 0; i < names.length; i++ ) {
        console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
        
    }
   return names;
}

writeCards(names);
///////////////////////////////////////
function writeCardsWhile(names) {
    let i = 0; 
    while (i < names.length) {
        console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
        i++
    }
   return names;
}
writeCardsWhile(names)
/////////////////////////////////////

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