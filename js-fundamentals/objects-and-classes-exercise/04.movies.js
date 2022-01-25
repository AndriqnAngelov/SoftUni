function solved(array) {
  let result = "";
  let movies = [];

  for (const arr of array) {
    let line = arr.slice(0, 9);
    let name = "";
    if (line == "addMovie ") {
      movies.push({
        name: arr.slice(9),
      });
    } else if (arr.includes("directedBy")) {
      let [movieName, director] = arr.split(" directedBy ");
      for (const movie of movies) {
        if (movie.name == movieName) {
          movie.director = director;
        }
      }
    } else if (arr.includes("onDate")) {
      let [movieName, date] = arr.split(" onDate ");
      for (const movie of movies) {
        if (movie.name == movieName) {
          movie.date = date;
        }
      }
    }
  }
  for (const movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

