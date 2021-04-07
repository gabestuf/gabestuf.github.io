class Board {
    constructor(nodeArray_, hexArray_, nodeButtonArray_) {
        this.nodeArray = nodeArray_;
        this.hexArray = hexArray_;
        this.nodeBtnArray = nodeButtonArray_;
    }
    initBoard(boardType) {
        switch (boardType) {
            case 'vanilla':

                //setup Hexes and buttons 
                this.initializeHexBtns();
                this.initializeNodeBtns();
                break;
            default:
                console.log('incorrect boardType specified');
                break
        }
    }

    //Once user has clicked done, board cannot be changed
    // initNodes needs to be better
    initNodes() {
        //setup Node graph
        const firstRowLength = 7;
        const secondRowLength = firstRowLength + 2;
        const thirdRowLength = secondRowLength + 2;
        var NodesInRow = 0;
        var rowID = '';
        var i = 0;
        for (i = 0; i < this.nodeArray.length; i++) {
            this.nodeArray[i] = new Node(i, [], [], [], false, false);
            if (i < firstRowLength) {
                rowID = 1;
                NodesInRow = 7;
                //console.log(i + 'first row');
            } else if (i >= firstRowLength && i < 2 * firstRowLength + 2) {
                rowID = 2;
                NodesInRow = 9;
                //console.log(i + 'second row');
            } else if (i >= 2 * firstRowLength + 2 && i < 27) {
                rowID = 3;
                NodesInRow = 11;
                //console.log(i + 'third row');
            } else if (i >= 27 && i < 38) {
                rowID = 4;
                NodesInRow = 11;
                //console.log(i + 'fourth row');
            } else if (i >= 38 && i < 47) {
                rowID = 5;
                NodesInRow = 9;
                //console.log(i + 'fifth row');
            } else if (i >= 47 && i < 54) {
                rowID = 6;
                NodesInRow = 7;
                //console.log(i + 'sixth row');
            } else {
                console.log('error, array out of bounds board.nodeArray');
            }

            switch (rowID) {
                case 1:
                    if (NodesInRow - i == NodesInRow) { // First in Row
                        this.nodeArray[i].adjacentHexIDs.push(0);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + firstRowLength + 1);
                    } else if (NodesInRow - i == 0) { //Last in Row
                        this.nodeArray[i].adjacentHexIDs.push(2);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + firstRowLength + 1);
                    } else if (i % 2 == 0) {
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 1);
                        this.nodeArray[i].adjacentHexIDs.push(i / 2);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                    } else {
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2));
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                    }
                    break;
                case 2:
                    if (i - firstRowLength == 0) { // First in Row
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2));
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + secondRowLength + 1);
                    } else if (firstRowLength + NodesInRow - 1 - i == 0) { //Last in Row
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + secondRowLength + 1);
                    } else if (i - firstRowLength == 1) { //Second in Row
                        this.nodeArray[i].adjacentHexIDs.push(0);
                        this.nodeArray[i].adjacentHexIDs.push(3);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (secondRowLength - 1));
                    } else if (firstRowLength + NodesInRow - 1 - i == 1) { //Second to last in Row
                        this.nodeArray[i].adjacentHexIDs.push(2);
                        this.nodeArray[i].adjacentHexIDs.push(6);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (secondRowLength - 1));
                    } else if (i % 2 == 0) {
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 1);
                        this.nodeArray[i].adjacentHexIDs.push((i / 2) - 5);
                        this.nodeArray[i].adjacentHexIDs.push((i / 2) - 4);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (secondRowLength - 1));
                    } else {
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2));
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 1);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 4);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (secondRowLength - 1));
                    }
                    break;
                case 3:
                    if ((firstRowLength + secondRowLength) == i) { // First in Row
                        this.nodeArray[i].adjacentHexIDs.push(7);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + thirdRowLength);
                    } else if ((firstRowLength + secondRowLength + thirdRowLength - 1) == i) { //Last in Row
                        this.nodeArray[i].adjacentHexIDs.push(11);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + thirdRowLength);
                    } else if ((firstRowLength + secondRowLength + 1) == i) { //Second in Row
                        this.nodeArray[i].adjacentHexIDs.push(i - (thirdRowLength - 1));
                        this.nodeArray[i].adjacentHexIDs.push(i - (thirdRowLength + 3));
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (thirdRowLength - 1));
                    } else if ((firstRowLength + secondRowLength + thirdRowLength - 2) == i) { //Second to last in Row
                        this.nodeArray[i].adjacentHexIDs.push(i - (thirdRowLength + 3));
                        this.nodeArray[i].adjacentHexIDs.push(i - (thirdRowLength + 9));
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (thirdRowLength - 3));
                    } else if (i % 2 == 0) { //Even number
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 1);
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 2);
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 6);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + thirdRowLength);
                    } else {
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 1);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 5);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 6);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (thirdRowLength - 1));
                    }
                    break;
                case 4:
                    if (firstRowLength + secondRowLength + thirdRowLength == i) { // First in Row
                        this.nodeArray[i].adjacentHexIDs.push(7);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - thirdRowLength);
                    } else if (firstRowLength + secondRowLength + thirdRowLength + thirdRowLength - 1 == i) { //Last in Row
                        this.nodeArray[i].adjacentHexIDs.push(11);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + secondRowLength);
                    } else if (firstRowLength + secondRowLength + thirdRowLength + 1 == i) { //Second in Row
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 2);
                        this.nodeArray[i].adjacentHexIDs.push(i / 4);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + thirdRowLength - 1);
                    } else if (firstRowLength + secondRowLength + thirdRowLength + thirdRowLength - 2 == i) { //Second to last in Row
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 3);
                        this.nodeArray[i].adjacentHexIDs.push(i / 4 + 2);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + thirdRowLength - 1);
                    } else if (i % 2 == 0) {
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 2);
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 3);
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 7);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + thirdRowLength - 1);
                    } else {
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 2);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 6);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 7);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - thirdRowLength);
                    }
                    break;
                case 5:
                    if (38 == i) { // First in Row
                        this.nodeArray[i].adjacentHexIDs.push(12);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - thirdRowLength);
                    } else if (47 - 1 == i) { //Last in Row 
                        this.nodeArray[i].adjacentHexIDs.push(46);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (thirdRowLength - 1));
                    } else if (38 + 1 == i) { //Second in Row
                        this.nodeArray[i].adjacentHexIDs.push(12);
                        this.nodeArray[i].adjacentHexIDs.push(18);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + secondRowLength - 1);
                    } else if (47 - 2 == i) { //Second to last in Row
                        this.nodeArray[i].adjacentHexIDs.push(18);
                        this.nodeArray[i].adjacentHexIDs.push(15);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + firstRowLength);
                    } else if (i % 2 == 0) {
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 4);
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 7);
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 8);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i - (thirdRowLength - 1));
                    } else {
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 3);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 4);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 7);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + (secondRowLength - 1));
                    }
                    break;
                case 6:
                    if (47 == i) { // First in Row
                        this.nodeArray[i].adjacentHexIDs.push(16);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                        this.nodeArray[i].adjacentNodeIDs.push(39);
                    } else if (53 == i) { //Last in Row 
                        this.nodeArray[i].adjacentHexIDs.push(18);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(47 - 2);
                    } else if (i % 2 == 0) {
                        this.nodeArray[i].adjacentHexIDs.push(i / 2 - 8);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                    } else {
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 7);
                        this.nodeArray[i].adjacentHexIDs.push(Math.floor(i / 2) - 8);
                        this.nodeArray[i].adjacentNodeIDs.push(i - 1);
                        this.nodeArray[i].adjacentNodeIDs.push(i + 1);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    //GET HTML ELEMENTS
    // create hex buttons and initializes board.hexArray
    initializeHexBtns() {
        //initiate hexArray list and btnArray list(btnArray makes the hex btns and gives them event listeners)
        const alphabetList = ['S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        var i = 0;
        for (i = 0; i < this.hexArray.length; i++) {
            //creates 19 Hex objects for the board and gives them ID's 0 - 18
            this.hexArray[i] = new Hex(alphabetList.pop(), i, '', '', false);
            this.hexArray[i].hexID = i;
            //creates buttons with event listeners for adjusting the board
            hexBtnArray[i] = document.querySelectorAll('.hex')[i];
            const s = i; //why did I have to make a constant to make i work in the selectHex function?
            hexBtnArray[i].addEventListener('click', () => { selectHex(s) });
        }
    }


    initializeNodeBtns() {
        // create 54 Node objects 
        this.initNodes();

        this.nodeBtnArray = new Array(54);
        // create html elements 
        var i = 0;
        for (i = 0; i < this.nodeArray.length; i++) {
            var nodeBtnElement = document.createElement('button');
            nodeBtnElement.className = "nodeBtn";

            settlementsLayer.appendChild(nodeBtnElement);
        }
        for (i = 0; i < this.nodeArray.length; i++) {

            // create 54 Node buttons with event listeners
            this.nodeBtnArray[i] = document.querySelectorAll('.nodeBtn')[i];
            const s = i;
            this.nodeBtnArray[i].addEventListener('click', () => {
                console.log(s);
                //this.nodeBtnArray[s].disabled = true;


                if (settlementsPlaced == 0) { //first settlement 
                    infoLabel.innerHTML = "Place Second Settlement";
                    this.nodeBtnArray[s].style.background = 'green';
                    this.nodeArray[s].hasSettlement = true;
                    settlementsPlaced++;
                } else if (settlementsPlaced >= 1) {
                    settlementsPlaced++;
                    infoContainer.style.display = 'none';
                    dicePanel.style.display = 'block';
                    settlementsLayer.style.background = 'none';


                    if (this.nodeArray[s].hasSettlement) { // more than one settlement
                        console.log(this.nodeArray[s].hasSettlement);
                        //update to city
                        if (this.nodeArray[s].hasCity) {
                            this.nodeArray[s].hasCity = false;
                            this.nodeBtnArray[s].style.background = 'green';
                        } else {
                            this.nodeArray[s].hasCity = true;
                            this.nodeBtnArray[s].style.background = 'red';
                        }

                    } else {
                        //add settlement
                        this.nodeArray[s].hasSettlement = true;
                        this.nodeBtnArray[s].style.background = 'green';
                    }


                    //make roll dice elements 

                    rollAgainBtn.addEventListener('click', rollDice);
                    var w = 0;
                    for (w = 0; w < this.nodeArray.length; w++) {
                        if (this.nodeArray[w].hasSettlement == false) {
                            this.nodeBtnArray[w].style.display = 'none';
                        }
                    }

                    //doneBtn

                }

            });

        }
    }

    generateRandomBoard() {
        var possibleResourcesArray = ['sheep', 'sheep', 'sheep', 'sheep', 'wheat', 'wheat', 'wheat', 'wheat', 'mud', 'mud', 'mud', 'sand', 'rock', 'rock', 'rock', 'tree', 'tree', 'tree', 'tree'];
        shuffleArray(possibleResourcesArray);
        var possibleNumbersArray = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        shuffleArray(possibleNumbersArray);

        var i = 0;
        for (i = 0; i < this.hexArray.length; i++) {
            const resource = possibleResourcesArray.pop();
            if (resource == 'sand') {
                selectedHexID = i;
                this.hexArray[i].hexResourceName = resource;
                this.hexArray[i].hexDiceNumber = 'NULL';
                replaceHexResource(resource);
                replaceHexDiceNumber(0);
            } else {
                const number = possibleNumbersArray.pop();
                selectedHexID = i;
                this.hexArray[i].hexResourceName = resource;
                this.hexArray[i].hexDiceNumber = number;
                replaceHexResource(resource);
                replaceHexDiceNumber(number);
            }
        }
    }
}

