// function expression
// a fct as a first-class object
const fct = function () {
  console.log('hello');
};

// console.log(fct);

const log = console.log;

// log('Hello');

// function expression



const getCharacters = function () {
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  
  const index = Math.floor(Math.random() * characters.length);
  
  return characters[index];
};
// console.log(getCharacters());

// printHello is a higher order function
const printHello = function(fct) {

  console.log(`Hello ${fct()}`);
  
}

printHello(getCharacters);


// console.log(getCharacters());

// function declaration
function getCharacters2 () {
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];

  const index = Math.floor(Math.random() * characters.length);

  return characters[index];
};


