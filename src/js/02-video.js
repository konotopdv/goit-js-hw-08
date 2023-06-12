import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const playerEl = document.querySelector('iframe');
const player = new Player('playerEl');
const key = 'videoplayer-current-time';
const currentTime = windows.localStorage.getItem(key);

player.on(
  'timeupdate',
  throttle(data => {
    window.localStorage.setItem(key, data.seconds);
  }, 1000)
);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    seconds = currentTime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
