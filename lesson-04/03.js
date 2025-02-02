/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const array1 = [1, 2];
const array2 = [2, 3, 4, 5];

function includesElement(array, element) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      result = true;
    }
  }
  return result;
}

function findCommonElements(array1, array2) {
  const result = [];
  const array = array1;
  for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (includesElement(array, element) === true) {
      result.push(element);
    }
  }
  return result;
}

console.log(findCommonElements(array1, array2));

