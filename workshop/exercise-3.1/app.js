function createButtons() {
  for (i = 0; i < 20; i++) {
    button = document.createElement("button");
    button.innerText = "Click";
    button.setAttribute("class", "red");
    document.body.appendChild(button);
  }
}

createButtons();

document.querySelectorAll("button").forEach(function (item) {
  item.addEventListener("click", function () {
    item.style.backgroundColor = "#5ca08e";
  });
});
