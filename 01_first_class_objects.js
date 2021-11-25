// ## Functions as First-Class Objects (First-class citizen)

// - A function can be treated like any other value in JS
// - It can be assigned to a variable
// - It can be passed as an argument
// - It can returned by another function

// we can assigned a function to a variable
const log = console.log;

// getCharacter
// @localLog: function

const getCharacter = function(localLog) {
  // const localLog = console.log;

  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];

  const index = Math.floor(Math.random() * characters.length);

  // localLog("Character:", characters[index]);

}

const character = getCharacter(console.log);

// console.log("character:", character);
