//initialization
class Hex {
    constructor(hexResourceName_, hexResourceNumber_, hasRobber_) {
        this.hexResourceName = hexResourceName_;
        this.hexResourceNumber = hexResourceNumber_;
        this.hasRobber = hasRobber_;
    }
}
class Settlement {
    constructor(indexNumber_, isCity_, hex1_, hex2_, hex3_) {
        this.indexNumber = indexNumber_;
        this.isCity = isCity_;
        this.hex1 = hex1_;
        this.hex2 = hex2_;
        this.hex3 = hex3_;
    }
    updateToCity(){
        this.isCity = true;
    }
}
class devCard {
    constructor(type_){
        this.type = type_;
    }
}

class devCardDeck {
    constructor() {

    }
}
