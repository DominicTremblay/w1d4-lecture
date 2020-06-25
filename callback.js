// create a function divByThree
// accepts an array of numbers
// output all the numbers that are div by 3
// expected output: [3,6,9]

const divByThree = function (numbers) {
  const filteredNums = [];

  // loop over the array
  for (let num of numbers) {
    // checks if the nb is divisible by 3
    if (num % 3 === 0) {
      // add the nb in an output array
      filteredNums.push(num);
    }
  }
  // return the output array
  return filteredNums;
};

const divByFive = function (numbers) {
  const filteredNums = [];

  // loop over the array
  for (let num of numbers) {
    // checks if the nb is divisible by 5
    if (num % 5 === 0) {
      // add the nb in an output array
      filteredNums.push(num);
    }
  }
  // return the output array
  return filteredNums;
};

const divBy = function (numbers, div) {
  const filteredNums = [];

  // loop over the array
  for (let num of numbers) {
    // checks if the nb is divisible by div
    if (num % div === 0) {
      // add the nb in an output array
      filteredNums.push(num);
    }
  }
  // return the output array
  return filteredNums;
};

// filter function with a callback
// single responsibility principle: each function does 1 thing
// highly reusable

const filter = function (numbers, callback) {
  const filteredNums = [];

  // loop over the array
  for (let num of numbers) {
    // checks if the nb is divisible by div
    if (callback(num)) {
      // add the nb in an output array
      filteredNums.push(num);
    }
  }
  // return the output array
  return filteredNums;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(divByThree(nums));
// console.log(divByFive(nums));
// console.log(divBy(nums,2));

// check if the numer is higher than 5
const higherNb = function (nb) {
  return nb > 5;
};

const divByThrees = function (nb) {
  return nb % 3 === 0;
};

const evenNb = function (nb) {
  return nb % 2 === 0;
};

// console.log(filter(nums, higherNb));
// console.log(filter(nums, divByThrees));

// built-in js filter fct
// console.log(nums.filter(evenNb));

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// expected output = [2,4,6,8...] // double each number

// divByThree and higher than 5
console.log(divByThree(filter(nums, higherNb), divByThree));

// update is equivalent to the built-in map function!
const update = function (list, callback) {
  const filteredNums = [];

  // loop over the array
  for (let item of list) {
    filteredNums.push(callback(item));
  }

  return filteredNums;
};

const double = (nb) => nb * 2;

// problem here: we have to modify the update fct => less reusable
// const multiply = function(nb, mult) {
//   return nb * mult;
// };

console.log(update(nums, (nb) => nb * nb));
