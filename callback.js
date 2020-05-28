// HIGHER-ORDER FUNCTION
// A function that can accept naother function as input parameters OR
// a function that returns another function

// EXAMPLE 1
// create a function that takes in an array and output a new array of all the numbers div by three
// [1,2,3,4,5,6,7,8,9,10] -> [3,6,9]

const divByThree = function(list) {
  // define a placeholder for the result
  const divByArr = [];

  // iterate throught the list
  for (let item of list) {
    // check that the number is div by three, add it
    if (item % 3 === 0) {
      divByArr.push(item);
    }
  }

  // return the result
  return divByArr;
};

// DOWNSIDES
// The function cannot be re-used if we want to divide numbers other than by three
// Potential Solution: Introduce a second parameter

// EXAMPLE 2
// The function accepts a second parameter

const divBy = function(list, div) {
  // define a placeholder for the result
  const divByArr = [];

  // iterate throught the list

  for (let item of list) {
    // check that the number is div by three, add it
    if (divByFive(item)) {
      divByArr.push(item);
    }
  }

  // return the result
  return divByArr;
};

// PROS: Any factor can be passed in
// CONS: The function is still restricted to a div by method
// Solution: Pass the condition in the form of a function

// EXAMPLE 3
// Using a callback function as the second parameter

const filter = function(list, callback) {
  // We need to imagine that JS will perform one of these assignments:
  // const callback =  function(nb) {
  //   return nb % 3 === 0;
  // };

  // const callback =  function(nb) {
  //   return nb % 5 === 0;
  // };

  // define a placeholder for the result
  const filteredList = [];

  // iterate throught the list
  for (let item of list) {
    // The execution of the callback returned a boolean.
    if (callback(item)) {
      filteredList.push(item);
    }
  }

  // return the result
  return filteredList;
};

// Callback function defined in the global scope
const divByNumber = function(nb) {
  return nb % 3 === 0;
};

// Callback function defined in the global scope
const divByFive = function(nb) {
  return nb % 5 === 0;
};

// Callback function defined in the global scope
const higherNbs = function(nb) {
  return nb > 5;
};

// Passing a function as the second argument
log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], divByNbThree));
log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], divByNbFive));
log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], higherNbs));

// Single Responsability Principle
// A function should have a single purpose
// Benefit of Higher-order function
// - instead of having a function that does 2 things, we have 2 fcts that does a single thing

// EXAMPLE 4
// Using arrow functions in-line

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// in-line function expression
log(
  filter(numbers, function(nb) {
    return nb < 6;
  })
);

// in-line arrow function
log(filter(numbers, nb => nb < 6));
