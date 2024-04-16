let intervalId;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBackgroudColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}
function startInterval() {
  intervalId = setInterval(changeBackgroudColor, 1000);
  document.querySelector('[data-start]').disabled = true;
}

function stopInterval() {
  clearInterval(intervalId);
  document.querySelector('[data-start').disabled = false;
}
document.querySelector('[data-start]').addEventListener('click', startInterval);
document.querySelector('[data-stop]').addEventListener('click', stopInterval);
