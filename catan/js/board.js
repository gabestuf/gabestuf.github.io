let hexArray, selectedHex;
selectedHexID = '69';
const hexResourceLabel = document.getElementById('hexResource');
const hexDiceNumberLabel = document.getElementById('hexDiceNumber');

var testP = document.getElementById('testP');

class Hex {
    constructor(hexName_, hexID_, hexResourceName_, hexDiceNumber_, hasRobber_) {
        this.hexName = hexName_;
        this.hexID = hexID_;
        this.hexResourceName = hexResourceName_;
        this.hexDiceNumber = hexDiceNumber_;
        this.hasRobber = hasRobber_;
    }
}
hexArray = [
    new Hex('A', 0, '', '', false),
    new Hex('B', 1, '', '', false),
    new Hex('C', 2, '', '', false),
    new Hex('D', 3, '', '', false),
    new Hex('E', 4, '', '', false),
    new Hex('F', 5, '', '', false),
    new Hex('G', 6, '', '', false),
    new Hex('H', 7, '', '', false),
    new Hex('I', 8, '', '', false),
    new Hex('J', 9, '', '', false),
    new Hex('K', 10, '', '', false),
    new Hex('L', 11, '', '', false),
    new Hex('M', 12, '', '', false),
    new Hex('N', 13, '', '', false),
    new Hex('O', 14, '', '', false),
    new Hex('P', 15, '', '', false),
    new Hex('Q', 16, '', '', false),
    new Hex('R', 17, '', '', false),
    new Hex('S', 18, '', '', false)
];

const hexABtn = document.querySelectorAll('.hex')[0];
const hexBBtn = document.querySelectorAll('.hex')[1];
const hexCBtn = document.querySelectorAll('.hex')[2];
const hexDBtn = document.querySelectorAll('.hex')[3];
const hexEBtn = document.querySelectorAll('.hex')[4];
const hexFBtn = document.querySelectorAll('.hex')[5];
const hexGBtn = document.querySelectorAll('.hex')[6];
const hexHBtn = document.querySelectorAll('.hex')[7];
const hexIBtn = document.querySelectorAll('.hex')[8];
const hexJBtn = document.querySelectorAll('.hex')[9];
const hexKBtn = document.querySelectorAll('.hex')[10];
const hexLBtn = document.querySelectorAll('.hex')[11];
const hexMBtn = document.querySelectorAll('.hex')[12];
const hexNBtn = document.querySelectorAll('.hex')[13];
const hexOBtn = document.querySelectorAll('.hex')[14];
const hexPBtn = document.querySelectorAll('.hex')[15];
const hexQBtn = document.querySelectorAll('.hex')[16];
const hexRBtn = document.querySelectorAll('.hex')[17];
const hexSBtn = document.querySelectorAll('.hex')[18];

hexABtn.addEventListener('click', function () { selectHex(0) });
hexBBtn.addEventListener('click', function () { selectHex(1) });
hexCBtn.addEventListener('click', function () { selectHex(2) });
hexDBtn.addEventListener('click', function () { selectHex(3) });
hexEBtn.addEventListener('click', function () { selectHex(4) });
hexFBtn.addEventListener('click', function () { selectHex(5) });
hexGBtn.addEventListener('click', function () { selectHex(6) });
hexHBtn.addEventListener('click', function () { selectHex(7) });
hexIBtn.addEventListener('click', function () { selectHex(8) });
hexJBtn.addEventListener('click', function () { selectHex(9) });
hexKBtn.addEventListener('click', function () { selectHex(10) });
hexLBtn.addEventListener('click', function () { selectHex(11) });
hexMBtn.addEventListener('click', function () { selectHex(12) });
hexNBtn.addEventListener('click', function () { selectHex(13) });
hexOBtn.addEventListener('click', function () { selectHex(14) });
hexPBtn.addEventListener('click', function () { selectHex(15) });
hexQBtn.addEventListener('click', function () { selectHex(16) });
hexRBtn.addEventListener('click', function () { selectHex(17) });
hexSBtn.addEventListener('click', function () { selectHex(18) });

function selectHex(hexID) {
    testP.innerHTML = 'Hex ' + hexArray[hexID].hexName + ' Selected';
    hexResourceLabel.innerHTML = 'Resource: ' + hexArray[hexID].hexResourceName;
    hexDiceNumberLabel.innerHTML = 'Number: ' + hexArray[hexID].hexDiceNumber;

    selectedHexID = hexArray[hexID].hexID;
    showHexInfo();
}

