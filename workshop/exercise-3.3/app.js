let button;

for (i = 0; i < 20; i++) {
  button = document.createElement("button");
  button.innerText = "Click";
  button.classList.add("red");
  button.style.backgroundColor = "red";
  button.style.position = "absolute";
  button.style.top = `${Math.random() * 1000}px`;
  button.style.left = `${Math.random() * 1500}px`;
  document.body.appendChild(button);
}

console.log(button.style.backgroundColor);

document.querySelectorAll("button").forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (event.target.style.backgroundColor === "red") {
      event.target.style.backgroundColor = "green";
    } else {
      event.target.style.backgroundColor = "red";
    }
  });
});
