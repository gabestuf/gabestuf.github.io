var firstRandomNum,secondRandomNum,sum,firstDiceImage,secondDiceImage;

//INIT
firstRandomNum = Math.floor(Math.random() * 6) + 1;
secondRandomNum = Math.floor(Math.random() * 6) + 1;
sum = firstRandomNum + secondRandomNum;
firstDiceImage = '/images/dice/red' + firstRandomNum + '.png';
secondDiceImage = '/images/dice/yellow' + secondRandomNum + '.png';
document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;




//ROLL DICE 
const rollAgainBtn = document.getElementById('roll-again');
rollAgainBtn.addEventListener('click', rollDice)
function rollDice() {
    //rand num 1-6
    firstRandomNum = Math.floor(Math.random() * 6) + 1;
    secondRandomNum = Math.floor(Math.random() * 6) + 1;
    //sum
    sum = firstRandomNum + secondRandomNum;
    firstDiceImage = '/images/dice/red' + firstRandomNum + '.png';
    secondDiceImage = '/images/dice/yellow' + secondRandomNum + '.png';
    document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
    document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
    document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
}


//INCREASE OR DECREASE DICE VALUE
document.getElementById('btn-up-red').addEventListener('click', function() {
    updateDie(0, true);
});
document.getElementById('btn-down-red').addEventListener('click', function() {
    updateDie(0, false);
});
document.getElementById('btn-up-yellow').addEventListener('click', function() {
    updateDie(1,true);
});
document.getElementById('btn-down-yellow').addEventListener('click', function() {
    updateDie(1,false);
});
//UPDATE DICE NUMBER UP OR DOWN
function updateDie(dieNumber, isUp) {
    //red = 0 yellow = 1
    switch (dieNumber){
        case 0:
            if (isUp) {
                if (firstRandomNum < 6) {
                    firstRandomNum += 1;
                } else {
                    firstRandomNum = 1;
                }
                firstDiceImage = '/images/dice/red' + firstRandomNum + '.png';
                document.getElementById('red-die-img').setAttribute('src', firstDiceImage);
                sum = firstRandomNum + secondRandomNum;
                document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
            } else if (!isUp) {
                if (firstRandomNum > 1) {
                    firstRandomNum -= 1;
                } else {
                    firstRandomNum = 6;
                }
                firstDiceImage = '/images/dice/red' + firstRandomNum + '.png';
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
                secondDiceImage = '/images/dice/yellow' + secondRandomNum + '.png';
                document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
                sum = firstRandomNum + secondRandomNum;
                document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
            }else if(!isUp) {
                if (secondRandomNum > 1) {
                    secondRandomNum -= 1;
                } else {
                    secondRandomNum = 6;
                }
                secondDiceImage = '/images/dice/yellow' + secondRandomNum + '.png';
                document.getElementById('yellow-die-img').setAttribute('src', secondDiceImage);
                sum = firstRandomNum + secondRandomNum;
                document.getElementById('dice-sum').innerHTML = 'sum: ' + sum;
            } else {
                console.log('something in the if statement is wrong')
            }
            break;
        default:
            console.log('updateDie dieNumber error')
    }
    
}


const clearBtn = document.getElementById('clear-btn');
const logBtn = document.getElementById('log-value');
const lsOutput = document.getElementById('lsOutput');

logBtn.addEventListener('click', logDiceRolls);
function logDiceRolls() {

    if (localStorage.getItem('rollNumber')) {
        var x = parseInt(localStorage.getItem('rollNumber'));
        x += 1;
        localStorage.setItem('rollNumber', x);
    } else {
        localStorage.setItem('rollNumber' , 1);
    }

    var rollNumber = parseInt(localStorage.getItem('rollNumber'));
    //console.log(rollNumber);

    const sumKey = 'sum' + rollNumber;
    const redKey = 'red' + rollNumber;
    const yellowKey = 'yellow' + rollNumber;

    //starts with sum1
    localStorage.setItem(sumKey, sum);
    localStorage.setItem(redKey, firstRandomNum);
    localStorage.setItem(yellowKey, secondRandomNum);

          //red
          const value1 = localStorage.getItem(redKey);
          //sum
          const value2 = localStorage.getItem(sumKey);
          //yellow
          const value3 = localStorage.getItem(yellowKey);
          //rollnum
          const value4 = localStorage.getItem('rollNumber');
      

          lsOutput.innerHTML = `Roll: ${value4} | Red: ${value1} | Yellow: ${value3} | Sum: ${value2}<br />` + lsOutput.innerHTML;
 
          
    //location.reload();
}


  clearBtn.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
}); 

const wheatLabel = document.querySelectorAll('.resource-label')[0];
const sheepLabel = document.querySelectorAll('.resource-label')[1];
const treeLabel = document.querySelectorAll('.resource-label')[2];
const mudLabel = document.querySelectorAll('.resource-label')[3];
const rockLabel = document.querySelectorAll('.resource-label')[4];









