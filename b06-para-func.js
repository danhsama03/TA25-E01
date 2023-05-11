function filterArray(arr, checkFn) {
  const filteredArray = [];
  for (const item of arr) {
    if (checkFn(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}

function main() {
  // Ví dụ sử dụng
  const words = ["javascript", "java", "typescript", "functions"];
  const longWords = filterArray(words, (word) => word.length > 9);
  console.log(longWords); // ["javascript", "typescript"]

  const wordBeginJ = filterArray(words, (word) => word[0] == 'j');
  console.log(wordBeginJ); // ["javascript", "java"]
}

