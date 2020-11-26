// A function is a first-class citizen (or first-class object)
// A js function behaves like any other value
// const number = 1;
// const log = console.log
// it can also be passed as an arguement to another function
// a function can return another function


const log = console.log;

console.log('hello'); // calling function
console.log; // is not calling the function,  function definition

console.log(log); //what?? [Function: log]


// getCharacters(); // function call before the function definition. won't work with a function expression.

// Function expression = function that does not start with the `function` keyword in front
const getCharacters = () => {
  const characters = ['Froddo', 'Sam', 'Pepin', 'Merry'];
  const index = Math.floor(Math.random() * 4);

  return characters[index];
};

// Function declaration, that starts with the `function`
// function declaration gets hoisted
function getCharacters2() {
  const characters = ['Froddo', 'Sam', 'Pepin', 'Merry'];
  const index = Math.floor(Math.random() * 4);

  return characters[index];
}

console.log(getCharacters2);


// execute the function => ()
console.log(getCharacters());

// printing the definition body of that function [Function: getCharacters]
console.log(getCharacters);

// log and console.log are the same

log("hello");
