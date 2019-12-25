describe('palindrome.js -> isPalindrome3 -> \n' +
    'return true if the string is a palindrome or return false', function() {

  it('Base test', function() {
    expect(isPalindrome3('abba')).toBeTrue();
    expect(isPalindrome3('agfa')).toBeFalse();
    expect(isPalindrome3('123454321')).toBe(true);
    expect(isPalindrome3('778977')).toBe(false);
  });
});

describe('palindrome.js -> isPalindrome2 -> \n' +
    'return true if the string is a palindrome or return false', function() {

  it('Base test', function() {
    expect(isPalindrome2('abba')).toBeTrue();
    expect(isPalindrome2('agfa')).toBeFalse();
    expect(isPalindrome2('123454321')).toBe(true);
    expect(isPalindrome2('778977')).toBe(false);
  });
});

describe('palindrome.js -> isPalindrome1 -> \n' +
    'return true if the string is a palindrome or return false', function() {

  it('Base test', function() {
    expect(isPalindrome1('abba')).toBeTrue();
    expect(isPalindrome1('agfa')).toBeFalse();
    expect(isPalindrome1('123454321')).toBe(true);
    expect(isPalindrome1('778977')).toBe(false);
  });
});

