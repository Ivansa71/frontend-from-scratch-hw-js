// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

const numbers = [4, 6];

function calculateAverage(numbers) {
  let summ = 0;
  let count = 0;
  const length = numbers.length;
  while (count < length) {
    summ = summ + numbers[count];
    count++;
  }
  const result = summ / numbers.length;
  return result;
}

console.log(calculateAverage(numbers));
