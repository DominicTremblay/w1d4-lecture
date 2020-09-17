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

## Differences between function declarations and function expressions

- Function declarations and function expressions provide the same functionality
- The main difference that we need to be aware of

  - The body of function declarations are hoisted contrary to function expressions
  - Hence function expressions cannot be called before their declaration

- [Examples](./first_class_objects.js)

## Higher-Order Functions

- A function that accepts another function as input parameters or return another function

## Callbacks

- A callback is a function value that is passed as a parameter to a higher-order function.
- The higher-order function will execute the callback when required
- Callbacks make our function more reusable and can be applied to a lot more cases

- [Examples](./callback.js)
- [Callback in memory](./function_memory.png)

## Single Responsability Principle

- The two functions (the callback vs the higher-order function) each have a single, more concise responsibility, instead of doing both things. 

- A function should have a sole reason to exist, and delegate other responsibilities to other functions as needed.