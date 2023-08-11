import "./styles.css";

const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("button");
const div = document.querySelector("div");
const output = document.querySelector("span");

btn.addEventListener("click", changeHexColor, false);

function changeHexColor() {
  let rnd,
    hexColorValue = "#";

  for (let i = 0; i < 6; i++) {
    rnd = Math.floor(Math.random() * value.length);
    hexColorValue += value[rnd];
  }

  output.innerHTML = hexColorValue;
  div.style.backgroundColor = hexColorValue;
}

changeHexColor();
