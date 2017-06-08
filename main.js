(function () {
  'use strict';

  console.log('Page Loaded');
  console.log('Start time: ' + logDate());

  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function runClock () {
    var dateObject = logDate();
    clockFace(dateObject);
    changeBodyBG(dateObject);
  }

  function logDate () {
    var date = new Date();
    var dateSeconds = date.getSeconds();
    var dateMinutes = date.getMinutes();
    var dateHours = date.getHours();
    console.groupCollapsed('Time');
    console.log('Current Date: %s', date);
    console.log('Current Hour: %s', dateHours);
    console.log('Current Minute: %s', dateMinutes);
    console.log('Current Second: %s', dateSeconds);
    console.groupEnd();
    var dateObject = [dateHours, dateMinutes, dateSeconds];
    return dateObject;
  }

  function clockFace (dateObject) {
    hoursElement.textContent = ('0' + dateObject[0]).slice(-2);
    minutesElement.textContent = ('0' + dateObject[1]).slice(-2);
    secondsElement.textContent = ('0' + dateObject[2]).slice(-2);
  }

  function changeBodyBG (dateObject) {
    // var color = allTheColors[Math.floor(Math.random() * allTheColors.length)];
    var hue = (dateObject[2] * 30);
    var color = 'hsl(' + hue + ', 90%, 90%)';
    document.querySelector('body').style.background = color;
  }

  function replaceClockFace () {
    var currentBGColor = document.querySelector('body').style.background;
    currentBGColor = currentBGColor.slice(4, -1);
    currentBGColor = currentBGColor.split(', ');
    currentBGColor = rgb2hex(currentBGColor[0], currentBGColor[1], currentBGColor[2]);
    currentBGColor = currentBGColor.toUpperCase();
    currentBGColor = currentBGColor.slice(1);

    hoursElement.textContent = currentBGColor.slice(0, 2);
    minutesElement.textContent = currentBGColor.slice(2, 4);
    secondsElement.textContent = currentBGColor.slice(4, 6);
  }
  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  function rgb2hex (red, green, blue) {
    var rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
  }

  window.setInterval(runClock, 1000);

  var clockElement = document.getElementById('clock');
  clockElement.addEventListener('mouseover', replaceClockFace);
}());
