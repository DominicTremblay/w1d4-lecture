// get an array of scrabble words
const scrabbleWords = require('./scrabble_words');

// create a function that will give me only the 3 letter words
// the function will ouput only an array with words that contain 3 letter.
// const letterWords = function (wordsArr, wordLength) {
//   const resultWords = [];

//   for (let word of wordsArr) {

//     // testing the lenght of the word
//     if (word.length === wordLength) {
//       resultWords.push(word);
//     }
//   }

//   return resultWords;
// };

const startWithLetter = function (wordsArr, letter) {
  const resultWords = [];

  for (let word of wordsArr) {

    // testing the lenght of the word
    if (word[0] === letter) {
      resultWords.push(word);
    }
  }

  return resultWords;
};


const filterWords = function(wordsArr, callback) {

  // const callback = function (word) {
  //   return word.length === 3;
  // };

  // const callback = function(word) {
  //   return word[0] === 'c';
  // }


  const resultWords = [];

  for (let word of wordsArr) {

    // testing the lenght of the word
    if (callback(word)) {
      resultWords.push(word);
    }
  }

  return resultWords;
}

const startsWithC = function(w) {
  return w[0] === 'c';
}

// return if the word is a three letter word => true or false
// const threeLetterWords = function (word) {
//   return word.length === 3;
// }

const fourLetterWords = function (word, wordLength) {
  return word.length === wordLength;
}

const resultThreeLetters = filterWords(scrabbleWords, (w) => w.length === 3);




const resultStartWithC = filterWords(scrabbleWords, startsWithC);
const resultFourLetters = filterWords(scrabbleWords, fourLetterWords);

// console.log(resultFourLetters);

// const threeLetters = letterWords(scrabbleWords, 3);
// const fourLetters = letterWords(scrabbleWords, 4);
// const fiveLetterWords = letterWords(scrabbleWords, 5);

// const wordsWithC = startWithLetter(scrabbleWords, 'c');
// console.log(wordsWithC);

const threeLetterWords = scrabbleWords.filter((w) => w.length === 3);
console.log(scrabbleWords.filter(w => w.length > 5));