// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(numbersArray: number[]) {
  const uniqueNumbers: number[] = [];

  for (let num of numbersArray) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  }
  return uniqueNumbers;
}

// console.log(removeDuplicates([4, 1, 2, 2, 3, 4, 4, 5]));
