// eslint-disable-next-line rules
function isPalindrome1(str) {
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

/* console.log(isPalindrome1('abBa'));
console.log(isPalindrome1('abba')); */


function isPalindrome2(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str;
}

/* console.log(isPalindrome2('12234'));
console.log(isPalindrome2('12221')); */

// eslint-disable-next-line no-unused-vars
function isPalindrome3(str) {
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase();
  const half = Math.floor(str.length / 2);
  return str.substr(0, Math.floor(half))
      === str.substr(Math.floor(str.length % 2 ? half + 1 : half)).split('').reverse().join('');
}

/* console.log(isPalindrome3('addaaa'));
console.log(isPalindrome3('aDaAdA')); */
