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

- Suppose we want to get an array of all the numbers that are divisible by three, we can use the following function:

```js
const divByThree = function(list) {
  const filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 == 0) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
};

divByThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [3,6,9]
```

- Now this works, but what if we want the numbers that are divisible by five, we would have to code another function.

```js
const divByFive = function(list) {
  const filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 5 == 0) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
};
```

- And we would repeat the function if we need the numbers that are divisible by two.
- When we repeat code, it means we're not following the DRY principle

- What if we want to make it more reusable. Let's generalize the function by adding a parameter:

```js
const divBy = function(list, div) {
  const filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % div == 0) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
};
```

- This version is much more reusable because it works with any number
- How do we generalize the function even more by providing the desired functionality as a parameter?
- Let's make a general filter function that works with any kind of filter by using a callback function:

```js
const filter = function(list, callback) {

//   const callback =function(nb) {
//   return nb % 3 === 0
// }

// const callback = const smallNb = function(nb) {
//   return nb <= 5
// }



  const filteredList = [];

// loop over the array (forEach, For of, for i)

// check if it is divByThree
  for (let i=0; i< list.length; i++) {
    // console.log('i',i, 'div',div, 'nb',list[i])
    if(callback(list[i])) {
    // push the value in an array
      filteredList.push(list[i]);
    }

  }
// return the new array
// console.log('list', filteredList)
  return filteredList;
}

const divByThree = function(nb) {
  return nb % 3 === 0
}

// arrow function syntax
const divByFive = nb => return nb % 5 === 0

// function declaration
function smallNb(nb) {
  return nb <= 5
}

filter([1,2,3,4,5,6,7,8,9,10], smallNb)//  [1,2,3,4,5]

// using a function inline
filter([1,2,3,4,5,6,7,8,9,10], function(nb) {
  return nb > 5
})

// arrow function
filter([1,2,3,4,5,6,7,8,9,10], (nb) => return nb > 5)


const list = [1,2,3,4,5,6,7,8,9,10];

// built-in javascript filter fct
list.filter(function(nb) {
  return nb > 5
})


```

- To get the same result as the divisibleByThree function, we are providing the following **callback**:

```js
const isDivByThree = function(number) {
  return number % 3 === 0;
};
```

- And we call the filter function using the callback:

```js
filter(numbers, isDivByThree);
```

- Or we can simply create an anonymous function as an argument:

```js
filter(numbers, function(number) {
  return number % 3 === 0;
});
```

- In fact, we can pass any function to create any filter we want:

```js
filter(numbers, function(number) {
  number > 15;
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


## Origin of Callbacks

1. JavaScript is an event driven language

2. A callback function is required when a specific task of event has finished. We can see what is going on with a tool called [Loupe](http://latentflip.com/loupe/)

3. More generally, callbacks are used with asynchronous code

We used the event on the logo on the page to trigger an alert, which is inside a callback function:

```js
logo.addEventListener('click', function(e) {
  alert('click');
});
```

Also we did an example of an http request - [./request/index.js](code here)

## Summary

- In JavaScript, functions are first-class objects (or first-class citizens) ie they can be treated like any other values

  1. Functions can be assigned to a variable (function expression) or to a property of an object
  2. Passed as arguments into functions
  3. Returned as values from functions

- A function that accepts (or return) a function as arguments is called a higher-order function

- In JavaScript, a callback is a function passed as an argument to another function

- The benefit of having higher-order function is that each functions (the higher-order fct and the callback) has a single responsability

- IOW, the benefit of a higher-order functions (a function that takes a callback) is a highly reusable function allowing our code to stay DRY!

- Callbacks are also used when running asynchronous code.
