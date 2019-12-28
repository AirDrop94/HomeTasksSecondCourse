// eslint-disable-next-line no-unused-vars
function positiveSum(array) {
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      number += array[i];
    }
  }
  return number;
}

// eslint-disable-next-line no-unused-vars
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

// eslint-disable-next-line no-unused-vars
function centuryFromYear(year) {
  const century = year / 100;
  return Math.ceil(century);
}

// eslint-disable-next-line no-unused-vars
function arrayDiff(array1, array2) {
  if (array1.length === 0) {
    return [];
  } if (array2.length === 0) {
    return array1;
  }
  // eslint-disable-next-line no-unused-vars,no-undef
  const resultArr = [];
  for (let i = 0; i < array1.length; i++) {
    let toAdd = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] !== array2[j]) {
        toAdd = true;
      }
    }
    if (toAdd) {
      // eslint-disable-next-line no-undef
      resultArr.push(array1[i]);
      toAdd = false;
    }
  }

  // eslint-disable-next-line no-undef
  return resultArr;
}
