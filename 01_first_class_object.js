// Functions as First-class Objects

// - A function can be treated like any other value in JS
// - It can be assigned to a variable
// - It can be passed as an argument
// - It can returned by another function
// - we can assign a function to an

// function expression
const getChararacters = function () {
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  const index = Math.floor(Math.random() * characters.length);

  const log = console.log


  log(characters[index]);
};

getChararacters();