/*  Gabe Camacho  

The goal is to first have single input form a user to track their stats in a game of Catan and display them afterwards.
Once this is accomplished, move to being able to input data from each user from a single individual's perspective.
Next, be able to recreate a full game of Catan given the user input.
Next, communicate w/ others to have one game with input from all players.
Next, develope UI to be able to fully play Catan online.
Next, die.
*/
// VARIABLE INITIALIZATION
let numberOfPlayers, initState;
var isReadyToContinue = false;

// CLASS INITIALIZATION
//a single hex, for now to be tracked by settlement, in future, put into a board
class catanHex {
    constructor(hexResourceName_, hexResourceNumber_, hasRobber_) {
        this.hexResourceName = hexResourceName_;
        this.hexResourceNumber = hexResourceNumber_;
        this.hasRobber = hasRobber_;
    }
}
//a settlement placed by the player
class Settlement {
    constructor(indexNumber_, isCity_, hex1_, hex2_, hex3_) {
        this.indexNumber = indexNumber_;
        this.isCity = isCity_;
        this.hex1 = hex1_;
        this.hex2 = hex2_;
        this.hex3 = hex3_;
    }
    updateToCity() {
        this.isCity = true;
    }
}
//a devcard kept track by a devCardDeck
class devCard {
    constructor(type_) {
        //type_ can be Knight, Road, VP, YoP, Monopoly
        this.type = type_;
    }
}
//devCardDeck that holds devcard info
class devCardDeck {
    constructor() {
        this.cardArray = new devCard[33];
    }
    initDeck() {
        cardArray[0] = new devCard('Knight');
        cardArray[1] = new devCard('Knight');
        cardArray[2] = new devCard('Knight');
        cardArray[3] = new devCard('Knight');
        cardArray[4] = new devCard('Knight');
        cardArray[5] = new devCard('Knight');
        cardArray[6] = new devCard('Knight');
        cardArray[7] = new devCard('Knight');
        cardArray[8] = new devCard('Knight');
        cardArray[9] = new devCard('Knight');
        cardArray[10] = new devCard('Knight');
        cardArray[11] = new devCard('Knight');
        cardArray[12] = new devCard('Knight');
        cardArray[13] = new devCard('Knight');
        cardArray[14] = new devCard('VP');
        cardArray[15] = new devCard('VP');
        cardArray[16] = new devCard('VP');
        cardArray[17] = new devCard('VP');
        cardArray[18] = new devCard('VP');
        cardArray[19] = new devCard('Road');
        cardArray[20] = new devCard('Road');
        cardArray[21] = new devCard('YoP');
        cardArray[22] = new devCard('YoP');
        cardArray[23] = new devCard('Monopoly');
        cardArray[24] = new devCard('Monopoly');
    }
}
//Ignore for step A, will be used later to implement tracking multiple players
class Player {
    constructor(name_, positionID_, devCardList_, vpList_, resourceList_, settlementList_) {
        this.name = name_;
        this.positionID = positionID_;
        this.devCardList = devCardList_;
        this.vpList = vpList_;
        this.resourceList = resourceList_;
        this.settlementList = settlementList_;
    }
}

// INITIALIZATION PAGES
// 1 - Enter Number of Players
var instructionsLabel = document.querySelector('.intructions');
var initSelectionContainer = document.querySelector('.init-selection-container');

function showNumberOfPlayersPage() {
    instructionsLabel.innerHTML = '<h2>Enter number of players</h2>';
    initSelectionContainer.innerHTML =
        `
            <div class="dropdown">
                <button class="dropbtn" id='initSelectionButton'>Select</button>
                <div class="dropdown-content">
                  <button class='numberOfPlayers'>2</button>
                  <button class='numberOfPlayers'>3</button>
                  <button class='numberOfPlayers'>4</button>
                </div>
            </div>
    `
    //event listeners for drop down menu
    const twoPlayersBtn = document.querySelectorAll('.numberOfPlayers')[0];
    const threePlayersBtn = document.querySelectorAll('.numberOfPlayers')[1];
    const fourPlayersBtn = document.querySelectorAll('.numberOfPlayers')[2];
    const initSelectionBtn = document.getElementById('initSelectionButton');

    twoPlayersBtn.addEventListener('click', function () {
        initSelectionBtn.innerHTML = "2 Players";
        numberOfPlayers = 2;
        isReadyToContinue = true;
    });
    threePlayersBtn.addEventListener('click', function () {
        initSelectionBtn.innerHTML = "3 Players";
        numberOfPlayers = 3;
        isReadyToContinue = true;
    });
    fourPlayersBtn.addEventListener('click', function () {
        initSelectionBtn.innerHTML = "4 Players";
        numberOfPlayers = 4;
        isReadyToContinue = true;
    });

    initState = 'buildFirstSettlement';
}

