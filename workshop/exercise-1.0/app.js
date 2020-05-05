// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
document.body.style.height = "100vh";
document.body.addEventListener("click", function () {
  console.log("in func");
  let message = document.createElement("div");
  message.innerText = "You clicked on the screen";
  message.setAttribute("id", "message");
  document.querySelector("#main").appendChild(message);
});
