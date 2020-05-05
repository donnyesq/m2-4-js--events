let button;

const createButtons = () => {
  for (i = 0; i < 20; i++) {
    button = document.createElement("button");
    button.innerText = "Click";
    button.setAttribute("class", "red");
    button.style.backgroundColor = "rgb(255, 105, 97)";
    document.body.appendChild(button);
  }
};

createButtons();

document.querySelectorAll("button").forEach(function (item) {
  item.addEventListener("click", function (event) {
    console.log(event.target.style.background);
    let currentBackgroundColor = event.target.style.backgroundColor;
    if (currentBackgroundColor === "rgb(255, 105, 97)") {
      event.target.style.background = "rgb(92, 160, 142)";
    } else {
      event.target.style.background = "rgb(255, 105, 97)";
    }
  });
});
