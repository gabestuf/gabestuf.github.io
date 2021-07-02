const STAR_COUNT = 1000;







function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CANVAS = document.querySelector('.background-container');
const c = CANVAS.getContext('2d');
//canvas.width = window.innerWidth; //screen width
//canvas.height = window.innerHeight; //screen height

for (let x = 0; x < STAR_COUNT; x++) {
  const size = getRandomInt(3) + 1;
  const div = document.createElement('div');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = "white";
  div.style.position = 'absolute';

  const X_POS = getRandomInt(10000) / 100;
  const Y_POS = getRandomInt(10000) / 100;

  div.style.marginLeft = `${X_POS}vw`;
  div.style.marginTop = `${Y_POS}vh`;

  CANVAS.appendChild(div);
}

