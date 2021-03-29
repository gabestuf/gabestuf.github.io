//INITIALIZE CLASSES
class Hex {
    constructor(hexName_, hexID_, hexResourceName_, hexDiceNumber_, hasRobber_, adjacentTileIDList_) {
        this.hexName = hexName_;
        this.hexID = hexID_;
        this.hexResourceName = hexResourceName_;
        this.hexDiceNumber = hexDiceNumber_;
        this.hasRobber = hasRobber_;
        this.adjacentTileIDList = adjacentTileIDList_;
    }
}

class Board {
    constructor() {
        this.hexArray = '';
    }

    //boardSize can be 0 for 3-4 players or 1 for the 5-6 player expansion;
    initializeBoard(boardSize) {
        switch (boardSize) {
            case 0:

                initializeHexBtns();

                break;
            case 1:
                console.log('5-6 Player Expansion not yet in operation');
                break;
            default:
                console.log('boardSize not specified.');
                break;
        }
    }
    //generates a random board
    generateRandomBoard() {
        var possibleResourcesArray = ['sheep', 'sheep', 'sheep', 'sheep', 'wheat', 'wheat', 'wheat', 'wheat', 'mud', 'mud', 'mud', 'sand', 'rock', 'rock', 'rock', 'tree', 'tree', 'tree', 'tree'];
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
}

class Player {
    constructor(name_, ID_, listOfBuildingsArr_) {
        this.name = name_;
        this.ID = ID_;
        this.listOfBuildingsArr = listOfBuildingsArr_;
    }
}

class Settlement {
    constructor(player_, position_,) {

    }
}
