import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const playersTime = el => {
  console.log(el);

  localStorage.getItem(STORAGE_KEY, el.seconds);

  // player.getCurrentTime().then(function (seconds) {
  //   localStorage.setItem(STORAGE_KEY, seconds);
  // });
};

player.on('timeupdate', throttle(playersTime, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(currentTime);
