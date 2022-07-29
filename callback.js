
const divByNum = function(numbers, div) {

  const output = [];
  
  for (let nb of numbers) {
    
    if (nb % div === 0) {
      output.push(nb);
    }
  }
  
  return output;
  
}
// const result = divByNum ([1,2,3,4,5,6,7,8,9,10,11,12], 5) //=> [3,6,9,12]

const getOddNumbers = function(numbers) {

  const output = [];

  for (let nb of numbers) {

    if (nb % 2 !== 0) {
      output.push(nb);
    }
  }

  return output;

}
// const result = getOddNumbers ([1,2,3,4,5,6,7,8,9,10,11,12])
// console.log("Result:", result)


const filter = function(list, callback) {

  // console.log(callback.toString());

  // const list = [1,2,3,4,5,6,7,8,9,10,11,12]
  // const callback = function(nb) {
//   return nb > 5;
// }

  const output = [];
  for (let nb of list) {
// access to nb?
    if (callback(nb)) {
      output.push(nb);
    }

  }
  return output;
}

// const higherNums = function(nb) {
//   return nb > 5;
// }

// const divByThree = function(nb) {
//   return nb % 3 === 0;
// }

// const result = filter([1,2,3,4,5,6,7,8,9,10,11,12], higherNums)

// const result = filter([1,2,3,4,5,6,7,8,9,10,11,12], function(nb) {
//   return nb % 3 === 0;
// })

// console.log("result:", result)

// get an array of scrabble words
const scrabbleWords = require('./scrabble_words');
// console.log(scrabbleWords);

// create a function that will give me only the 3 letter words
// the function will ouput only an array with words that contain 3 letters.

const onlyThreeLetters = function (words) {

  const output = [];

  for (let word of words) {
    if (word.length === 3) {
      output.push(word);
    }
  }

  return output;

}

// const result = onlyThreeLetters(scrabbleWords);
// console.log("result:", result)

// create a function that will give me words that start with a specific letter
// the function will ouput only an array with words start with a specific letter.


const startWithLetter = function (words, letter) {

  const output = [];

  for (let word of words) {
    if (word[0] === letter) {
      output.push(word);
    }
  }

  return output;

}

// const result = filter(scrabbleWords, (word) => word[0] === 'b'));


const result = filter(scrabbleWords, function(word) {
    return word.length === 3
});
console.log("result:", result)