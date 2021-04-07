//Initialize HTML Labels 

// Hex Info Panel 
const backgroundWrapper = document.querySelector('.backgroundWrapper');
const infoContainer = document.querySelector('.infoContainer');
const hexInfoContainer = document.querySelector('.hexInfoContainer');
const hexResourceLabel = document.getElementById('hexResource');
const hexDiceNumberLabel = document.getElementById('hexDiceNumber');
var infoLabel = document.getElementById('infoLabel');

// Settlements Layer
const settlementsLayer = document.getElementById('settlementsLayer');
const toSettlementLayerBtn = document.getElementById('toSettlementLayerBtn');

//Dice Panel
const dicePanel = document.getElementById('dicePanel');
//roll dice
const rollAgainBtn = document.getElementById('roll-again');
//log roll
const logBtn = document.getElementById('log-value');
//finish game
const finishBtn = document.getElementById('finish-game');
// build settlements or cities
const buildSettlementBtn = document.getElementById('build-settlement');


//Variables 
const hexBtnArray = new Array(19);
var selectedHexID = 0;
var settlementsPlaced = 0;
var turnNumber = 0;

var gameLogJSON;

// CSS Colors and variables
var cssRed = 'rgba(255, 11, 11, 0.69)';
var cssGreen = 'rgba(18, 172, 13, 0.69)';


const scrambleBoardBtn = document.getElementById('scrambleBoardBtn');
scrambleBoardBtn.addEventListener('click', function () {
    board.generateRandomBoard();
})

toSettlementLayerBtn.addEventListener('click', function () {
    settlementsLayer.style.display = 'block';
    hexInfoContainer.style.display = 'none';
    hexResourceLabel.style.display = 'none';
    hexDiceNumberLabel.style.display = 'none';
    infoLabel.innerHTML = "Place First Settlement";
});



function initializeHexHTML() {
    const alphabetList = ['S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];

    var i = 0;
    for (i = 0; i < 19; i++) {

        var string = '<div class="hex"> <p>' + alphabetList.pop() + '</p> </div>';
        backgroundWrapper.innerHTML += string;
    }
}