// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
let rules = document.createElement("h1");
rules.innerText = "You have 1 second to click anywhere on the screen";

let winning = true;
let message = document.querySelector("#result");

window.addEventListener("click", function () {
  console.log("clicked");
  winning
    ? (message.innerText = "You win!")
    : (message.innerText = "You lost...");
});

setTimeout(function () {
  winning = false;
}, 1000);
