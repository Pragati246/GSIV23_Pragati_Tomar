import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const List = () => {
    const[movies, setMovie] = useState([]);
    const[search, setSearch] = useState([]);
    const handleSearch = (e) => {
        setSearch(
            movies.filter(
                movie => movie.original_title.toLowerCase().includes(e.target.value.toLowerCase())
            )
        )
    }

    // var apikey='51814608e31cd91cd4dc3c20394bb81c';
    // var apiToken='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTgxNDYwOGUzMWNkOTFjZDRkYzNjMjAzOTRiYjgxYyIsInN1YiI6IjY0ZGU2YzMxYTNiNWU2MDBjNWJjYWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caZfb90yGvD4sbSGf5HvGytVjs543y68AUioc0PV-iM';

    console.log('search',search)
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/11?api_key=51814608e31cd91cd4dc3c20394bb81c')
        .then(response => response.json())
        .then(data => {
            let movieList = [];
            for(let movieName in data) {
                movieList.push({...data[movieName], movieId: movieName})
            }
            setMovie(movieList)
        })
    }, [])
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={handleSearch}></input>
      </div>
      <div className="movie-list-container">
        {
            movies.length > 0 && search.length ==0 &&
            movies.map(movie => 
                <MovieCard{...movie} key={movie.id}/>)
        }
      </div>

    </>
  );
}

//Movie Card
function MovieCard({original_title, vote_average, yearOfRelease ,length , director, cast, overview}){
    return(
        <Link to={'/details'}>
            <div className="movie-card">
                {/* <div className="movie-img">
                    <img src={movieImg}/>
                </div> */}
                <div className="movie-body">
                    <h2>{original_title}</h2>
                    <h3>{overview}</h3>
                    <h3>{vote_average}</h3>
                </div>
            </div>
        </Link>
    )
}

export default List
