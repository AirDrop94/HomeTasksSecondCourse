// eslint-disable-next-line consistent-return,no-unused-vars
function StartStopwatch(renderElement, time = 60) {
  let value = time;
  let isOnPause = false;
  const element = renderElement;
  let interval = null;

  this.start = function () {
    interval = setInterval(() => {
      if (value === 0) {
        clearInterval(interval);
      }
      element.innerHTML = value;
      value -= 1;
    }, 1000);
  };

  this.pause = function () {
    if (!isOnPause) {
      clearInterval(interval);
      isOnPause = true;
      return true;
    }
    this.start();
    isOnPause = false;
    return true;
  };
}

const myTimer = document.querySelector('#myTimer');
const pauseButton = document.querySelector('#pauseButton');
const startStopwatch = new StartStopwatch(myTimer, 60);
startStopwatch.start();
pauseButton.addEventListener('click', () => {
  startStopwatch.pause();
});