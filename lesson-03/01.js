// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое
const numbers1 = 4;
const numbers2 = 5;

function calculateAverage(numbers1, numbers2) {
  let summ = 0;
  let count = 0;
  const length = 2;
  while (count < length) {
    summ = numbers1 + numbers2;
    count++;
  }
  const result = summ / length;
  return result;
}

console.log(calculateAverage(numbers1, numbers2));
