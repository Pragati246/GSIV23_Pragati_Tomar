// import React, {useState, useEffect} from 'react'
// import {useParams, Navigate} from 'react-router-dom'


// // const url = 'https://api.themoviedb.org/3/account/51814608e31cd91cd4dc3c20394bb81c/rated/movies?language=en-US&page=1&sort_by=created_at.asc';
// // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTgxNDYwOGUzMWNkOTFjZDRkYzNjMjAzOTRiYjgxYyIsInN1YiI6IjY0ZGU2YzMxYTNiNWU2MDBjNWJjYWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caZfb90yGvD4sbSGf5HvGytVjs543y68AUioc0PV-iM';








// const Details = () => {
//     const {movieId} = useParams()
//     const [movie , setMovie] = useState([]);
  
    
// useEffect(() => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: 
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTgxNDYwOGUzMWNkOTFjZDRkYzNjMjAzOTRiYjgxYyIsInN1YiI6IjY0ZGU2YzMxYTNiNWU2MDBjNWJjYWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caZfb90yGvD4sbSGf5HvGytVjs543y68AUioc0PV-iM",
//     },
//   };

//   const fetchMovies = (page) => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&page=`+page,
//       options
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setMovie(data)
//       })
//   };

// }, []);
// const posterBaseUrl = "https://image.tmdb.org/t/p/original";

//   return (
//     <> 
//     <div>detail</div>
//     {
//         movie!={} && 
//         <div className="movie-detail-container">
//             <div className="movie-detail-poster">
//             <img src={posterBaseUrl + movie.poster_path}/>
//             <div className="movie-detail-body">
//                 <div className="movie-detail-body-row">
//                     <p><b>{movie.original_title}</b></p>
//                     <p>{movie.vote_average}</p>
//                 </div>
//                 <div className="movie-year-length-director-row">
//                     <p>{movie.release_date}</p>
//                     <p>{movie.runtime}</p>
//                     {/* <p>Directore</p> */}
//                 </div>
//                 <div className="cast-row">
//                 </div>
//                 <div className="description-row">
//                     <p>{movie.overview}</p>
//                 </div>
//             </div>
//             </div>
//         </div>
//     }
                                                    
//     </>
//   )
// }

// export default Details

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

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
      `https://api.themoviedb.org/3/movie/${movieId}/external_ids`,
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
      {movie!={} && (
        <div className="movie-detail-container">
          <div className="movie-detail-poster">
            <img src={posterBaseUrl + movie.poster_path} alt="Movie Poster" />
            <div className="movie-detail-body">
              <div className="movie-detail-body-row">
                <p>
                  <b>{movie.original_title}</b>
                </p>
                <p>{movie.vote_average}</p>
              </div>
              <div className="movie-year-length-director-row">
                <p>{movie.release_date}</p>
                <p>{movie.runtime} min</p>
              </div>
              <div className="description-row">
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;

