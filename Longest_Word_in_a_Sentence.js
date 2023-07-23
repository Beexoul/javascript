//Finding the Longest Word in a Sentence

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const sentence = "The quick brown fox jumped over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log(`The longest word in the sentence is: ${longestWord}`);
