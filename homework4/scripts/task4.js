const Users = [
  {id: '1', name: 'Valary', dob: '1996-01-07'},
  {id: '2', name: 'John', dob: '1993-03-12'},
  {id: '3', name: 'Liam', dob: '2002-09-04'},
  {id: '4', name: 'Andrew', dob: '1999-02-15'},
  {id: '5', name: 'David', dob: '1998-04-23'},
  {id: '6', name: 'Joseph', dob: '1988-05-17'},
  {id: '7', name: 'Evelyn', dob: '2000-10-30'},
  {id: '8', name: 'Zoe', dob: '1993-11-27'},
  {id: '9', name: 'Thomas', dob: '1985-04-18'},
  {id: '10', name: 'Scarlett', dob: '1997-06-21'},
];

const userSort = (function () {
  function idUsersSort(par1, par3) {
    if (par3 === 'asc') {
      return par1.sort((a, b) => a.id - b.id);
    }
    if (par3 === 'desc') {
      return par1.sort((a, b) => a.id - b.id);
    }
    return false;
  }

  function nameOrDobUsersSort(par1, par2, par3) {
    if (par3 === 'asc') {
      // eslint-disable-next-line array-callback-return,consistent-return
      return par1.sort((a, b) => {
        const aName = a[par2].toLowerCase();
        const bName = b[[par2]].toLowerCase();
        if (aName > bName) return 1;
        if (aName < bName) return -1;
      });
    }
    if (par3 === 'desc') {
      // eslint-disable-next-line array-callback-return,consistent-return
      return par1.sort((a, b) => {
        const aName = a[par2].toLowerCase();
        const bName = b[par2].toLowerCase();
        if (aName > bName) return -1;
        if (aName < bName) return 1;
      });
    }
    return false;
  }

  function arraySort(par1, par2, par3) {
    if (par2 === 'id'){
      return idUsersSort(par1, par2);
    }
    if (par2 === 'name' || par2 === 'dob'){
      return nameOrDobUsersSort(par1, par2, par3);
    }
    return  false;
  }

  return {
    users(par1, par2, par3){
      return arraySort(par1, par2, par3);
    },
  };
}());

console.log(userSort.users(Users, 'dob', 'asc'));
console.log(userSort.users(Users, 'dob', 'desc'));
