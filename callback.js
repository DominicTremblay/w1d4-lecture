// get a list of scrabble words
const scrabbleWords = require('./scrabble_words');


// create a function that will give me only the 3 letter words
// the function will ouput only an array with words that contain 3 letter.
const threeLetterWords = function (wordsArr) {
  // define an array that will hold the result
  const threeLettersArr = [];

  // iterate throught the words arr
  for (let word of wordsArr) {
    // condition: is the length of the current word === 3?
    if (word.length === 3) {
      // if yes -> add it to the result array
      threeLettersArr.push(word);
    }
  }

  // return result array
  return threeLettersArr;
};


const fourLetterWords = function (wordsArr) {
  // define an array that will hold the result
  const threeLettersArr = [];

  // iterate throught the words arr
  for (let word of wordsArr) {
    // condition: is the length of the current word === 3?
    if (word.length === 4) {
      // if yes -> add it to the result array
      threeLettersArr.push(word);
    }
  }

  // return result array
  return threeLettersArr;
};


// Single Responsability Principle
// a Function should do a single thing


const isRightLength = function (word, length) {
  return word.length === length;
}

const startsLetter = function(word, letter) {
  return word[0] === letter
}

const getFixLengthWord = function (wordsArr, length) {

  // length=8
  // define an array that will hold the result
  const fixedLengthWords = [];

  // iterate throught the words arr
  for (let word of wordsArr) {
    // condition: is the length of the current word === 3?
    if (word.length === lenght) {
      // if yes -> add it to the result array
      fixedLengthWords.push(word);
    }
  }

  // return result array
  return fixedLengthWords;
};



const filter = function(list, callback) {

  // const callback = function(word) {
  // return word.length === 4;
// }

  const filteredItems = [];

  for (let item of list) {
    if (callback(item)) {
      filteredItems.push(item);
    }
  }
  return filteredItems;
}

const isThreeLetter = function(word) {
  return word.length === 3;
}

const isFourLetter = function(word) {
  return word.length === 4;
}

const startLetterC = function(word) {
  return word[0] === 'c';
}


// const result = threeLetterWords(scrabbleWords);
// const result = fourLetterWords(scrabbleWords);
// const result = getFixLengthWord(scrabbleWords, 8);
// const result = somfct(scrabbleWords) => all words that starts with letter 'c'
// const result = filter(scrabbleWords, isFourLetter);
const result = filter(scrabbleWords, startLetterC);

console.log(result);