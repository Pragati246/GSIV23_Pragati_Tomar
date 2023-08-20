import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Details = () => {
  const { movieId } = useParams("1008042");
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTgxNDYwOGUzMWNkOTFjZDRkYzNjMjAzOTRiYjgxYyIsInN1YiI6IjY0ZGU2YzMxYTNiNWU2MDBjNWJjYWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caZfb90yGvD4sbSGf5HvGytVjs543y68AUioc0PV-iM",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <nav className="navbar-details">
      <Link to="/">
        <KeyboardBackspaceIcon/>
      </Link>
        <h3>Movies</h3>
        <div className="homeicon-detail">
        <Link to="/">
          <HomeIcon />
        </Link>
        </div>
      </nav>
      {movie != {} && (
        <div className="movie-detail-container">
          <div className="movie-detail-poster">
            <img src={posterBaseUrl + movie.poster_path} alt="Movie Poster" />
          </div>
          <div className="movie-detail-body">
            <div className="movie-detail-body-row">
              <p>
                <b>{movie.original_title} </b> ({movie.vote_average})
              </p>
            </div>
            <div className="movie-year-length-director-row">
              <p>
                {movie.release_date} | {movie.runtime} min
              </p>
            </div>
            <div className="description-row">
              <p>
                <b>Description : </b>
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
