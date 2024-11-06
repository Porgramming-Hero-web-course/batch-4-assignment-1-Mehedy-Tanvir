// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(numbersArray: number[]) {
  return numbersArray.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
}
