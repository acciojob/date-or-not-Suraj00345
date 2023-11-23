var isDate = function (input) {
  return !isNaN(new Date(input));
};
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));