// place first two settlements
/* TODO 
1. Create a Settlement Object 
2. Player inputs the 3 hexes that surround it with their corresponding pips
3. Continue to second settlement
*/

function showBuildFirstSettlementPage() {
    instructionsLabel.innerHTML = '<h2>First Settlement:<br>Please select the 3 resources that surround your settlement</h2>';
    initSelectionContainer.innerHTML =
        `
            <div class="dropdown">
                <button class="dropbtn" id='resource-btn'>Hex 1</button>
                <div class="dropdown-content">
                  <button class='select-resource'>Wool</button>
                  <button class='select-resource'>Tree</button>
                  <button class='select-resource'>Rock</button>
                  <button class='select-resource'>Mud</button>
                  <button class='select-resource'>Wheat</button>
                  <button class='select-resource'>Water</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn" id='resource-btn'>Hex 2</button>
                <div class="dropdown-content">
                    <button class='select-resource'>Wool</button>
                    <button class='select-resource'>Tree</button>
                    <button class='select-resource'>Rock</button>
                    <button class='select-resource'>Mud</button>
                    <button class='select-resource'>Wheat</button>
                    <button class='select-resource'>Water</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn" id='resource-btn'>Hex 3</button>
                <div class="dropdown-content">
                    <button class='select-resource'>Wool</button>
                    <button class='select-resource'>Tree</button>
                    <button class='select-resource'>Rock</button>
                    <button class='select-resource'>Mud</button>
                    <button class='select-resource'>Wheat</button>
                    <button class='select-resource'>Water</button>
                </div>
            </div>
        </div>
    `

    const woolBtn1 = document.querySelectorAll('.select-resource')[0];
    const treeBtn1 = document.querySelectorAll('.select-resource')[1];
    const rockBtn1 = document.querySelectorAll('.select-resource')[2];
    const mudBtn1 = document.querySelectorAll('.select-resource')[3];
    const wheatBtn1 = document.querySelectorAll('.select-resource')[4];
    const waterBtn1 = document.querySelectorAll('.select-resource')[5];
    const woolBtn2 = document.querySelectorAll('.select-resource')[6];
    const treeBtn2 = document.querySelectorAll('.select-resource')[7];
    const rockBtn2 = document.querySelectorAll('.select-resource')[8];
    const mudBtn2 = document.querySelectorAll('.select-resource')[9];
    const wheatBtn2 = document.querySelectorAll('.select-resource')[10];
    const waterBtn2 = document.querySelectorAll('.select-resource')[11];
    const woolBtn3 = document.querySelectorAll('.select-resource')[12];
    const treeBtn3 = document.querySelectorAll('.select-resource')[13];
    const rockBtn3 = document.querySelectorAll('.select-resource')[14];
    const mudBtn3 = document.querySelectorAll('.select-resource')[15];
    const wheatBtn3 = document.querySelectorAll('.select-resource')[16];
    const waterBtn3 = document.querySelectorAll('.select-resource')[17];

    const dropButton1 = document.querySelectorAll('.dropbtn')[0];
    const dropButton2 = document.querySelectorAll('.dropbtn')[1];
    const dropButton3 = document.querySelectorAll('.dropbtn')[2];

    var btn1Pressed = false;
    var btn2Pressed = false;
    var btn3Pressed = false;

    var varisReady1 = false;
    var varisReady2 = false;
    var varisReady3 = false;
    
    woolBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Wool";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    treeBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Tree";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    rockBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Rock";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    mudBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Mud";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    wheatBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Wheat";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    waterBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Water";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    woolBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Wool";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    treeBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Tree";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    rockBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Rock";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    mudBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Mud";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    wheatBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Wheat";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    waterBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Water";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    woolBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Wool";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    treeBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Tree";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    rockBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Rock";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    mudBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Mud";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    wheatBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Wheat";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
        } 
    });
    waterBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Water";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'buildSecondSettlement';
            console.log('initState');
        } 
    });

    
    

}
function showBuildSecondSettlementPage() {
    instructionsLabel.innerHTML = '<h2>Second Settlement:<br>Please select the 3 resources that surround your settlement</h2>';
    initSelectionContainer.innerHTML =
        `
            <div class="dropdown">
                <button class="dropbtn" id='resource-btn'>Hex 1</button>
                <div class="dropdown-content">
                  <button class='select-resource'>Wool</button>
                  <button class='select-resource'>Tree</button>
                  <button class='select-resource'>Rock</button>
                  <button class='select-resource'>Mud</button>
                  <button class='select-resource'>Wheat</button>
                  <button class='select-resource'>Water</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn" id='resource-btn'>Hex 2</button>
                <div class="dropdown-content">
                    <button class='select-resource'>Wool</button>
                    <button class='select-resource'>Tree</button>
                    <button class='select-resource'>Rock</button>
                    <button class='select-resource'>Mud</button>
                    <button class='select-resource'>Wheat</button>
                    <button class='select-resource'>Water</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn" id='resource-btn'>Hex 3</button>
                <div class="dropdown-content">
                    <button class='select-resource'>Wool</button>
                    <button class='select-resource'>Tree</button>
                    <button class='select-resource'>Rock</button>
                    <button class='select-resource'>Mud</button>
                    <button class='select-resource'>Wheat</button>
                    <button class='select-resource'>Water</button>
                </div>
            </div>
        </div>
    `

    const woolBtn1 = document.querySelectorAll('.select-resource')[0];
    const treeBtn1 = document.querySelectorAll('.select-resource')[1];
    const rockBtn1 = document.querySelectorAll('.select-resource')[2];
    const mudBtn1 = document.querySelectorAll('.select-resource')[3];
    const wheatBtn1 = document.querySelectorAll('.select-resource')[4];
    const waterBtn1 = document.querySelectorAll('.select-resource')[5];
    const woolBtn2 = document.querySelectorAll('.select-resource')[6];
    const treeBtn2 = document.querySelectorAll('.select-resource')[7];
    const rockBtn2 = document.querySelectorAll('.select-resource')[8];
    const mudBtn2 = document.querySelectorAll('.select-resource')[9];
    const wheatBtn2 = document.querySelectorAll('.select-resource')[10];
    const waterBtn2 = document.querySelectorAll('.select-resource')[11];
    const woolBtn3 = document.querySelectorAll('.select-resource')[12];
    const treeBtn3 = document.querySelectorAll('.select-resource')[13];
    const rockBtn3 = document.querySelectorAll('.select-resource')[14];
    const mudBtn3 = document.querySelectorAll('.select-resource')[15];
    const wheatBtn3 = document.querySelectorAll('.select-resource')[16];
    const waterBtn3 = document.querySelectorAll('.select-resource')[17];

    const dropButton1 = document.querySelectorAll('.dropbtn')[0];
    const dropButton2 = document.querySelectorAll('.dropbtn')[1];
    const dropButton3 = document.querySelectorAll('.dropbtn')[2];

    var btn1Pressed = false;
    var btn2Pressed = false;
    var btn3Pressed = false;

    var varisReady1 = false;
    var varisReady2 = false;
    var varisReady3 = false;
    
    woolBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Wool";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    treeBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Tree";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    rockBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Rock";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    mudBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Mud";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    wheatBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Wheat";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    waterBtn1.addEventListener('click', function () {
        dropButton1.innerHTML = "Water";
        var btn1Pressed = true;
        varisReady1 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    woolBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Wool";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    treeBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Tree";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    rockBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Rock";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    mudBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Mud";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    wheatBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Wheat";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    waterBtn2.addEventListener('click', function () {
        dropButton2.innerHTML = "Water";
        var btn2Pressed = true;
        varisReady2 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    woolBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Wool";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    treeBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Tree";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    rockBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Rock";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    mudBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Mud";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    wheatBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Wheat";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
        } 
    });
    waterBtn3.addEventListener('click', function () {
        dropButton3.innerHTML = "Water";
        var btn3Pressed = true;
        varisReady3 = true;
        if (varisReady3 && varisReady1 && varisReady2) {
            isReadyToContinue = true;
            initState = 'state4';
            
        } 
    });

    
    

}

//continue
const continueButton = document.querySelector('.next-field');
continueButton.addEventListener('click', nextInitPage);



function nextInitPage() {
    switch (initState) {
        case 'numberOfPlayers':
            showNumberOfPlayersPage();
            console.log('showing NumberOfPlayersPage');
            break;
        case 'buildFirstSettlement':
            if (isReadyToContinue) {
                isReadyToContinue = false;
                showBuildFirstSettlementPage();
                console.log('showingBuildFirstSettlementPage');
            } else {
                console.log('Error: can\'t move to next page; isReadyToContinue: ' + isReadyToContinue);
            }
            break;
        case 'buildSecondSettlement':
            showBuildSecondSettlementPage();
            console.log('showBuildingSecondSettlementPage');
            break;
        case 'state4':

        console.log('showingstate3');
        break;
        default:
            console.log("Error in function nextInitPage, unrecognized initState: " + initState);
            break;
    }

}



//
function init() {
    initState = 'numberOfPlayers';
    nextInitPage();
}
init();