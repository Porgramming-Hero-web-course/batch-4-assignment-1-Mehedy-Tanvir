// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences(sentence: string, word: string): number {
  const lowerCasedSentence = sentence.toLowerCase();
  const lowerCasedWord = word.toLowerCase();

  const words = lowerCasedSentence.split(/\W+/);

  let count = 0;
  for (const word of words) {
    if (word === lowerCasedWord) {
      count++;
    }
  }

  return count;
}

// console.log(
//   countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// );
