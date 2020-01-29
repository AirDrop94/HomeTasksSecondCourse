// eslint-disable-next-line rules
const alertMsg = document.querySelector('#msgWindow');
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

  // eslint-disable-next-line no-shadow
  this.reset = (elem, value, done) => {
    this.elem = elem;
    this.value = value;
    this.done = done;
  };
}

const doneFn2 = () => {
  alertMsg.innerHTML = monitorMessages.msg3;
  sendBeats.addEventListener('click', () => {
    const res = inputBeats.value;
    alertMsg.innerHTML = `Your pulse makes: ${(res) * 4} beats per minute`;
  });
}

const doneFn = () => {
  const monitor2 = new Monitor(alertMsg, monitorMessages.msg2, monitorMessages.val2, doneFn2);
  monitor2.start();
};

startMonitor.addEventListener('click', () => {
  const monitor = new Monitor(alertMsg, monitorMessages.msg1, monitorMessages.val1, doneFn);
  monitor.start();
});


resetMonitor.addEventListener('click', (event) => {
  event.preventDefault();
  alertMsg.innerHTML = '';
  inputBeats.value = '';
});
