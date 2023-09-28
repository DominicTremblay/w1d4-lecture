const scrabbleWords = require('./scrabble_words');

/* returns the array of three letter words
 * @wordsArray: an array of words of any length
 */

const threeLetterWords = (wordsArr) => {
  const threeLettersArr = [];

  for (let word of wordsArr) {
    if (word.length === 3) {
      threeLettersArr.push(word);
    }
  }
  return threeLettersArr;
};

const fourLetterWords = function (wordsArr) {
  const fourLettersArr = [];

  for (let word of wordsArr) {
    if (word.length === 4) {
      fourLettersArr.push(word);
    }
  }
  return fourLettersArr;
};

const startWithLetterC = function (wordsArr) {
  const startsWithCArr = [];

  for (let word of wordsArr) {
    if (word[0] === 'c') {
      startsWithCArr.push(word);
    }
  }
  return startsWithCArr;
};

const getWordsfromCondition = function (wordsArr, callback) {
  // const wordsArr = ['axe', 'boxe']
  // const condition = function (word) {
  //   return word.length === 3;
  // };

  const outputArr = [];

  for (let word of wordsArr) {
    if (callback(word)) {
      outputArr.push(word);
    }
  }
  return outputArr;
};

// gets a string and determine is it's three letters and send back true or false
const isItThreeLetter = (str) => {
  return str.length === 3;
};

const isItFourLetter = (str) => str.length === 4;

// const doesItStartWithC = function (str) {
//   return str[0] === 'c';
// };

// callback allows us to specify the behavior that we want
const result = getWordsfromCondition(scrabbleWords, (str) => str.length === 4);

console.log(result);
