// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
const number = 10;
let parity;

function isEven(number) {
  if (number % 2 === 0) {
    parity = true;
  } else {
    parity = false;
  }
  return parity;
}

console.log(isEven(number));