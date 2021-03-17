const buttonElement = document.getElementById("btn");
const homeButtonElement = document.getElementById("home-btn");
const counterElement = document.getElementById("counter-btn");

//Sets counter variable. If counter is in local storage, sets value to that, otherwise if undefined or counter is not a number, resets to 0.
if (!isNaN(parseInt(localStorage.getItem("counter")))) {
  var counter = (counterElement.innerText = parseInt(
    localStorage.getItem("counter")
  ));
} else {
  var counter = 0;
  localStorage.setItem("counter", 0);
}

//
function buttonClick() {
  buttonElement.addEventListener("click", updateNumber);
  homeButtonElement.addEventListener("click", homePage);
}
//Updates counter variable, label, and storage. Updates label and stores counter in localStorage.
function updateNumber() {
  //makes sure counter is in local storage and is a number. otherwise resets counter.
  if (!isNaN(parseInt(localStorage.getItem("counter")))) {
    var counter = (counterElement.innerText = parseInt(
      localStorage.getItem("counter")
    ));
  } else {
    var counter = 0;
    localStorage.setItem("counter", 0);
  }

  counter += 1;
  localStorage.setItem("counter", counter);
  counterElement.innerText = parseInt(localStorage.getItem("counter"));
}

function homePage() {
  window.location.href = "../index.html";
}

buttonClick();

// localStorage.setItem('name', 'joe mama');
// localStorage.setItem('age', '69');
// localStorage.setItem('id', '420');
// localStorage.setItem('pruple', 'yes');
// localStorage.removeItem('name');
// console.log(localStorage.key(1));

// console.log(localStorage.getItem(localStorage.key(1)));

const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const btnClear = document.getElementById("btnClear");

btnInsert.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;
  //console.log(key);
  //console.log(value);

  //checks if empty
  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  lsOutput.innerHTML += `${key}: ${value}<br />`;
}

btnClear.onclick = function () {
  localStorage.clear();
  location.reload();
};







//background animation
const colors = [
  '#2196f3',
  '#e91e63',
  '#ffeb3b',
  '#74ff1d'
]
function createSquare() {
  const section = document.getElementById('blackgrond');
  const square = document.createElement('span');

  var size = Math.random() * 50;
  square.style.width = 20 + size +'px';
  square.style.height = 20 + size +'px';

  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';

  const bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.background = bg;

  section.appendChild(square);

  setTimeout(() =>{
      square.remove()
  }, 5000)
}

setInterval(createSquare, 150)

