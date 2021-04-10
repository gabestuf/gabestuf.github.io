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
const analysisBtn = document.getElementById('analysis-btn');
const robberBtn = document.getElementById('move-robber');


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


    // makes a new event listener for every hex so when triggered it will 1. change the color to indicate the robber 2. update the hex that has the robber on it 3. re apply the settlements layer on z index 69 
    for (let i = 0; i < board.hexArray.length; i++) {
        const s = i;
        // s is the hexID 
        backgroundWrapper.querySelectorAll('.hex')[i].addEventListener('click', () => { // Makes a new event listener for every hex

            //first, set all hexes have robber to false
            for (let e = 0; e < board.hexArray.length; e++) {
                board.hexArray[e].hasRobber = false;
            }

            board.hexArray[s].hasRobber = true;

            // for (node in board.nodeArray) { // for every node in nodeArray
            //     for (hexID in node.adjacentHexIDs) { // we need to find the node's adjacent hexes 
            //         // for each adjacent hex, check if that hexID == s
            //         if (hexID == s) {// if it does, set board.hexArray[s].hasRobber = true; 
            //             board.hexArray[s].hasRobber = true;
            //         }
            //     }
            // }



            for (x = 0; x < board.hexArray.length; x++) { // reset all hex diceNumberIcons to default color 
                if (backgroundWrapper.querySelectorAll('.hex')[x].querySelector('.diceNumberIcon')) {
                    backgroundWrapper.querySelectorAll('.hex')[x].querySelector('.diceNumberIcon').style.background = 'rgb(236, 194, 79)';
                }
            }
            if (backgroundWrapper.querySelectorAll('.hex')[s].querySelector('.diceNumberIcon')) {
                backgroundWrapper.querySelectorAll('.hex')[s].querySelector('.diceNumberIcon').style.background = 'rgb(255,0,0,.69)'; // set selected hex to different color
            }
            settlementsLayer.style.zIndex = '69'; //reapplies the settlements Layer
            //robberBtn.style.background = 'rgba(0, 0, 0, .2)';
        });
    }
});



function initializeHexHTML() {
    const alphabetList = ['S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];


    for (let i = 0; i < 19; i++) {

        var string = '<div class="hex"> <p>' + alphabetList.pop() + '</p> </div>';
        backgroundWrapper.innerHTML += string;
    }
}

// Be able to select a hex to place the robber
robberBtn.addEventListener('click', () => {
    settlementsLayer.style.zIndex = '0'; // get rid of the settlements layer so selecting a hex is possible
    //robberBtn.style.background = 'rgba(0, 0, 0, 0.69)';



});


