const STAR_COUNT = 420;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CANVAS = document.querySelector(".background-container");

for (let x = 0; x < STAR_COUNT; x++) {
  const size = getRandomInt(3) + 1;
  const div = document.createElement("div");
  switch (size) {
    case 1:
      div.classList.add("star1");
      break;
    case 2:
      div.classList.add("star2");
      break;
    case 3:
      div.classList.add("star3");
      break;
    default:
      break;
  }
  div.classList.add("star")
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.position = "absolute";

  const X_POS = getRandomInt(30000) / 100 - 100;
  const Y_POS = getRandomInt(10000) / 100;

  div.style.marginLeft = `${X_POS}vw`;
  div.style.marginTop = `${Y_POS}vh`;

  CANVAS.appendChild(div);
}
