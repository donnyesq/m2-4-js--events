// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)

let winning = true;
let timeShown = document.querySelector("#time");
let result = document.querySelector("#result");
let timeLeft = Math.floor(Math.random() * (6 - 3) + 3);

setTimeout(function () {
  winning = false;
}, timeLeft * 1000);

window.addEventListener("click", function () {
  winning
    ? (result.innerText = "You win!")
    : (result.innerText = "You lose...");
});

// TIMER

timeShown.innerText = `${Math.round(timeLeft)}`;

let intervalID = setInterval(function () {
  timeLeft -= 1;
  timeShown.innerText = `${Math.round(timeLeft)}`;
  if (timeLeft < 1) {
    clearInterval(intervalID);
  }
}, 1000);
