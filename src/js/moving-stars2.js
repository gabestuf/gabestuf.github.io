const STAR_COUNT = 690;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CANVAS = document.querySelector(".background-container");

for (let x = 0; x < STAR_COUNT; x++) {
  const size = getRandomInt(3) + 1;
  const div = document.createElement("div");
  switch (size) {
    case 1:
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      break;
    case 2:
      div.style.width = `${size + 1}px`;
      div.style.height = `${size + 1}px`;
      break;
    case 3:
      div.style.width = `${size + 2}px`;
      div.style.height = `${size + 2}px`;
      break;
    default:
      break;
  }

  div.style.position = "absolute";
  div.classList.add(`star${size}`);

  let X_POS, Y_POS;

  switch (x % 3) {
    case 0:
      X_POS = (getRandomInt(100000) / 1000) + 100;
      Y_POS = getRandomInt(10000) / 100;
      div.classList.add("leftpos1");
      break;
    case 1:
      X_POS = (getRandomInt(100000) / 1000) + 100;
      Y_POS = getRandomInt(10000) / 100;
      div.classList.add("leftpos2");
      break;
    case 2:
      X_POS = (getRandomInt(100000) / 1000);
      Y_POS = getRandomInt(10000) / 100;
      div.classList.add("midpos");
      break;
    default:
      console.log("switch case broke");
      break;
  }

  div.classList.add("star");

  div.style.right = `${X_POS}%`;
  div.style.top = `${Y_POS}%`;

  CANVAS.appendChild(div);
}


