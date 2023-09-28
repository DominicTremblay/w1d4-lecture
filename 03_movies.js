// Exercises found at:
// https://gist.github.com/DominicTremblay/c201e637cfaec43fe5ec92cee4ba899d

const movies = [
  { title: 'Black Panther', year: 2018, genre: 'action', rating: 7.4 },
  { title: 'Avengers Infinity War', year: 2018, genre: 'action', rating: 8.5 },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Fantasy/Science Fiction',
    rating: 8.7,
  },
  {
    title: 'Incredibles 2',
    year: 2018,
    genre: 'Science Fiction/Action',
    rating: 7.8,
  },
  { title: 'Deadpool 2', year: 2018, genre: 'action', rating: 7.8 },
  { title: 'Ant-Man and the Wasp', year: 2018, genre: 'action', rating: 7.2 },
  {
    title: 'Venom',
    year: 2018,
    genre: 'Thriller/Science Fiction',
    rating: 6.8,
  },
  {
    title: 'Ralph Breaks the Internet',
    year: 2018,
    genre: 'Comedy',
    rating: 7.3,
  },
];

// Let's use our filter function!
// higher-order function
const filter = (list, callback) => {

console.log("callback:", callback)


  const outputArr = [];

  for (let item of list) {
    if (callback(item)) {
      outputArr.push(item);
    }
  }

  return outputArr;
};

// rating > 8
const highRatedMovie = (movie) => movie.rating >= 8;



// EXAMPLE 1: Get the movies with highest ratings
// rating > 8

const highRatings = filter(movies, (movie) => movie.rating >= 8)

// EXAMPLE 2: Get the movies with the genre 'Comedy'
// genre === Comedy

// const comedyMovies = filter(movies, (movie) => movie.genre === 'Comedy' )

const comedyMovies = movies.filter((movie) => movie.genre === 'Comedy')

console.log(comedyMovies)
