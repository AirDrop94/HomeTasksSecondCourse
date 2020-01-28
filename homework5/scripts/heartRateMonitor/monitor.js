const alertMsg = document.querySelector('#msgWindow');
const msgRender = document.querySelector('#msgAlert');
const inputBeats = document.querySelector('#beatsPerSeconds');
const startMonitor = document.querySelector('#startMonitor');
const resetMonitor = document.querySelector('#resetMonitor');
const sendBeats = document.querySelector('#sendBeats');

const monitorMessages = {
  msg1: 'Monitor will start in: ',
  msg2: 'Monitoring: ',
  msg3: 'Please, input count of beats',
  val1: 5,
  val2: 15,
};

function Monitor(elem, text, value, done) {
  this.elem = elem;
  this.text = text;
  this.value = value;
  this.done = done;
  // eslint-disable-next-line no-unused-expressions
  this.intervalId;

  // eslint-disable-next-line func-names
  this.start = () => {
    // eslint-disable-next-line no-undef
    this.intervalId = setInterval(() => {
      this.value -= 1;
      this.elem.innerHTML = this.text + this.value;
      if (this.value === 0) {
        this.pause();
        // eslint-disable-next-line no-unused-expressions
        this.done ? this.done() : null;
      }
      alertMsg.classList.add('d-block');
    }, 1000);
  };

  this.pause = () => {
    clearInterval(this.intervalId);
  };

  this.showMsg = function () {
    setTimeout(() => {
      this.elem.innerHTML = monitorMessages.msg3;
    }, ((monitorMessages.val1) * 1000) + ((monitorMessages.val2) * 1000) + 2000);
  };

  this.showResult = function () {
    const res = inputBeats.value;
    setTimeout(() => {
      this.elem.innerHTML = `Your pulse makes: ${(res) * 4} bets per minute`;
    }, 1000);
  };

  this.reset = () => {
    this.elem.innerHTML = '';
    inputBeats.value = '';
  };
}

const monitor = new Monitor(alertMsg, monitorMessages.msg1, monitorMessages.val1);
const monitor2 = new Monitor(alertMsg, monitorMessages.msg2, monitorMessages.val2);

startMonitor.addEventListener('click', (event) => {
  event.preventDefault();
  monitor.start();
  setTimeout(() => {
    monitor2.start();
  }, (monitorMessages.val1) * 1000);
  monitor2.showMsg();
});

sendBeats.addEventListener('click', (event) => {
  event.preventDefault();
  monitor2.showResult();
});

resetMonitor.addEventListener('click', (event) => {
  event.preventDefault();
  monitor2.reset();
});