class Hex {
    constructor(hexName_, hexID_, hexResourceName_, hexDiceNumber_, hasRobber_) {
        this.hexName = hexName_;
        this.hexID = hexID_;
        this.hexResourceName = hexResourceName_;
        this.hexDiceNumber = hexDiceNumber_;
        this.hasRobber = hasRobber_;
    }
}

class Node {
    constructor(nodeID_, adjacentHexIDs_, adjacentNodeIDs_, connectedNodeIDs_, hasSettlement_, hasCity_) {
        this.nodeID = nodeID_;
        this.adjacentHexIDs = adjacentHexIDs_;
        this.adjacentNodeIDs = adjacentNodeIDs_;
        this.connectedNodeIDs = connectedNodeIDs_;
        this.hasSettlement = hasSettlement_;
        this.hasCity = hasCity_;
    }
}

class Player {
    // constructor(playerID_, playersNodes_, numberOfVictoryPoints_, listOfResources_, turnInformation_) {
    //     this.playerID = playerID_;
    //     this.playersNodes = playersNodes_;
    //     this.numberOfVictoryPoints = numberOfVictoryPoints_;
    //     this.listOfResources = listOfResources_;
    //     this.turnInformation = turnInformation_;
    // }
    constructor(turnInformation_) {
        this.playerID = null;
        this.playersNodes = null;
        this.numberOfVictoryPoints = null;
        this.listOfResources = null;
        this.turnInformation = turnInformation_;
    }
}