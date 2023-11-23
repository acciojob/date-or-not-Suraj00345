var isDate = function (date) {
  if (typeof date === 'object' && date instanceof Date) {
    return !isNaN(date.getTime());
  } else if (typeof date === 'string' || typeof date === 'number') {
    return !isNaN(Date.parse(date));
  } else {
    return false;
  }
};
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

