const renderMsg = document.querySelector('#msgAlert');
const alertWindow = document.querySelector('#alertWindow');
const inputWindow = document.querySelector('#beatsPerSeconds');
const startButton = document.querySelector('#startMonitor');
const sendButton = document.querySelector('#sendBeats');
const resetButton = document.querySelector('#resetMonitor');

const inputsForTimer = {
  msg1: 'Monitor will start in:  ',
  msg2: 'Monitoring: ',
  msg3: 'Please, input count of beats',
  val1: 5,
  val2: 15,
};

function Monitor(renderElem, msg, temp, done) {
  this.renderElem = renderMsg;
  this.msg = msg;
  this.temp = temp;
  this.done = done;
  this.timerId;

  this.start = () => new Promise((resolve, reject) => {
    this.timerId = setInterval(() => {
      alertWindow.classList.add('d-block');
      this.temp -= 1;
      this.renderElem.innerHTML = this.msg + this.temp;
      if (this.temp === 0) {
        this.pause();
        resolve('Success');
      }
      if (this.temp < 0) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error');
      }
    }, 1000);
  });

  this.pause = () => {
    clearTimeout(this.timerId);
  };
}

const monitor1 = new Monitor(renderMsg, inputsForTimer.msg1, inputsForTimer.val1);
const monitor2 = new Monitor(renderMsg, inputsForTimer.msg2, inputsForTimer.val2);

const doneFn2 = () => {
  renderMsg.innerHTML = inputsForTimer.msg3;
  sendButton.addEventListener('click', () => {
    const result = inputWindow.value;
    renderMsg.innerHTML = `Your pulse: ${(result) * 4} beats per second`;
  });

  resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    monitor1.temp = inputsForTimer.val1;
    monitor2.temp = inputsForTimer.val2;
    renderMsg.innerHTML = '';
    inputWindow.value = '';
  });
};

startButton.addEventListener('click', () => {
  monitor1.start()
    .then(monitor2.start)
    .then(doneFn2);
});

// Old code
// eslint-disable-next-line  func-names
/* this.start = () => {
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
 const doneFn2 = () => {
  alertMsg.innerHTML = monitorMessages.msg3;
  sendBeats.addEventListener('click', () => {
    const res = inputBeats.value;
    alertMsg.innerHTML = `Your pulse makes: ${(res) * 4} beats per minute`;
  });
};

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
}); */
