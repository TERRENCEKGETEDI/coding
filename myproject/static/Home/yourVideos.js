function toggleContentVideos() {
    var contentContainer = document.querySelector('.content-containeVideos');
    contentContainer.classList.toggle('hidden');
    var element = document.getElementById('changeColorElementVideos');
    var randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;
  }
  function toggleContentShorts() {
  var contentContainer = document.querySelector('.content-containerShorts');
  contentContainer.classList.toggle('hidden');
  var element = document.getElementById('changeColorElementShorts');
  var randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
  }
  function toggleContentLive() {
  var contentContainer = document.querySelector('.content-containerLive');
  contentContainer.classList.toggle('hidden');
  var element = document.getElementById('changeColorElementLive');
  var randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
  }
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
  
  