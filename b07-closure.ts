function calculateAverage(): (n: number) => number {
  let sum: number = 0;
  let count: number = 0;

  function addNumber(number: number): number {
    sum += number;
    count++;
    return sum / count;
  }

  return addNumber;
}

const average: (n: number) => number = calculateAverage();

console.log(average(2)); // 2
console.log(average(4)); // 3
console.log(average(6)); // 4
