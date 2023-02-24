import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(localStorageSaveTime, 1000))

function localStorageSaveTime(currentTime) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
};

const savedTime = localStorage.getItem("videoplayer-current-time");
const parseSavedTime = JSON.parse(savedTime);
seconds = parseSavedTime.seconds;
player.setCurrentTime(seconds);