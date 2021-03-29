// create random names and motto words
const fName = ['Captain','Night','The','Anchient','Spider','Invisible','Master','Mr','Silver','Dark',
                'Professor','Radioactive','Incredible','Impossible','Iron','Rocket','Power','Super','Wonder','Metal',
                'Doctor','Masked','Omega','Crimson'];
const lName = ['Lightning','Knight','Centurion','Warrior','Ghost','Hornet','Phantom','Crusader','Daredevil',
                'Machine','X','Doom','Fist','Shadow','Claw','Torch','Soldier','Skull'];
const mottoWords = ['save','improve','fix','ruin','brighten','darken','mess up','lift up','jumble up'];
// number generator 
function numGen(num) {
    return Math.floor(Math.random() * num);
}
// name generator, using numGen 
function nameGen() {
    let first = fName[numGen(fName.length)];
    let last = lName[numGen(lName.length)];
    return first + ' ' + last;
}
// final generator, uses nameGen and numGen for motto
function generateHero() {
    let name = nameGen();
    let motto = mottoWords[numGen(mottoWords.length)];
    console.log(`I am ${name}! Here I come to ${motto} the day!`);
}

generateHero()