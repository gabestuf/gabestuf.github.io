var firstRandomNum, secondRandomNum, sum, firstDiceImage, secondDiceImage;

//INIT
firstRandomNum = Math.floor(Math.random() * 6) + 1;
secondRandomNum = Math.floor(Math.random() * 6) + 1;
sum = firstRandomNum + secondRandomNum;
firstDiceImage = './../images/dice/red' + firstRandomNum + '.png';
secondDiceImage = './../images/dice/yellow' + secondRandomNum + '.png';
document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
diceSumLabel.innerHTML = 'sum: ' + sum;




//ROLL DICE 
function rollDice() {
    //rand num 1-6
    firstRandomNum = Math.floor(Math.random() * 6) + 1;
    secondRandomNum = Math.floor(Math.random() * 6) + 1;
    //sum
    sum = firstRandomNum + secondRandomNum;
    firstDiceImage = './../images/dice/red' + firstRandomNum + '.png';
    secondDiceImage = './../images/dice/yellow' + secondRandomNum + '.png';
    document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
    document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
    document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
}

function setDie(isRedDie, aNumber) {
    if (isRedDie) {
        firstRandomNum = aNumber;
        sum = firstRandomNum + secondRandomNum;
        firstDiceImage = './../images/dice/red' + firstRandomNum + '.png';
        document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
        document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
    } else {
        secondRandomNum = aNumber;
        sum = firstRandomNum + secondRandomNum;
        secondDiceImage = './../images/dice/yellow' + secondRandomNum + '.png';
        document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
        document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
    }
}


//INCREASE OR DECREASE DICE VALUE
document.getElementById('btn-up-red').addEventListener('click', function () {
    updateDie(0, true);
});
document.getElementById('btn-down-red').addEventListener('click', function () {
    updateDie(0, false);
});
document.getElementById('btn-up-yellow').addEventListener('click', function () {
    updateDie(1, true);
});
document.getElementById('btn-down-yellow').addEventListener('click', function () {
    updateDie(1, false);
});
//UPDATE DICE NUMBER UP OR DOWN
function updateDie(dieNumber, isUp) {
    //red = 0 yellow = 1
    switch (dieNumber) {
        case 0:
            if (isUp) {
                if (firstRandomNum < 6) {
                    firstRandomNum += 1;
                } else {
                    firstRandomNum = 1;
                }
                firstDiceImage = './../images/dice/red' + firstRandomNum + '.png';
                document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
                sum = firstRandomNum + secondRandomNum;
                document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
            } else if (!isUp) {
                if (firstRandomNum > 1) {
                    firstRandomNum -= 1;
                } else {
                    firstRandomNum = 6;
                }
                firstDiceImage = './../images/dice/red' + firstRandomNum + '.png';
                document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
                sum = firstRandomNum + secondRandomNum;
                document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
            } else {
                console.log('something in red die if statement is wrong')
            }
            break;
        case 1:
            if (isUp) {
                if (secondRandomNum < 6) {
                    secondRandomNum += 1;
                } else {
                    secondRandomNum = 1;
                }
                secondDiceImage = './../images/dice/yellow' + secondRandomNum + '.png';
                document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
                sum = firstRandomNum + secondRandomNum;
                document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
            } else if (!isUp) {
                if (secondRandomNum > 1) {
                    secondRandomNum -= 1;
                } else {
                    secondRandomNum = 6;
                }
                secondDiceImage = './../images/dice/yellow' + secondRandomNum + '.png';
                document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
                sum = firstRandomNum + secondRandomNum;
                document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
            } else {
                console.log('something in the if statement is wrong');
            }
            break;
        default:
            console.log('updateDie dieNumber error');
    }

}









