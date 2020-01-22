// Create a variable to target button
const colorBtn = document.querySelector(".color-btn");

// Create a variable to target body
const bodyBcg = document.querySelector("body");

// Create an array that holds all the background colors
const colors = [
  "yellow",
  "red",
  "green",
  "orange",
  "purple",
  "blue",
  "#3b5998",
  "grey",
  "black",
  "brown"
];

// Add event listen so when we click button something happens
// With a call-back function
colorBtn.addEventListener("click", changeColor);

// Create the call-back function
function changeColor() {
  //   bodyBcg.style.backgroundColor = colors[2];
  // Create a random number
  // Everytime we press button we want to get a random color from array
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
