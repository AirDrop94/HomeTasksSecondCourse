const OBJECT_NAME = 'notes';
let temp;

function clearLocalStorage() {
  localStorage.setItem(OBJECT_NAME, '[]');
  Notes.init();
}

function addTwoNotes() {
  localStorage.setItem(OBJECT_NAME, '[{"title":"1","body":"ddd"},{"title":"2","body":"aaa"}]');
  Notes.init();
}

describe('note-scripts.js -> Notes.init(); -> Initialize notes on localStorage and parsing of object', function () {
  let notesObj = [];
  beforeEach(function () {
    const fake = JSON.stringify([{
      title: '1',
      body: 'ddd',
    }]);
    spyOn(localStorage, 'getItem').and.callFake(function () {
      notesObj = JSON.parse(fake);
    });
  });

  it('In localStorage.getItem(); notesObj is getting by, and parse by correct form ', function () {
    expect(notesObj).toEqual([]);
    Notes.init();
    expect(notesObj).toEqual([{
      title: '1',
      body: 'ddd',
    }]);
  });
});

describe('note-scripts.js -> Notes.addNotes -> Add note on list if there not repeated', function () {
  beforeEach(function () {
    clearLocalStorage();
  });

  const noteOne = {
    title: '1',
    body: 'ddd',
  };

  const noteTwo = {
    title: '2',
    body: 'aaa',
  };

  const noteThree = {
    title: '15',
    body: 'dddaaa',
  };
  it('should comeback error if it is absent then add with title 1', function () {
    temp = Notes.addNotes(noteOne.title, noteOne.body);
    expect(limit.error).toBe(false);
  });
  it('should comeback error if it is absent then add with title 2', function () {
    temp = Notes.addNotes(noteTwo.title, noteTwo.body);
    expect(limit.error).toBe(false);
  });
  it('should comeback error if it add with same title', function () {
    temp = Notes.addNotes(noteThree.title, noteThree.body);
    expect(limit.error).toBe(false);
  });
  it('should comeback error if it add with empty title and body', function () {
    temp = Notes.addNotes(' ', ' ');
    expect(limit.error).toBe(false);
  });
});

describe('script-note.js -> Notes.showNote -> Should view some note on list', function () {
  beforeEach(function () {
    addTwoNotes();
  });
  it('should return error: true when try to show note with different title // 1', function () {
    temp = Notes.showNote('1');
    expect(limit.error).toBe(false);
  });
  it('should return error: true when try to show note with different title // 1', function () {
    temp = Notes.showNote('2');
    expect(limit.error).toBe(false);
  });
  it('should return error: false when try to show note with same title // 10', function () {
    temp = Notes.showNote('10');
    expect(limit.error).toBe(true);
  });
});

describe('script-note.js -> Notes.showAllNotes -> test for showing all notes on list', function () {
  it('should return error: true && arr is undefined when try to show all notes on empty objNotes // 1', function () {
    clearLocalStorage();
    temp = Notes.showAllNotes();
    expect(limit.error).toBe(false);
  });
  it('should return error: false && arr.lenght > 0 when try to show all notes with objNotes with 3 Notes // 2', function () {
    addTwoNotes();
    temp = Notes.showAllNotes();
    expect(limit.error).toBe(false);
    expect(limit.arr.length).toBeGreaterThan(0);
  });
});

describe('script-note.js -> Notes.delNote -> Delete some note', function () {
  it('should return error: true when try to del notes in empty objNotes // 1', function () {
    clearLocalStorage();
    temp = Notes.delNote('1');
    expect(limit.error).toBe(true);
  });
  it('should return error: false when try to del existing note // 2', function () {
    addTwoNotes();
    temp = Notes.delNote('1');
    expect(limit.error).toBe(false);
  });
  it('should return error: true when try to del deleted note // 2', function () {
    addTwoNotes();
    Notes.delNote('1');
    temp = Notes.delNote('1');
    expect(limit.error).toBe(true);
  });
});
