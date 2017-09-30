function displayName() {
    document.getElementById("demo").innerHTML = document.getElementById('firstname').value + " " + document.getElementById('lastname').value;
}

function changeBodyColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setButtonText() {
    document.getElementById("button1").innerHTML = document.getElementById('buttonText').value;
    // document.getElementById("button1").innerHTML = "this is a button";
}