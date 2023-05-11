function calculateAverage() {
    let sum = 0;
    let count = 0;
  
    function addNumber(number) {
      sum += number;
      count++;
      return sum / count;
    }
  
    return addNumber;
  }
  
  const average = calculateAverage();
  
  console.log(average(2)); // 2
  console.log(average(4)); // 3
  console.log(average(6)); // 4
  