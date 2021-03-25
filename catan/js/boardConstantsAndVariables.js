//Initialize global variables and BTN Arrays
let hexArray, selectedHex;
selectedHexID = '69';
hexArray = new Array(19);
const hexBtnArray = new Array(19);
//Initialize HTML Labels 
const hexResourceLabel = document.getElementById('hexResource');
const hexDiceNumberLabel = document.getElementById('hexDiceNumber');
var infoLabel = document.getElementById('infoLabel');

//initiate hexArray list and btnArray list(btnArray makes the hex btns and gives them event listeners)
const alphabetList = ['S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
for (i = 0; i < hexArray.length; i++) {
    //creates 19 Hex objects for the board
    hexArray[i] = new Hex(alphabetList.pop(), i, '', '', false);
    //creates buttons with event listeners for adjusting the board
    hexBtnArray[i] = document.querySelectorAll('.hex')[i];
    const s = i; //why did I have to make a constant to make i work in the selectHex function?
    hexBtnArray[i].addEventListener('click', function () { selectHex(s) });
}