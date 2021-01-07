// Exercises found at:
// https://gist.github.com/DominicTremblay/c201e637cfaec43fe5ec92cee4ba899d

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

// Let's use our filter function!
// higher-order function
const filter = function (list, callback) {
  const output = [];

  for (let item of list) {
    if (callback(item)) {
      output.push(item);
    }
  }

  return output;
};


// EXAMPLE 1: Get the movies with highest ratings

const bestMovie = (movieObj) => movieObj['rating'] > 8;



// const result = filter(movies, bestMovie);
// console.log(result);

// EXAMPLE 2: Get the movies with the genre 'Comedy'

// const getComedy = function(movieObj) {
//   return movieObj.genre === 'Comedy';
// }

// Arrow function version
const getComedy = (movieObj) => movieObj.genre === 'Comedy';


// const result = filter(movies, getComedy);

const result = filter(movies, movieObj => movieObj['rating'] > 8);

// built-in filer
// const result = movies.filter((movieObj) => movieObj.genre === 'Comedy');
console.log(result);
