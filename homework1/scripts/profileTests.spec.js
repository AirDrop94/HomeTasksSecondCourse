describe('profile.js -> getUserDate', function () {
  let variant = 1;
  let case1 = ['Иван'];
  let case2 = ['', 'Ivan'];
  let case3 = [NaN, ''];
  let case4 = [NaN, 'NaN'];
  let case5 = [undefined, '1984'];
  let expectedAnswers = ['Иван', 'Ivan', NO_DATA, 'NaN', '1984'];

  beforeEach(function () {
    spyOn(window, 'prompt').and.callFake(function () {
      let result;
      switch (variant) {
        case 1:
          result = case1.shift();
          if (case1.length === 0) variant += 1;
          return result;
        case 2:
          result = case2.shift();
          if (case2.length === 0) variant += 1;
          return result;
        case 3:
          result = case3.shift();
          if (case3.length === 0) variant += 1;
          return result;
        case 4:
          result = case4.shift();
          if (case4.length === 0) variant += 1;
          return result;
        case 5:
          result = case5.shift();
          if (case5.length === 0) variant += 1;
          return result;
        default:
          variant = 1;
      }
    });
  });

  it('output the response, ask again if there is no answer or output NO_DATA', function () {
    while (expectedAnswers.length !== 0) {
      let userDate = getUserDate();
      let answer = expectedAnswers.shift();
      expect(userDate).toBe(answer);
    }
  });
});

describe('profile.js -> checkAge', function () {
  it('checking age, true if age is more than 2 and less than or equal to 120', function () {
    expect(checkAge(10)).toBe(true);
    expect(checkAge(-10)).toBe(false);
    expect(checkAge(120)).toBe(true);
    expect(checkAge(121)).toBe(false);
    expect(checkAge(null)).toBe(false);
    expect(checkAge(undefined)).toBe(false);
    expect(checkAge(NaN)).toBe(false);
  })
});

describe('profile.js -> getNumAndWord', function () {
  it('correct word output corresponding to the meaning of the number', function () {
    expect(getNumAndWord(2,'яблоко','яблока','яблок')).toBe('2 яблока');
    expect(getNumAndWord(1,'яблоко','яблока','яблок')).toBe('1 яблоко');
    expect(getNumAndWord(5,'яблоко','яблока','яблок')).toBe('5 яблок');
    expect(getNumAndWord('two', 'яблоко','яблока','яблок')).toBe(NO_DATA);
    expect(getNumAndWord(' ', 'яблоко','яблока','яблок')).toBe(NO_DATA);
    expect(getNumAndWord(null, 'яблоко','яблока','яблок')).toBe(NO_DATA);
    expect(getNumAndWord(undefined, 'яблоко','яблока','яблок')).toBe(NO_DATA);
  });
});

describe('profile.js -> getYesOrNoOrOtherAnswer', function () {
  it('checking answers yes or no', function () {
    expect(getYesOrNoOrOtherAnswer(true, 'Yes', 'No')).toBe('Yes');
    expect(getYesOrNoOrOtherAnswer(false, 'Yes', 'No')).toBe('No');
    expect(getYesOrNoOrOtherAnswer(true, 'fits', '')).toBe('fits');
    expect(getYesOrNoOrOtherAnswer(false, 'fits', '')).toBe('');
  });
});

describe('profile.js -> checkOnRetire', function () {
  it('checking the user\'s gender and his retirement', function () {
    expect(checkOnRetire(45)).toBe(false);
    expect(checkOnRetire(63)).toBe(true);
    expect(checkOnRetire(70)).toBe(true);
    expect(checkOnRetire(55, true)).toBe(false);
    expect(checkOnRetire(63, false)).toBe(true);
    expect(checkOnRetire(58,false)).toBe(true);
    expect(checkOnRetire(70, true)).toBe(true);
  });

})