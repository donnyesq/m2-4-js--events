const instructions = document.createElement("h1");
const startButton = document.createElement("button");

instructions.innerText = "Click the button to start the game";
instructions.classList.add("instructions");
document.body.appendChild(instructions);

startButton.innerText = "start";
startButton.classList.add("start");
startButton.style.backgroundColor = "#2e2e2e";
document.body.appendChild(startButton);

const mainEvent = function (event) {
  event.target.remove();
  instructions.style.display = "none";

  for (i = 0; i < Math.floor(Math.random() * (20 - 10) + 10); i++) {
    let button = document.createElement("button");
    button.classList.add("target");
    button.style.position = "absolute";
    button.style.top = `${Math.random() * 400}px`;
    button.style.left = `${Math.random() * 400}px`;
    document.body.appendChild(button);
  }

  let totalButtons = document.querySelectorAll("button").length;
  let buttonsClicked = 0;

  const nextEvent = function (event) {
    buttonsClicked++;
    event.target.style.display = "none";

    if (buttonsClicked === totalButtons) {
      let win = document.createElement("h1");
      win.innerText = "You win";
      document.body.appendChild(win);
    }
  };

  document.querySelectorAll("button").forEach(function (item) {
    item.addEventListener("click", nextEvent);
  });
};

startButton.addEventListener("click", mainEvent);
