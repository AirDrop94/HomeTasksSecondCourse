// eslint-disable-next-line rules
let age;
const MALE = 'Мужской';
const FEMALE = 'Женский';
const NO_DATA = 'Нет данных';

function getUserDate(question = 'Введите ваше Имя') {
  let answ = prompt(`${question}:`);
  if (answ) {
    return answ;
  }
  answ = prompt(`${question} корректно, пожалуйста:`);
  return answ || NO_DATA;
}

function checkAge(num) {
  const toNum = parseInt(num, 10);
  return toNum > 1 && toNum <= 120;
}

function getNumAndWord(num, wrd1, wrd2, wrd3) {
  if (!parseInt(num, 10)) {
    return NO_DATA;
  }
  const dd = num % 100;
  const d = dd % 10;
  // eslint-disable-next-line default-case
  switch (dd) {
    case 11:
    case 12:
    case 13:
    case 14:
      return `${num} ${wrd3}`;
  }
  switch (d) {
    case 1:
      return `${num} ${wrd1}`;
    case 2:
    case 3:
    case 4:
      return `${num} ${wrd2}`;
    default:
      return `${num} ${wrd3}`;
  }
}

function getYesOrNoOrOtherAnswer(value, trueWord = 'Yes', falseWord = 'No') {
  return value ? trueWord : falseWord;
}

function checkOnRetire(ageOfRetire, sexToCheck = true) {
  return sexToCheck ? ageOfRetire >= 63 : ageOfRetire >= 58;
}

const NAME = getUserDate();
const SURNAME = getUserDate('Введите вашу Фамилию');
const PATRONYMIC = getUserDate('Введите ваше Отчество');
age = getUserDate('Сколько вам лет');
if (age !== NO_DATA && !checkAge(age)) {
  age = getUserDate('Введите числом и правильно сколько вам лет');
  if (!checkAge(age)) {
    age = NO_DATA;
  }
}

// eslint-disable-next-line no-restricted-globals
const SEX = confirm('Ваш пол мужской?');


alert(`
    Ваше ФИО: ${SURNAME} ${NAME} ${PATRONYMIC}
    Ваш возраст в годах: ${getNumAndWord(age, 'год', 'года', 'лет')}
    Ваш возраст в днях: ${getNumAndWord((age * 365), 'день', 'дня', 'дней')}
    Через 5 лет вам будет: ${getNumAndWord((+age + 5), 'год', 'года', 'лет')}
    Ваш пол: ${getYesOrNoOrOtherAnswer(SEX, MALE, FEMALE)}
    Вы на пенсии: ${getYesOrNoOrOtherAnswer(checkOnRetire(age, SEX))}`);
