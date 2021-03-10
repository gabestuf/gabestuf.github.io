const input = document.getElementById('input');
const buttonElement = document.getElementById('btn');
const output = document.getElementById('output');

const inp = input.nodeValue;

function buttonClick() {
    buttonElement.addEventListener("click", printNumber);
  }

function printNumber() {
    console.log(parseInt(input.value));
    const num = parseInt(input.value);
    var str = "";
    for (let i = 0; i < num; i++) {
        str += "0";
      }
      output.innerHTML += `<p>${str}<p>`;
}

buttonClick();