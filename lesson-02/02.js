/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1; // your code
let dice2; // your code
let isWinningDouble = false; // your code

const randomNum1 = Math.floor(Math.random() * 6 + 1);
if (randomNum1 === 1) {
  dice1 = 1;
} else if (randomNum1 === 2) {
  dice1 = 2;
} else if (randomNum1 === 3) {
  dice1 = 3;
} else if (randomNum1 === 4) {
  dice1 = 4;
} else if (randomNum1 === 5) {
  dice1 = 5;
} else if (randomNum1 === 6) {
  dice1 = 6;
}
console.log("Первый бросок: " + dice1);

let randomNum2 = Math.floor(Math.random() * 6 + 1);
if (randomNum2 === 1) {
  dice2 = 1;
} else if (randomNum2 === 2) {
  dice2 = 2;
} else if (randomNum2 === 3) {
  dice2 = 3;
} else if (randomNum2 === 4) {
  dice2 = 4;
} else if (randomNum2 === 5) {
  dice2 = 5;
} else if (randomNum2 === 6) {
  dice2 = 6;
}
console.log("Второй бросок: " + dice2);

if (dice1 > 3 && dice2 > 3 && dice1 === dice2) {
  isWinningDouble = true;
  console.log("Выигрышный дубль!");
} else {
  console.log("Не выигрышный дубль")
}

console.log(isWinningDouble);
/*
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
*/
