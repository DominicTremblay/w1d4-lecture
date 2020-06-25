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

const update = function (list, callback) {
  const filteredNums = [];

  // loop over the array
  for (let item of list) {
    filteredNums.push(callback(item));
  }

  return filteredNums;
};

const filter = function (numbers, callback) {
  const filteredNums = [];

  // loop over the array
  for (let num of numbers) {
    // checks if the nb is divisible by div
    if (callback(num)) {
      // add the nb in an output array
      filteredNums.push(num);
    }
  }
  // return the output array
  return filteredNums;
};

// Let's use our filter function!

// EXAMPLE 1: Get the movies with highest ratings

// EXAMPLE 2: Get the movies with the genre 'Comedy'

// EXAMPLE 3: get a list of all the titles

console.log(
  update(
    movies,
    (movieObj) => `Title: ${movieObj.title} | Year: ${movieObj.year}`
  )
);

console.log(
  movies.map((movieObj) => `Title: ${movieObj.title} | Year: ${movieObj.year}`)
);

// Play with Map

const ratings = movies.map((movieObj) => {
  if (movieObj.rating >= 8) {
    movieObj.best = true;
  } else {
    movieObj.best = false;
  }

  return movieObj;
});

// console.log(ratings);

console.log(
  update(
    filter(movies, (movieObj) => movieObj.rating >= 8),
    (movieObj) => movieObj.title
  )
);

console.log(
  movies
    .filter((movieObj) => movieObj.rating >= 8)
    .map((movieObj) => movieObj.title)
);
