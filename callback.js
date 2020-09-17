const { getCharacters, isMario } = require('./first_class_objects');

// Higher Order function
// the function that takes another function as an input parameter or that returns another function

const printHello = (fct) => {
  // const fct = getCharacters;
  // fct = #A3ED1D
  // fct()
  console.log(`Hello ${fct()}`);
};

// printHello(getCharacters);

// the fct should return all nbs div by 3
const divByThree = (nums) => {
  const outputNums = [];

  // iterate through nums
  for (let nb of nums) {
    // check if the nb is div by 3
    if (nb % 3 === 0) {
      // store it in an array
      outputNums.push(nb);
    }
  }

  // return numbers div by 3
  return outputNums;
};

// better way than duplicating the functions above

const divByFive = (nums) => {
  const outputNums = [];

  // iterate through nums
  for (let nb of nums) {
    // check if the nb is div by 3
    if (nb % 5 === 0) {
      // store it in an array
      outputNums.push(nb);
    }
  }

  // return numbers div by 3
  return outputNums;
};

const divBy = (nums, div) => {
  const outputNums = [];

  // iterate through nums
  for (let nb of nums) {
    // check if the nb is div by 3
    if (nb % div === 0) {
      // store it in an array
      outputNums.push(nb);
    }
  }

  // return numbers div by 3
  return outputNums;
};


const filter = (nums, callback) => {

  // callback = divBy3;

  const outputNums = [];

  // iterate through nums
  for (let nb of nums) {
    // check if the nb is div by 3
    if (callback(nb)) {
      // store it in an array
      outputNums.push(nb);
    }
  }

  // return numbers div by 3
  return outputNums;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const divBy2 = (nb) => nb % 2 === 0;

const divBy3 = (nb) => nb % 3 === 0;

const divBy5 = (nb) => nb % 5 === 0;

const higherNb = (nb) => nb >= 5;

const result = filter(list, (nb) => nb % 3 === 0);

// const result = list.filter(divBy3);


// const result = divBy(list,2);
console.log(result);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// the fct applies a transformtion on each element of the array and returns a new array
// ex.: double each number
// expected result: [2,4,6,8,10,12,14,16,18,20]

const update = (nums, callback) => {

  // callback = nb => nb * 2

  // we need an ouput array
  const outputNums = [];

  // iterate through the array
  for (let nb of nums) {
    // apply the callback fct on each element
    const result = callback(nb);
    // push the result to the output array
    outputNums.push(result);
  }

  // return output array
  return outputNums;
};

const double = nb => nb * 2;

// const resultUpdate = update(list, n => n * 2);
const resultUpdate = update(list, n => n * n);
// const resultUpdate = list.map(n => n * n);

console.log(resultUpdate);

// Single Respnsability Principle

// a function should have a single goal. 