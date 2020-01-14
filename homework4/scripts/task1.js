// eslint-disable-next-line rules
function getSecondBeforeEndDay() {
  const today = new Date();
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const different = tomorrow - today;
  const seconds = Math.round(different / 1000);
  // eslint-disable-next-line no-return-assign
  return document.getElementById('seconds').innerHTML = seconds;
}

console.log(getSecondBeforeEndDay());
