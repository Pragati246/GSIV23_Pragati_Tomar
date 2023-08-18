import React, {useState, useEffect} from 'react'
import {useParams, Navigate} from 'react-router-dom'

const Details = () => {
    const {movieId} = useParams()
    const [movie , setMovie] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/11?api_key=51814608e31cd91cd4dc3c20394bb81c')
        .then(response => response.json())
        .then(data => {
            setMovie(data)
        })

    }, [])
  return (
    <> 
    {
        movie!={} && 
        <div className="movie-detail-container">
            <div className="movie-detail-poster">

            </div>
            <div className="movie-detail-body">
                <div className="movie-detail-body-row">
                    <p><b>Movie title</b></p>
                    <p>(Rating)</p>
                </div>
                <div className="movie-year-length-director-row">
                    <p>{release_date}</p>
                    <p>{runtime}</p>
                    <p>Directore</p>
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
