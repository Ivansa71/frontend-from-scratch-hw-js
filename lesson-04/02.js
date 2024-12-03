/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const array = [1, 2, 3, 2, 1, 4];

function includesElement(array, element) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      result = true;
    }
  }
  return result;
}

function findUniqueElements(array) {
  const result = []; // Массив для хранения уникальных элементов

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // Если элемента нет в result, добавляем его
    if (includesElement(result, element) === false) {
      result.push(element);
    }
  }

  return result; // Возвращаем массив уникальных элементов
}

// Пример использования:

console.log(findUniqueElements(array)); // Ожидается [1, 2, 3, 4]


//function findUniqueElements(array) {
  //const uniqueSet = new Set(array); // Set автоматически удаляет дубликаты
  //return Array.from(uniqueSet); // Преобразуем Set обратно в массив
//}
