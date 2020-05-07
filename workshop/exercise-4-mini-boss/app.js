const instructions = document.createElement("h1");
const startButton = document.createElement("button");

instructions.innerText = "Click the button to start the game";
instructions.classList.add("instructions");
document.body.appendChild(instructions);

startButton.innerText = "start";
startButton.classList.add("start");
startButton.style.backgroundColor = "#2e2e2e";
document.body.appendChild(startButton);

const startGame = function (event) {
  let timeLeft;
  let countdown;

  function runTimer() {
    timeLeft = 10;
    countdown = document.createElement("h1");
    countdown.innerText = timeLeft;
    countdown.style.zIndex = "999";
    countdown.style.color = "#bbb";
    document.body.appendChild(countdown);

    let intervalID = setInterval(function () {
      timeLeft--;
      countdown.innerText = timeLeft;
      if (timeLeft < 1) {
        timeLeft = 0;
        clearInterval(intervalID);
        countdown.remove();
      }
      if (buttonsClicked !== totalButtons && timeLeft <= 0) {
        //REMOVE EVENT LISTENER
        document.querySelectorAll("button").forEach(function (item) {
          item.removeEventListener("click", changeColor);
        });
        // REMOVE EVENT LISTENER
        let lose = document.createElement("h1");
        lose.innerText = "Sorry, time's up";
        lose.style.zIndex = "999";
        document.body.appendChild(lose);
      }
    }, 1000);
  }

  runTimer();
  event.target.remove();
  instructions.style.display = "none";

  const createButtons = function () {
    for (i = 0; i < Math.floor(Math.random() * (20 - 10) + 10); i++) {
      let button = document.createElement("button");
      button.classList.add("target");
      button.style.position = "absolute";
      button.style.top = `${Math.random() * 80}%`;
      button.style.left = `${Math.random() * 80}%`;
      document.body.appendChild(button);
    }
  };

  createButtons();

  //VARIABLES
  let totalButtons = document.querySelectorAll("button").length;
  let buttonsClicked = 0;
  //VARIABLES

  const changeColor = function (event) {
    console.log(event.target.style.backgroundColor);
    if (event.target.style.backgroundColor === "rgb(46, 46, 46)") {
      buttonsClicked++;
      event.target.style.backgroundColor = "#ddd";
    }

    if (buttonsClicked === totalButtons && timeLeft > 0) {
      countdown.remove();
      let win = document.createElement("h1");
      win.innerText = "Nicely done";
      win.style.zIndex = "999";
      document.body.appendChild(win);
    }
  };

  document.querySelectorAll("button").forEach(function (item) {
    item.style.backgroundColor = "rgb(46, 46, 46)";
    item.addEventListener("click", changeColor);
  });
};

startButton.addEventListener("click", startGame);
