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
                this.initializeHTML();
                this.initializeHexBtns();
                this.initializeNodeBtns();

                break;
            default:
                console.log('incorrect boardType specified');
                break
        }
    }
    // sets up backgroundWrapper hexes
    initializeHTML() {
        initializeHexHTML();
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
            } else if (i >= firstRowLength && i < 2 * firstRowLength + 2) {
                rowID = 2;
                NodesInRow = 9;
            } else if (i >= 2 * firstRowLength + 2 && i < 27) {
                rowID = 3;
                NodesInRow = 11;
            } else if (i >= 27 && i < 38) {
                rowID = 4;
                NodesInRow = 11;
            } else if (i >= 38 && i < 47) {
                rowID = 5;
                NodesInRow = 9;
            } else if (i >= 47 && i < 54) {
                rowID = 6;
                NodesInRow = 7;
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
                        this.nodeArray[i].adjacentNodeIDs.push(i + (secondRowLength + 1));
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
                        this.nodeArray[i].adjacentNodeIDs.push(i - 8);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    //gets an array of adjacent node IDs
    getAdjacentNodeIDs(nodeID) {
        var ans = [];
        for (let i = 0; i < this.nodeArray[nodeID].adjacentNodeIDs.length; i++) {
            ans.push(this.nodeArray[nodeID].adjacentNodeIDs[i]);
        }
        return ans;
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
            const s = i; //s is the nodeID / nodeBtnID 
            this.nodeBtnArray[i].addEventListener('click', () => {

                if (settlementsPlaced == 0) { //first settlement 
                    infoLabel.innerHTML = "Place Second Settlement";
                    this.nodeBtnArray[s].style.background = cssGreen;
                    this.nodeArray[s].hasSettlement = true;
                    settlementsPlaced++;

                    var adjacentNodeIDToSettlement = this.getAdjacentNodeIDs(s);
                    for (let k = 0; k < adjacentNodeIDToSettlement.length; k++) {
                        this.nodeBtnArray[adjacentNodeIDToSettlement[k]].style.display = 'none';
                    }
                } else if (settlementsPlaced >= 1) {
                    settlementsPlaced++;
                    infoContainer.style.display = 'none';
                    dicePanel.style.display = 'block';
                    dicePanel.style.zIndex = '69';
                    settlementsLayer.style.background = 'none';


                    if (this.nodeArray[s].hasSettlement) { // more than one settlement
                        //update to city
                        if (this.nodeArray[s].hasCity) {
                            this.nodeArray[s].hasCity = false;
                            this.nodeBtnArray[s].style.background = cssGreen;
                        } else {
                            this.nodeArray[s].hasCity = true;
                            this.nodeBtnArray[s].style.background = cssRed;
                        }

                    } else {
                        //add settlement
                        this.nodeArray[s].hasSettlement = true;
                        this.nodeBtnArray[s].style.background = cssGreen;
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

        var thereAreAdjacent68s = false;
        for (let i = 0; i < this.hexArray.length; i++) {
            const resource = possibleResourcesArray.pop();
            if (resource == 'sand') {
                selectedHexID = i;
                this.hexArray[i].hexResourceName = resource;
                this.hexArray[i].hexDiceNumber = '';
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

        // Icon hover effect
        // hexDiceNumberIconArray = document.querySelectorAll('.diceNumberIcon');
        // for (let i = 0; i < this.hexArray.length; i++) {
        //     hexBtnArray[i].onmouseover = () => { hexDiceNumberIconArray[i].style.background = 'rgba(255, 0, 200, 0.6' };
        //     hexBtnArray[i].onmouseout = () => { hexDiceNumberIconArray[i].style.background = 'rgb(236, 194, 79)' };
        // }



        //balancing
        thereAreAdjacent68s = this.checkIfAdjacent68();

        //console.log('still adjacent 6s and 8s? ' + thereAreAdjacent68s);
        // if (thereAreAdjacent68s) {

        //     this.generateRandomBoard(); //BOGOSORT YEET

        //     thereAreAdjacent68s = this.checkIfAdjacent68();
        // }

    }
    checkIfAdjacent68() {
        var check = false;
        for (let i = 0; i < this.hexArray.length; i++) { //for every hex
            if (this.hexArray[i].hexDiceNumber == 6 || this.hexArray[i].hexDiceNumber == 8) {

                for (let k = 0; k < this.getAdjacentHexIDs(i).length; k++) { //for every adjacent hexID 

                    if (this.hexArray[this.getAdjacentHexIDs(i)[k]].hexDiceNumber == 6) {
                        check = true;
                    }
                    if (this.hexArray[this.getAdjacentHexIDs(i)[k]].hexDiceNumber == 8) {
                        check = true;
                    }
                }
            }
        }
        return check;
    }
    getAdjacentHexIDs(hexID) {
        var ans = [];
        switch (hexID) {
            case 0:
                ans = [1, 3, 4];
                break;
            case 1:
                ans = [0, 2, 4, 5];
                break;
            case 2:
                ans = [1, 5, 6];
                break;
            case 3:
                ans = [0, 4, 7, 8];
                break;
            case 4:
                ans = [0, 1, 3, 5, 8, 9];
                break;
            case 5:
                ans = [1, 2, 4, 6, 9, 10];
                break;
            case 6:
                ans = [2, 5, 10, 11];
                break;
            case 7:
                ans = [3, 8, 12];
                break;
            case 8:
                ans = [3, 4, 7, 9, 12, 13];
                break;
            case 9:
                ans = [4, 5, 8, 10, 13, 14];
                break;
            case 10:
                ans = [5, 6, 9, 11, 14, 15];
                break;
            case 11:
                ans = [6, 10, 15];
                break;
            case 12:
                ans = [7, 8, 13, 16];
                break;
            case 13:
                ans = [8, 9, 12, 14, 16, 17];
                break;
            case 14:
                ans = [9, 10, 13, 15, 17, 18];
                break;
            case 15:
                ans = [10, 11, 14, 18];
                break;
            case 16:
                ans = [12, 13, 17];
                break;
            case 17:
                ans = [13, 14, 16, 18];
                break;
            case 18:
                ans = [14, 15, 17];
                break;
            default:
                break;
        }
        return ans;
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