// Assiging a function to a variable
const log = console.log;

// log('Hello');

// Function Expression
const getCharacter = function() {
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  const index = Math.floor(Math.random() * characters.length);

  return characters[index];
};

// function declaration

function getCharacter() {
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  const index = Math.floor(Math.random() * characters.length);

  return characters[index];
}
// log(getCharacter());
