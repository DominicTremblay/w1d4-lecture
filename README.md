#W1D4 - Callbacks

## Content

- First-class Objects (First-class citizen)
- Function declaration vs function expressions
- Higher-Order Functions
- Callbacks
  - Single Responsability Principle


## Debugging

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.

## Functions as First-Class Objects (First-class citizen)

- A function can be treated like any other value in JS
- It can be assigned to a variable
- It can be passed as an argument
- It can returned by another function

### Assigning a function to a variable

```js
const log = console.log;
log('Hello');
```

### An example of an anonymous function

```js
const getCharacter = function() {
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
};
```

## Differences between function declarations and function expressions

- Function declarations and function expressions provide the same functionality
- The main difference that we need to be aware of

  - The body of function declarations are hoisted contrary to function expressions
  - Hence function expressions cannot be called before their declaration

## Higher-Order Functions

- A function that accepts another function as input parameters or return another function

## Callbacks

- Suppose we want to create a function that will give me only the 3 letter words, we can use the following function:

```js
const threeLetterWords = function (wordsArr) {
  // define an array that will hold the result
  const threeLettersArr = [];

  // iterate throught the words arr
  for (let word of wordsArr) {
    // condition: is the length of the current word === 3?
    if (word.length === 3) {
      // if yes -> add it to the result array
      threeLettersArr.push(word);
    }
  }

  // return result array
  return threeLettersArr;
};
```

- Now this works, but what if we want the 4 letter words, we would have to code another function.

```js
const fourLetterWords = function (wordsArr) {
  // define an array that will hold the result
  const threeLettersArr = [];

  // iterate throught the words arr
  for (let word of wordsArr) {
    // condition: is the length of the current word === 3?
    if (word.length === 4) {
      // if yes -> add it to the result array
      threeLettersArr.push(word);
    }
  }

  // return result array
  return threeLettersArr;
};
```

- And we would repeat the function if we need 5,6,7, or 8 letter words
- When we repeat code, it means we're not following the DRY principle

- What if we want to make it more reusable. Let's generalize the function by adding a parameter:

```js
const isRightLength = function (word, length) {
  return word.length === length;
}

const startsLetter = function(word, letter) {
  return word[0] === letter
}

const getFixLengthWord = function (wordsArr, length) {

  // length=8
  // define an array that will hold the result
  const fixedLengthWords = [];

  // iterate throught the words arr
  for (let word of wordsArr) {
    // condition: is the length of the current word === 3?
    if (word.length === lenght) {
      // if yes -> add it to the result array
      fixedLengthWords.push(word);
    }
  }
```

- This version is much more reusable because it works with any length of words
- How do we generalize the function even more by providing the desired functionality as a parameter?
- Let's make a general filter function that works with any kind of filter by using a callback function:

```js
const filter = function(list, callback) {

  const filteredItems = [];

  for (let item of list) {
    if (callback(item)) {
      filteredItems.push(item);
    }
  }
  return filteredItems;
}
```

- To get the same result as the threeLetterWords function, we are providing the following **callback**:

```js
const isThreeLetter = function(word) {
  return word.length === 3;
}
```

- And we call the filter function using the callback:

```js
filter(numbers, isThreeLetter);
```

- Or we can simply create an anonymous function as an argument:

```js
filter(numbers, function(word) {
  return word.length === 3;
});
```

- In fact, we can pass any function to create any filter we want:

```js
filter(numbers, function(word) {
  return word[0] === 'c';
});
```

### Example with Our New Filter Function

```js
const movies = [
  { title: 'Black Panther', year: 2018, genre: 'action', rating: 7.4 },
  { title: 'Avengers Infinity War', year: 2018, genre: 'action', rating: 8.5 },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Fantasy/Science Fiction',
    rating: 8.7
  },
  {
    title: 'Incredibles 2',
    year: 2018,
    genre: 'Science Fiction/Action',
    rating: 7.8
  },
  { title: 'Deadpool 2', year: 2018, genre: 'action', rating: 7.8 },
  { title: 'Ant-Man and the Wasp', year: 2018, genre: 'action', rating: 7.2 },
  {
    title: 'Venom',
    year: 2018,
    genre: 'Thriller/Science Fiction',
    rating: 6.8
  },
  {
    title: 'Ralph Breaks the Internet',
    year: 2018,
    genre: 'Comedy',
    rating: 7.3
  }
];
```

// Use the filter function

```js
function filter(list, callback) {
  var filteredList = [];
  for (var i = 0; i < list.length; i++) {
    if (callback(list[i])) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

const highestRatings = filter(movies, function(movie) {
  return movie.rating >= 8;
});
console.log(highestRatings);
```

Or with arrow function:

```js
const highestRatings = filter(movies, movie => movie.rating >= 8);
```

