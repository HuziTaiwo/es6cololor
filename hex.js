const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


const getRandomValue = () => {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", () => {
  let hexValue = "#";

  let i = 0;
  while (i < 6) {
    hexValue += hex[getRandomValue()];
    i++;
  }

  color.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});
