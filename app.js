var flag = null; // This variable will help us control the car's movement.
var count = 5; // This variable keeps track of the car's position.

function start() {
  var car = document.getElementById("car"); // Get the car element from the webpage.
  count += 5; // Increase the car's position by 5 pixels.
  car.style.marginLeft = count + "px"; // Move the car by changing its margin.
}

document.getElementById("start").addEventListener("click", function () {
  if (!flag) {
    // If the car is not already moving (flag is null), start it.
    flag = setInterval(start, 10); // Move the car every 10 milliseconds.
  }
});

document.getElementById("stop").addEventListener("click", function () {
  if (flag) {
    // If the car is moving (flag is not null), stop it.
    clearInterval(flag); // Stop the interval that moves the car.
    flag = null; // Reset the flag to null.
  }
});

function resetCar() {
  var car = document.getElementById("car"); // Get the car element from the webpage.
  if (flag) {
    // If the car is moving (flag is not null), stop it.
    clearInterval(flag); // Stop the interval that moves the car.
    flag = null; // Reset the flag to null.
  }
  count = 5; // Reset the car's position to 5 pixels from the left.
  car.style.marginLeft = count + "px"; // Move the car to the start position.
}

document.getElementById("reset").addEventListener("click", function () {
  resetCar(); // Call the function to reset the car when the reset button is clicked.
});
