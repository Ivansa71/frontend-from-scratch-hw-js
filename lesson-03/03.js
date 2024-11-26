// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
const number1 = 122;
const number2 = 55;
const number3 = 33;

function findLargest(number1, number2, number3) {
  let lagestNumber
  if (number1 > number2 && number1 > number3) {
    lagestNumber = number1;
  } else if (number2 > number1 && number2 > number3) {
    lagestNumber = number2;
  } else {
    lagestNumber = number3;
  }
  return lagestNumber;
}

console.log(findLargest(number1, number2, number3));
