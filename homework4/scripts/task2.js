// eslint-disable-next-line rules
function getDaysBeforeBirthday() {
  // eslint-disable-next-line radix,no-unused-vars
  const year = parseInt(prompt('enter year (format: YYYY)'));
  // eslint-disable-next-line radix
  const month = parseInt(prompt('enter month (format: M)'));
  // eslint-disable-next-line radix
  const day = parseInt(prompt('enter day'));

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextDate = new Date([today.getFullYear(), month, day].join(','));
  if (nextDate < today) nextDate.setFullYear(today.getFullYear() + 1);

  // eslint-disable-next-line no-undef
  msPerDay = 24 * 60 * 60 * 1000;
  // eslint-disable-next-line no-undef
  daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
  // eslint-disable-next-line no-undef
  dayname = '';
  // eslint-disable-next-line no-undef
  ds = `${daysLeft}`;

  // eslint-disable-next-line no-undef,radix
  dd = parseInt(ds.substr(ds.length - 1));

  // eslint-disable-next-line no-undef
  if (daysLeft > 4 && daysLeft < 21) dayname = ' days';
  // eslint-disable-next-line no-undef,eqeqeq
  else if (dd == 1) dayname = ' day';
  // eslint-disable-next-line eqeqeq,no-undef
  else if (dd == 2 || dd == 3 || dd == 4) dayname = ' day';
  // eslint-disable-next-line no-undef
  else dayname = ' days';

  // eslint-disable-next-line no-undef,eqeqeq
  if (daysLeft == 0) {
    alert('Happy Bday!');
  } else {
    // eslint-disable-next-line no-undef,no-lonely-if,eqeqeq
    if (daysLeft == 1) {
      alert('Tomorrow your birthday!');
    } else {
      // eslint-disable-next-line no-undef
      alert(`left before your birthday ${daysLeft}${dayname}!`);
    }
  }
}
getDaysBeforeBirthday();
