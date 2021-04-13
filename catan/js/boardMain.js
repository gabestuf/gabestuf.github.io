/*

CATAN TO-DO LIST
1. Adjacency stuff
2. fuck

*/

// THE FOLLOWING FUNCTIONS ALLOW YOU TO CHANGE THE HEX PLACEMENT AND UPDATES THE DISPLAY ACCORDINGLY 
function selectHex(hexID) {
    infoLabel.innerHTML = 'Hex ' + board.hexArray[hexID].hexName + ' Selected';
    hexResourceLabel.innerHTML = 'Resource: ' + board.hexArray[hexID].hexResourceName;
    hexDiceNumberLabel.innerHTML = 'Number: ' + board.hexArray[hexID].hexDiceNumber;

    selectedHexID = board.hexArray[hexID].hexID;
    showHexInfo();
}
function showHexInfo() {

    hexResourceLabel.innerHTML = 'Resource: ' + board.hexArray[selectedHexID].hexResourceName;
    hexDiceNumberLabel.innerHTML = 'Number: ' + board.hexArray[selectedHexID].hexDiceNumber;

    const selectorBtnArray = new Array(6);
    const hexDiceNumberBtnArray = new Array(12);
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
        hexDiceNumberBtnArray[i].addEventListener('click', function () {
            if (s == 13) {
                replaceHexDiceNumber(0)
            } else {
                replaceHexDiceNumber(s)
            }

        });
    }
}
function replaceHexDiceNumber(num) {
    board.hexArray[selectedHexID].hexDiceNumber = num;

    hexDiceNumberLabel.innerHTML = 'Number: ' + num;
    // if (num == 0) {
    //     hexDiceNumberLabel.innerHTML = 'Number: ' + 'im a desert';
    // }

    const currentHex = document.querySelectorAll('.hex')[selectedHexID];
    switch (num) {
        case 0:
            currentHex.innerHTML = "<p class='diceNumberIcon'></p>";
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
            currentHex.style.color = 'rgb(223, 14, 14)';
            break;
        case 7:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 7 </p>";
            currentHex.style.color = 'black';
            break;
        case 8:
            currentHex.innerHTML = "<p class='diceNumberIcon'> 8 </p>";
            currentHex.style.color = 'rgb(223, 14, 14)';
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
    board.hexArray[selectedHexID].hexResourceName = resource;
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
const board = new Board(new Array(54), new Array(19), new Array(54));

boardType = 'vanilla';

board.initBoard('vanilla');
//console.log(board.nodeArray);

const player = new Player([]);

buildSettlementBtn.addEventListener('click', () => {
    for (let i = 0; i < board.nodeArray.length; i++) { // show and enable all nodes
        board.nodeBtnArray[i].disabled = false;
        board.nodeBtnArray[i].style.display = 'block';
    }
    for (let k = 0; k < board.nodeArray.length; k++) { // hide nodes where adajcent nodes have settlements on them
        if (board.nodeArray[k].hasSettlement) {
            var adjacentNodeIDToSettlement = board.getAdjacentNodeIDs(k);
            for (let d = 0; d < adjacentNodeIDToSettlement.length; d++) {
                board.nodeBtnArray[adjacentNodeIDToSettlement[d]].disabled = true;
                board.nodeBtnArray[adjacentNodeIDToSettlement[d]].style.display = 'none';
            }
        }
    }
});

logBtn.addEventListener('click', () => {

    //variables 
    // firstRandomNum is RED
    // secondRandomNum is Yellow
    turnNumber++;
    var resourcesGained = [];
    var resourcesBlocked = [];

    // search nodes for nodes with settlements on them. If there is a settlement, get the adjacentHexIDs
    // using the hexIDs, search those hexes and see if any of the hexDiceNumbers == sum
    // if they do, check if settlement is a city and then add hexResourceName to a list of resourcesGained (x2 if city)

    // gets list of adjacentHexIDs
    for (n of board.nodeArray) { //for each node 
        if (n.hasSettlement) {   // if the node has a settlement
            if (n.hasCity) { // check if it's a city
                for (x of n.adjacentHexIDs) { // for every hexID (x) of nodes that have cities
                    if (!board.hexArray[x].hasRobber) { //if the hex at hexID (x) doesn't have the robber
                        if (board.hexArray[x].hexDiceNumber == sum) { // check if the hex was the number rolled
                            resourcesGained.push(board.hexArray[x].hexResourceName); //if true, add the resource 
                        }
                    } else if ((board.hexArray[x].hasRobber)) { //if it does have the robber, 
                        if (board.hexArray[x].hexDiceNumber == sum) { // check if the ID had the number rolled
                            resourcesBlocked.push(board.hexArray[x].hexResourceName);
                        }
                    }

                }
            }
            // if it is just a settlement without a city
            for (x of n.adjacentHexIDs) { // for every hexID (x) of nodes with settlements
                if (!board.hexArray[x].hasRobber) { // if there is no robber
                    if (board.hexArray[x].hexDiceNumber == sum) { // check if the hex was the number rolled
                        resourcesGained.push(board.hexArray[x].hexResourceName); //if true, add the resource 
                    }
                } else if (board.hexArray[x].hasRobber) { // else if there was a robber
                    if (board.hexArray[x].hexDiceNumber == sum) { //if the number on the hex was rolled
                        resourcesBlocked.push(board.hexArray[x].hexResourceName); //add that resource to a list of blocked resources
                    }
                }
            }
        }
    }

    var turnInformationObj = {
        "turn": turnNumber,
        "redDie": firstRandomNum,
        "yellowDie": secondRandomNum,
        "sum": sum,
        "resourcesGained": resourcesGained,
        "resourcedBlocked": resourcesBlocked
    }

    player.turnInformation.push(turnInformationObj);
});




function DownloadJson() {
    var blob = new Blob([gameLogJSON]);
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'catan-gamelog.txt';
    link.click();
}

