// ## Functions as First-Class Objects (First-class citizen)

// - A function can be treated like any other value in JS
// - It can be assigned to a variable
// - It can be passed as an argument
// - It can returned by another function

const log = console.log;

log('hello');

// function expression
// assign an anonymous function to a variable

const getCharacter = function () {
  const characters = ['Froddo','Sam','Merry', 'Peppin'];
  const index = Math.floor(Math.random() * characters.length);
  console.log(characters[index]);
};

getCharacter();

// ## Higher-Order Functions

// - A function that accepts another function as input parameters or return another function

const getCharacter = function (log) {
  const characters = ['Froddo','Sam','Merry', 'Peppin'];
  const index = Math.floor(Math.random() * characters.length);
  log(characters[index]);
};

getCharacter(console.log);

