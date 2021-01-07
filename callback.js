// get an array of scrabble words
const scrabbleWords = require('./scrabble_words');

// create a function that will give me only the 3 letter words
// the function will ouput only an array with words that contain 3 letter.

const threeLetterWords = function (wordsArr) {
  const output = [];

  //iterate over the words arr
  for (let word of wordsArr) {
    // test if length of word is 3
    if (word.length === 3) {
      // add the word to output
      output.push(word);
    }
  }

  return output;
};

const fourLetterWords = function (wordsArr) {
  const output = [];

  //iterate over the words arr
  for (let word of wordsArr) {
    // test if length of word is 4
    if (word.length === 4) {
      // add the word to output
      output.push(word);
    }
  }

  return output;
};

const letterWords = function (wordsArr, nbLetters) {
  const output = [];

  //iterate over the words arr
  for (let word of wordsArr) {
    // test if length
    if (word.length === nbLetters) {
      // add the word to output
      output.push(word);
    }
  }

  return output;
};

const startWithC = function (wordsArr) {
  const output = [];

  //iterate over the words arr
  for (let word of wordsArr) {
    // test if the first letter is 'c'
    if (word[0] === 'c') {
      // add the word to output
      output.push(word);
    }
  }

  return output;
};

// Single Responsibility Principle
// A function should do a single thing
// seperate the logic of startWithC into 2 distinct functions

// return a boolean from a condition
const startLetterC = function (word) {
  return word[0] === 'c';
};

const fourLetter = function (word) {
  return word.length === 4;
};

const filterWords = function (wordsArr, callback) {
  // const callback = function(word) {
  //   return word.length === 4;
  // }

  const output = [];

  //iterate over the words arr
  for (let word of wordsArr) {
    // test if the first letter is 'c'
    if (callback(word)) {
      // add the word to output
      output.push(word);
    }
  }

  return output;
};

// const result = startLetterC('notcool');

const containsX = function (word) {
  let regex = new RegExp(/x/i);

  return regex.test(word);
};

const filter = function (list, callback) {
  const output = [];

  for (let item of list) {
    if (callback(item)) {
      output.push(item);
    }
  }

  return output;
};

const even = function(nb) {
  return nb % 2 ===0;
}

const result = filter([1,2,3,4,5], even);

// built-in filter function
// const result = [1,2,3,4,5].filter(even);

console.log(result);
