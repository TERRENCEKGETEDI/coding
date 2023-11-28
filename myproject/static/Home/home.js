function toggleContentYou() {
  var contentContainer = document.querySelector('.content-containerYou');
  contentContainer.classList.toggle('hidden');
  var element = document.getElementById('changeColorElement');
  var randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
}
function toggleContentSubs() {
var contentContainer = document.querySelector('.content-containerSubs');
contentContainer.classList.toggle('hidden');
var element = document.getElementById('changeColorElement2');
var randomColor = getRandomColor();
element.style.backgroundColor = randomColor;
}
function settings() {
var contentContainer = document.querySelector('.content-containerSettings');
contentContainer.classList.toggle('hidden');
var element = document.getElementById('changeColorElement3');
var randomColor = getRandomColor();
element.style.backgroundColor = randomColor;
}
function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

