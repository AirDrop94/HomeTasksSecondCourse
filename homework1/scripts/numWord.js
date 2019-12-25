// eslint-disable-next-line rules
/* function getNumWord(num, word1, word2, word5) {
  let dd = num % 100;

  if ((dd >= 11) && (dd <= 19)) {
    return word5;
  }

  let oneDigit = num % 10;

  if (oneDigit === 1) {
    return word1;
  }

  if (oneDigit >= 2 && oneDigit <= 4) {
    return word2;
  }
  return word5;
} */

function getNumWord(num, word1, word2, word5) {
  const oneDigit = num % 10;
  const dd = num % 100;

  // eslint-disable-next-line default-case
  switch (dd) {
    case 11:
    case 12:
    case 13:
    case 14:
      return word5;
  }

  switch (oneDigit) {
    case 1:
      return word1;
    case 2:
    case 3:
    case 4:
      return word2;
    default:
      return word5;
  }
}

/*
function makeTest() {
  // eslint-disable-next-line radix
  const applesCount = parseInt(prompt('Сколько яблок?'));
  if (applesCount) {
    alert(`У вас ${applesCount} ${getNumWord(applesCount,
      'яблоко', 'яблока', 'яблок')}`);
  }
}

makeTest();
*/
