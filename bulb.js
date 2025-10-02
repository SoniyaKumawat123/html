function turnOn() {
  document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif";
  document.body.style.backgroundColor = "#fffde7"; // Light yellow background
}

function turnOff() {
  document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif";
  document.body.style.backgroundColor = "#f2f2f2"; // Default background
}
