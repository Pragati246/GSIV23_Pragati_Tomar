import React, {useState, useEffect} from 'react'
import {useParams, Navigate} from 'react-router-dom'


const url = 'https://api.themoviedb.org/3/account/51814608e31cd91cd4dc3c20394bb81c/rated/movies?language=en-US&page=1&sort_by=created_at.asc';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTgxNDYwOGUzMWNkOTFjZDRkYzNjMjAzOTRiYjgxYyIsInN1YiI6IjY0ZGU2YzMxYTNiNWU2MDBjNWJjYWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caZfb90yGvD4sbSGf5HvGytVjs543y68AUioc0PV-iM';








const Details = () => {
    const {movieId} = useParams()
    const [movie , setMovie] = useState([]);

    fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Use the data returned from the API
      })
      .catch(error => {
        console.error('Error:', error);
      });



    // useEffect(() => {
    //     fetch('https://api.themoviedb.org/3/movie/11?api_key=51814608e31cd91cd4dc3c20394bb81c')
    //     .then(response => response.json())
    //     .then(data => {
    //         setMovie(data)
    //     })

    // }, [])
  return (
    <> 
    <div>detail</div>
    {
        movie!={} && 
        <div className="movie-detail-container">
            <div className="movie-detail-poster">

            </div>
            <div className="movie-detail-body">
                <div className="movie-detail-body-row">
                    <p><b>Movie title</b></p>
                    {/* <p>(Rating)</p> */}
                </div>
                <div className="movie-year-length-director-row">
                    {/* <p>{release_date}</p>
                    <p>{runtime}</p>
                    <p>Directore</p> */}
                </div>
                <div className="cast-row">

                </div>
                <div className="description-row">
                    <p>{overview}</p>
                </div>
    

            </div>
        </div>
    }
                                                    
    </>
  )
}

export default Details
