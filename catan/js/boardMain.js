/*

CATAN TO-DO LIST
1. Adjacency stuff
2. fuck

*/

// THE FOLLOWING FUNCTIONS ALLOW YOU TO CHANGE THE HEX PLACEMENT AND UPDATES THE DISPLAY ACCORDINGLY 
function selectHex(hexID) {
    infoLabel.innerHTML = 'Hex ' + hexArray[hexID].hexName + ' Selected';
    hexResourceLabel.innerHTML = 'Resource: ' + hexArray[hexID].hexResourceName;
    hexDiceNumberLabel.innerHTML = 'Number: ' + hexArray[hexID].hexDiceNumber;

    selectedHexID = hexArray[hexID].hexID;
    showHexInfo();
}

function showHexInfo() {

    hexResourceLabel.innerHTML = 'Resource: ' + hexArray[selectedHexID].hexResourceName;
    hexDiceNumberLabel.innerHTML = 'Number: ' + hexArray[selectedHexID].hexDiceNumber;

    const selectorBtnArray = new Array(6);
    const hexDiceNumberBtnArray = new Array(11);
    const resourceArray = ['sheep', 'tree', 'rock', 'mud', 'wheat', 'sand'];

    for (i = 0; i < selectorBtnArray.length; i++) {
        //creates buttons with event listeners 
        selectorBtnArray[i] = document.querySelectorAll('.hexResourceSelector')[i];
        const s = i;
        selectorBtnArray[i].addEventListener('click', function () { replaceHexResource(resourceArray[s]) });
    }

    for (i = 0; i < hexDiceNumberBtnArray.length; i++) {
        //creates buttons with event listeners 
        hexDiceNumberBtnArray[i] = document.querySelectorAll('.hexDiceNumber')[i];
        const s = i + 2;
        hexDiceNumberBtnArray[i].addEventListener('click', function () { replaceHexDiceNumber(s) });
    }
}
function replaceHexDiceNumber(num) {
    hexArray[selectedHexID].hexDiceNumber = num;
    hexDiceNumberLabel.innerHTML = 'Number: ' + num;

    const currentHex = document.querySelectorAll('.hex')[selectedHexID];
    switch (num) {
        case 0:
            currentHex.innerHTML = '';
            currentHex.style.color = 'black';
            break;
        case 2:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 2 </p>";
            currentHex.style.color = 'black';
            break;
        case 3:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 3 </p>";
            currentHex.style.color = 'black';
            break;
        case 4:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 4 </p>";
            currentHex.style.color = 'black';
            break;
        case 5:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 5 </p>";
            currentHex.style.color = 'black';
            break;
        case 6:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 6 </p>";
            currentHex.style.color = 'rgb(117, 15, 7)';
            break;
        case 7:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 7 </p>";
            currentHex.style.color = 'black';
            break;
        case 8:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 8 </p>";
            currentHex.style.color = 'rgb(117, 15, 7)';
            break;
        case 9:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 9 </p>";
            currentHex.style.color = 'black';
            break;
        case 10:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 10 </p>";
            currentHex.style.color = 'black';
            break;
        case 11:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 11 </p>";
            currentHex.style.color = 'black';
            break;
        case 12:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 12 </p>";
            currentHex.style.color = 'black';
            break;
        default:
            console.log('error: in function: replaceHexDiceNumber | the num does not exist: ' + num);
            break;
    }
}
function replaceHexResource(resource) {
    hexArray[selectedHexID].hexResourceName = resource;
    hexResourceLabel.innerHTML = 'Resource: ' + resource;

    const currentHex = document.querySelectorAll('.hex')[selectedHexID];
    switch (resource) {
        case 'sheep':
            currentHex.style.background = "url('/images/catan/sheep.png')";
            currentHex.style.backgroundSize = '200px 220px';
            break;
        case 'tree':
            currentHex.style.background = "url('/images/catan/tree.png')";
            currentHex.style.backgroundSize = '200px 220px';
            break;
        case 'rock':
            currentHex.style.background = "url('/images/catan/rock.png')";
            currentHex.style.backgroundSize = '200px 220px';
            break;
        case 'mud':
            currentHex.style.background = "url('/images/catan/mud.png')";
            currentHex.style.backgroundSize = '200px 220px';
            break;
        case 'wheat':
            currentHex.style.background = "url('/images/catan/wheat.png')";
            currentHex.style.backgroundSize = '200px 220px';

            break;
        case 'sand':
            currentHex.style.background = "url('/images/catan/sand.png')";
            currentHex.style.backgroundSize = '200px 220px';
            break;
        default:
            console.log('replaceHexBackground: No resource identified');
            break;
    }
}
const testBtn69 = document.getElementById('scrambleBoardBtn');
testBtn69.addEventListener('click', function () {
    board.generateRandomBoard();
})

//for shuffling arrays (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//WHAT TO DO NEXT??




//START
const board = new Board();
board.initializeBoard(0);