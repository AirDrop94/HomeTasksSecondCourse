function isPolyndrome1(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
  alert('true');
}

console.log(isPolyndrome1('abBa'));
;
console.log(isPolyndrome1('abba'));
;

function isPolindrom2(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str;
}

console.log(isPolindrom2('12234'));
console.log(isPolindrom2('12221'));

function isPolyndrome3(str) {
  str = str.toLowerCase();
  const half = Math.floor(str.length / 2);
  return str.substr(0, Math.floor(half)) ===
      str.substr(Math.floor(str.length % 2 ? half+ 1 : half)).split('').reverse().join('');
}

console.log(isPolyndrome3('addaaa'));;
console.log(isPolyndrome3('aDaAdA'));