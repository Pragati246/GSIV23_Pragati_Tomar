import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [movies, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [currentMovie] = useState("Ram");

  const handleSearch = (e) => {
    setSearchMovie(e.target.value);
  };

  console.log("search", searchMovie);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTgxNDYwOGUzMWNkOTFjZDRkYzNjMjAzOTRiYjgxYyIsInN1YiI6IjY0ZGU2YzMxYTNiNWU2MDBjNWJjYWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caZfb90yGvD4sbSGf5HvGytVjs543y68AUioc0PV-iM",
      },
    };

    const fetchMovies = (query) => {
      fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          query +
          "&include_adult=false&language=en-US&page=1",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          let movieList = [];
          data.results.forEach((dataItem) => {
            movieList.push(dataItem);
          });
          if (movieList != 0) {
            setMovie(movieList);
          } else {
            console.log("No movie found");
          }
        });
    };

    if (searchMovie) {
      fetchMovies(searchMovie); 
    } else {
      fetchMovies(currentMovie); 
    }
  }, [searchMovie]); // Trigger the effect when searchMovie changes

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchMovie}
          onChange={handleSearch}
        />
      </div>
      <div className="movie-list-container">
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

const posterBaseUrl = "https://image.tmdb.org/t/p/original";

function MovieCard({ original_title, vote_average, overview, poster_path }) {
  return (
    <Link to={"/details"}>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={posterBaseUrl + poster_path} alt="dummy" />
        </div>
        <div className="movie-body">
          <>
            {original_title.length > 6
              ? original_title.slice(0, 25) + "..."
              : original_title}
          </>
          <p>
            {overview.length > 10 ? overview.slice(0, 25) + "..." : overview}
          </p>
          <p>{vote_average}</p>
        </div>
      </div>
    </Link>
  );
}

export default List;
