// a function that is a first-class object or first-class citizen
// - a function can be treated like any other value
// - it can passed as an input parameter to a another function
// - it can be returned by another function

const log = console.log;

// log("Hello");

// function declaration
// starts with function

// function declaration can be called before their declaration
// console.log(getCharacters1());

function getCharacters1 () {

  const characters = ['Mario','Luigi','Peach','Daisy']

  const index = Math.floor(Math.random() * characters.length);

  return characters[index];

}


const getCharacters2 = function () {
  
  const characters = ['Mario','Luigi','Peach','Daisy']
  
  const index = Math.floor(Math.random() * characters.length);
  
  return characters[index];
}


// arrow function
const getCharacters = () => {
  
  const characters = ['Mario','Luigi','Peach','Daisy']
  
  const index = Math.floor(Math.random() * characters.length);
  
  return characters[index];
}

const isMario = name => name === 'Mario' ? "Yeah I'm mario" : "No I'm not";

// const log = (val) => console.log(val)


// const char = getCharacters();
// log(isMario(char));


// printing the value
// console.log(getCharacters)

// printing the result of executing the function
// console.log(getCharacters())


// const result = getCharacters();
// console.log(result);

module.exports = getCharacters;

module.exports = {
  getCharacters: getCharacters,
  isMario: isMario
}

// module.exports = [getCharacters, isMario];