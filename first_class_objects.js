// ## Functions as First-Class Objects (First-class citizen)

// - A function can be treated like any other value in JS
// - It can be assigned to a variable
// - It can be passed as an argument
// - It can returned by another function


// global scope variable
const log = console.log;

log('Hello');

// Function Expression

const getCharacter = function (localLog) {
  // scope local to getCharacter
  //const localLog = console.log;
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];

  const index = Math.floor(Math.random() * characters.length);

  localLog(characters[index]);

};

getCharacter(console.log);
