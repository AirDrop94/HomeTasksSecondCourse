function generator() {
  const Error = function (msg) {
    this.msg = msg;
  };

  let counter = 1;
  let interval = null;

  interval = setInterval(() => {
    if (counter > 19) {
      clearInterval(interval);
    }
    counter += 1;
    const numCase = new Uint32Array(1);
    const pseudoNum = window.crypto.getRandomValues(numCase);
    const value = pseudoNum;

    if (value % 2 === 0) {
      console.log(`${value}`);
      throw new Error('Error: even number');
    } else if (value % 2 !== 0) {
      console.log(`${value} - Odd number`);
    }
    return false;
  }, 1000);
}

generator();
