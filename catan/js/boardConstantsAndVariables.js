//Initialize HTML Labels 

// Hex Info Panel 
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

