//Surprise Mechanics
const surpiseButtonElement = document.getElementById('test-btn')

//Random Button
const shitButtonElement = document.getElementById('random')




//Main function -- accurately named
function blorp() {
    surpiseButtonElement.addEventListener('click', test)
    shitButtonElement.addEventListener('click', shit)
}

//For science...
function test() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}

//For shit
var randWordsArr = [
    'penis',
    'vagina',
    'donut != marshmellow',
    'I can\'t spell orangitang',
    'there is a 1/100 chance you get this sentence.',
    'oink oink motherfucker',
    'The visually impaired have trouble breathing underwater.',
    'After rigorous testing, I can confirm with 98% certainty that I am not a cat',
    'The tyrannosaurus rex is well known to have existed.',
    'Many people don\'t think about the fact that frogs do not wear hats',
    'Writing strings that include the character \" in code is very annoying',
    'Most humans in the solar system exist within Earth\'s atmosphere',
    'There is not a clear correlation between Pterydactyls and the Leaning Tower of Piza',
    'Optimus Prime is spelled starting with the letter O',
    'If you drink 16 pounds of melted butter, you may be eligible for a trip to the hospital',
    'Some of these facts are incredibly stupid, some aren\'t facts, and none are written in German',
    'Taco stands for Tshell Alettuce Cmeat Ocheese.',
    'A cat is not a dog',
    'War. War never changes.',
    'After a rainy day, it will be wet.',
    'A man who runs in front of a car gets tired',
    'A man who runs behind a car gets exhaused',
    'A man who streaks his way to the office is unsuited for the job',
    'A man who keeps his feet firmly on the ground has trouble putting on his pants',
    'A man who eats crackers in bed wakes up feeling crummy',
    'One difference between Turtles and Tortoises are that they are not the same',
    'If you are not sure the difference between there their and they\'re, you probably have never tried to eat a palm tree',
    'Honey does not spoil'







]
var randInt = 0;
var randomWord = ''

function shit() {
    randInt = getRandomInt(0, randWordsArr.length - 1);
    randomWord = randWordsArr[randInt]
    alert(randomWord)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

blorp()