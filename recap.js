const filter = function (list, callback) {
  const output = [];

  for (let item of list) {

    // we want to execute the function 
    // at this moment only
    if (callback(item)) {
      output.push(item);
    }
  }

  return output;
};

const nums = [1,2,3,4,5,6,7,8,9,10];

// get an array of even number
// [2,4,6,8,10] (%2)

// return true or false
const isEven = function(nb) {

  return nb % 2 === 0;

}

const result = filter(nums, isEven);


higherThanFive(6);
// function declaration
// named function
function higherThanFive (nb) {
  return nb > 5;
}

// lowerThanThree(2); // fail!

// function expression
const lowerThanThree = function (nb) {
  return nb < 3;
}

lowerThanThree(2); // works!
