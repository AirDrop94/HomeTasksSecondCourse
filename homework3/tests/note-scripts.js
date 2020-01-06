// eslint-disable-next-line rules,no-unused-vars
const Notes = ((function () {
  const OBJECT_NAME = 'notes';
  // eslint-disable-next-line no-unused-vars
  let notesObj = [];
  const NOTE_MESSAGES = {
    undefinedNote: {
      error: true,
      class: 'warning',
      text: 'Undefined object, please init notes',
    },
    titleIsEmpty: {
      error: true,
      class: 'warning',
      text: 'Note title empty or not correct',
    },
    noDataInObj: {
      error: true,
      class: 'warning',
      text: 'Note does`t have date, please add info',
    },
    noteObjLoadedOnLclStg: {
      error: false,
      class: 'success',
      text: 'Notes loaded on localStorage',
    },
    emptyDataOnLclStg: {
      error: true,
      class: 'info',
      text: 'No data in localStorage',
    },
    titleNotUnique: {
      error: true,
      class: 'warning',
      text: 'Not unique title',
    },
    noteAdded: {
      error: false,
      class: 'success',
      text: 'Note added',
    },
    noteReturnedWithThisTitle: {
      error: false,
      class: 'info',
      text: 'Required note returned',
    },
    noteDoesntReturnedWithThisTitle: {
      error: true,
      class: 'warning',
      text: 'Required note does`t exist',
    },
    invalidTitle: {
      error: true,
      class: 'warning',
      text: 'Invalid title, please change',
    },
    showAllNotes: {
      error: false,
      class: 'info',
      text: 'Showed all notes',
    },
    delNote: {
      error: false,
      class: 'danger',
      text: 'Note was deleted',
    },
    delCanNotOfThisTitle: {
      error: true,
      class: 'warning',
      text: 'No have notes of this title',
    },
  };

  // eslint-disable-next-line no-unused-vars
  const initNote = () => {
    if (localStorage.getItem(OBJECT_NAME)) {
      // eslint-disable-next-line no-const-assign
      notesObj = JSON.parse(localStorage.getItem(OBJECT_NAME));
      return NOTE_MESSAGES.noteObjLoadedOnLclStg;
    }
    notesObj = [];
    return NOTE_MESSAGES.emptyDataOnLclStg;
  };

  const dataSaved = (obj) => {
    const data = [...obj];
    localStorage.setItem(OBJECT_NAME, JSON.stringify(data));
  };


  const objectValidation = () => {
    if (notesObj === undefined) return NOTE_MESSAGES.undefinedNote;
    if (notesObj === 0) return NOTE_MESSAGES.noDataInObj;
    return { error: false };
  };

  const addNoteOnList = (addTitle, addBody) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of notesObj) {
      if (item.title === addTitle) {
        return NOTE_MESSAGES.noteReturnedWithThisTitle;
      }
    }
    const newNote = {
      title: addTitle,
      body: addBody,
    };
    notesObj.push(newNote);
    dataSaved(notesObj);
    return NOTE_MESSAGES.noteAdded;
  };

  const deleteNoteByTitle = (delTitle) => {
    if (objectValidation().error) return objectValidation();
    // eslint-disable-next-line no-restricted-syntax
    for (const item of notesObj) {
      if (item.title === delTitle) {
        const notesDelete = notesObj.splice(notesObj.indexOf(item), 1);
        // eslint-disable-next-line no-undef
        dataSaved(notesObj);
        return {
          ...NOTE_MESSAGES.delNote,
          ...notesDelete,
        };
      }
    }
    return NOTE_MESSAGES.delCanNotOfThisTitle;
  };

  const showNoteByTitle = (newTitle) => {
    if (objectValidation().error) return objectValidation();
    if (!newTitle) return NOTE_MESSAGES.noteReturnedWithThisTitle;
    // eslint-disable-next-line no-restricted-syntax
    for (const item of notesObj) {
      if (item.title === newTitle) {
        const newNote = {
          title: item.title,
          body: item.body,
        };
        return Object.assign(NOTE_MESSAGES.noteReturnedWithThisTitle, newNote);
      }
    }
    return NOTE_MESSAGES.noteDoesntReturnedWithThisTitle;
  };

  const showAllTitlesNotes = () => {
    if (objectValidation().error) return objectValidation();
    const arrayTitles = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of notesObj) arrayTitles.push(item.title);
    return {
      arr: arrayTitles,
      ...NOTE_MESSAGES.showAllNotes,
    };
  };
  return {
    init() {
      return initNote();
    },
    addNotes(title, body = '') {
      return addNoteOnList(title, body);
    },
    showNote(title) {
      return showNoteByTitle(title);
    },
    showAllNotes() {
      return showAllTitlesNotes();
    },
    delNote(title) {
      return deleteNoteByTitle(title);
    },
  };
})());
