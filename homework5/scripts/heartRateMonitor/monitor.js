const alertMsg = document.querySelector('#msgWindow');
const msgRender = document.querySelector('#msgAlert');
const inputBeats = document.querySelector('#beatsPerSeconds');
const startMonitor = document.querySelector('#startMonitor');
const sendBeats = document.querySelector('#sendBeats');

const monitorMessages = {
  msg1: 'App will start in: ',
  msg2: 'Monitoring: ',
  msg3: 'Please, input count of beats',
  val1: 5,
  val2: 15,
};

function Monitor(elementRender, message, limit) {
  const elem = elementRender;
  const text = message;
  let value = limit;
  let intervalId = null;

  this.start = function () {
    intervalId = setInterval(() => {
      if (value === 0) {
        clearInterval(intervalId);
      }
      alertMsg.classList.add('d-block');
      elem.innerHTML = text + value;
      value -= 1;
    }, 1000);
  };

  this.showMsg = function () {
    setTimeout(() => {
      elem.innerHTML = monitorMessages.msg3;
    }, ((monitorMessages.val1) * 1000) + ((monitorMessages.val2) * 1000) + 2000);
  };

  this.showResult = function () {
    const res = inputBeats.value;
    setTimeout(() => {
      elem.innerHTML = `Your pulse makes: ${(res) * 4} bets per minute`;
    }, 1000);
  };
}

const monitor = new Monitor(alertMsg, monitorMessages.msg1, monitorMessages.val1);
const monitor2 = new Monitor(alertMsg, monitorMessages.msg2, monitorMessages.val2);

startMonitor.addEventListener('click', () => {
  monitor.start();
  setTimeout(() => {
    monitor2.start();
  }, (monitorMessages.val1) * 1000);
  monitor2.showMsg();
});

sendBeats.addEventListener('click', () => {
  monitor2.showResult();
});
