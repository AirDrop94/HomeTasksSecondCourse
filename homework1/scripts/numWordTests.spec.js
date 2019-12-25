describe('numWord.js -> getNumWord -> ' + '\n' +
    'checking the correctness of the displayed words', function() {

  it('Base test', function() {
    expect(getNumWord(3,'яблоко', 'яблока', 'яблок')).toBe('яблока');
    expect(getNumWord(5,'яблоко', 'яблока', 'яблок')).toBe('яблок');
    expect(getNumWord(1,'яблоко', 'яблока', 'яблок')).toBe('яблоко');
    expect(getNumWord(1001,'яблоко', 'яблока', 'яблок')).toBe('яблоко');
    expect(getNumWord(101,'яблоко', 'яблока', 'яблок')).toBe('яблоко');
  });
});