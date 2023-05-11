function filterArray(arr: string[], checkFn: (item: string) => boolean): string[] {
  const filteredArray: string[] = [];
  for (const item of arr) {
    if (checkFn(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}

function main(): void {
  // Ví dụ sử dụng
  const words = ["javascript", "java", "typescript", "functions"];
  const longWords = filterArray(words, (word) => word.length > 9);
  console.log(longWords); // ["javascript", "typescript"]

  const wordBeginJ = filterArray(words, (word) => word[0] == 'j');
  console.log(wordBeginJ); // ["javascript", "java"]
}

main();

