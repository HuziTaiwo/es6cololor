const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


const getRandomNumber = () => {
  const random = Math.random()
  return Math.round(random * 255);
}
btn.addEventListener("click", () => {

  let rgbColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;

  document.body.style.backgroundColor = rgbColor;
  color.textContent = rgbColor;
});

// console.log(getRandomNumber());
