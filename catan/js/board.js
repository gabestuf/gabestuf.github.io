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
}

function replaceHexResource(resource) {
    hexArray[selectedHexID].hexResourceName = resource;
    hexResourceLabel.innerHTML = 'Resource: ' + resource;

    const currentBtn = document.querySelectorAll('.hex')[selectedHexID];
    switch(resource){
        case 'wool':
            currentBtn.style.background = "url('/images/catan/wool.png')";
            currentBtn.style.backgroundSize = '200px 220px';
            currentBtn.innerHTML = "";
            break;
        case 'tree':
            currentBtn.style.background = "url('/images/catan/tree.png')";
            currentBtn.style.backgroundSize = '200px 220px';
            currentBtn.innerHTML = "";
            break;
        case 'rock':
            currentBtn.style.background = "url('/images/catan/rock.png')";
            currentBtn.style.backgroundSize = '200px 220px';
            currentBtn.innerHTML = "";
            break;
        case 'mud':
            currentBtn.style.background = "url('/images/catan/mud.png')";
            currentBtn.style.backgroundSize = '200px 220px';
            currentBtn.innerHTML = "";
            break;
        case 'wheat':
            currentBtn.style.background = "url('/images/catan/wheat.png')";
            currentBtn.style.backgroundSize = '200px 220px';
            currentBtn.innerHTML = "";
            break;
        case 'sand':
            currentBtn.style.background = "url('/images/catan/sand.png')";
            currentBtn.style.backgroundSize = '200px 220px';
            currentBtn.innerHTML = "";
            break;
        default: 
            console.log('replaceHexBackground: No resource identified');
            break;
    }
}