function showHexInfo() {

    hexResourceLabel.innerHTML = 'Resource: ' + hexArray[selectedHexID].hexResourceName;
    hexDiceNumberLabel.innerHTML = 'Number: ' + hexArray[selectedHexID].hexDiceNumber;

    const woolSelectorBtn = document.querySelectorAll('.hexResourceSelector')[0];
    const treeSelectorBtn = document.querySelectorAll('.hexResourceSelector')[1];
    const rockSelectorBtn = document.querySelectorAll('.hexResourceSelector')[2];
    const mudSelectorBtn = document.querySelectorAll('.hexResourceSelector')[3];
    const wheatSelectorBtn = document.querySelectorAll('.hexResourceSelector')[4];
    const sandSelectorBtn = document.querySelectorAll('.hexResourceSelector')[5];

    woolSelectorBtn.addEventListener('click', function () { replaceHexResource('wool') });
    treeSelectorBtn.addEventListener('click', function () { replaceHexResource('tree') });
    rockSelectorBtn.addEventListener('click', function () { replaceHexResource('rock') });
    mudSelectorBtn.addEventListener('click', function () { replaceHexResource('mud') });
    wheatSelectorBtn.addEventListener('click', function () { replaceHexResource('wheat') });
    sandSelectorBtn.addEventListener('click', function () { replaceHexResource('sand') });

    const hexDiceNumberBtn2 = document.querySelectorAll('.hexDiceNumber')[0];
    const hexDiceNumberBtn3 = document.querySelectorAll('.hexDiceNumber')[1];
    const hexDiceNumberBtn4 = document.querySelectorAll('.hexDiceNumber')[2];
    const hexDiceNumberBtn5 = document.querySelectorAll('.hexDiceNumber')[3];
    const hexDiceNumberBtn6 = document.querySelectorAll('.hexDiceNumber')[4];
    const hexDiceNumberBtn7 = document.querySelectorAll('.hexDiceNumber')[5];
    const hexDiceNumberBtn8 = document.querySelectorAll('.hexDiceNumber')[6];
    const hexDiceNumberBtn9 = document.querySelectorAll('.hexDiceNumber')[7];
    const hexDiceNumberBtn10 = document.querySelectorAll('.hexDiceNumber')[8];
    const hexDiceNumberBtn11 = document.querySelectorAll('.hexDiceNumber')[9];
    const hexDiceNumberBtn12 = document.querySelectorAll('.hexDiceNumber')[10];

    hexDiceNumberBtn2.addEventListener('click', function () { replaceHexDiceNumber(2) });
    hexDiceNumberBtn3.addEventListener('click', function () { replaceHexDiceNumber(3) });
    hexDiceNumberBtn4.addEventListener('click', function () { replaceHexDiceNumber(4) });
    hexDiceNumberBtn5.addEventListener('click', function () { replaceHexDiceNumber(5) });
    hexDiceNumberBtn6.addEventListener('click', function () { replaceHexDiceNumber(6) });
    hexDiceNumberBtn7.addEventListener('click', function () { replaceHexDiceNumber(7) });
    hexDiceNumberBtn8.addEventListener('click', function () { replaceHexDiceNumber(8) });
    hexDiceNumberBtn9.addEventListener('click', function () { replaceHexDiceNumber(9) });
    hexDiceNumberBtn10.addEventListener('click', function () { replaceHexDiceNumber(10) });
    hexDiceNumberBtn11.addEventListener('click', function () { replaceHexDiceNumber(11) });
    hexDiceNumberBtn12.addEventListener('click', function () { replaceHexDiceNumber(12) });
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
            currentHex.style.color = 'red';
            break;
        case 7:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 7 </p>";
            currentHex.style.color = 'black';
            break;
        case 8:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 8 </p>";
            currentHex.style.color = 'red';
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
        case 'wool':
            currentHex.style.background = "url('/images/catan/wool.png')";
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



const testBtn69 = document.getElementById('test69');
testBtn69.addEventListener('click', function () {
    // for (i = 0; i < hexArray.length; i++) {
    //     console.log(hexArray[i].hexName);
    //     console.log(hexArray[i].hexID);
    //     console.log(hexArray[i].hexResourceName);
    //     console.log(hexArray[i].hexDiceNumber);
    //     console.log(hexArray[i].hasRobber);
    // }
    generateRandomBoard();
})

function generateRandomBoard() {
    var possibleResourcesArray = ['wool', 'wool', 'wool', 'wool', 'wheat', 'wheat', 'wheat', 'wheat', 'mud', 'mud', 'mud', 'sand', 'rock', 'rock', 'rock', 'tree', 'tree', 'tree', 'tree'];
    shuffleArray(possibleResourcesArray);
    var possibleNumbersArray = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
    shuffleArray(possibleNumbersArray);

    for (i = 0; i < hexArray.length; i++) {
        const resource = possibleResourcesArray.pop();
        if (resource == 'sand') {
            selectedHexID = i;
            hexArray[i].hexResourceName = resource;
            hexArray[i].hexDiceNumber = 'NULL';
            replaceHexResource(resource);
            replaceHexDiceNumber(0);
        } else {
            const number = possibleNumbersArray.pop();
            selectedHexID = i;
            hexArray[i].hexResourceName = resource;
            hexArray[i].hexDiceNumber = number;
            replaceHexResource(resource);
            replaceHexDiceNumber(number);
        }


    }
}

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

