import React, { useState, useEffect, useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';

const List = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const observer = useRef();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchMovie(query);
    setCurrentPage(1); // Reset page when searching
    setTotalPages(1); // Reset total pages
    setMovies([]); // Clear the list of fetched movies
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTgxNDYwOGUzMWNkOTFjZDRkYzNjMjAzOTRiYjgxYyIsInN1YiI6IjY0ZGU2YzMxYTNiNWU2MDBjNWJjYWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caZfb90yGvD4sbSGf5HvGytVjs543y68AUioc0PV-iM",
        
      },
    };

    const fetchMovies = (page) => {
      let url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
      if (searchMovie) {
        url += `&query=${searchMovie}`;
      }

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (page === 1) {
            setTotalPages(data.total_pages);
            setMovies(data.results);
          } else {
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
          }
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    };

    fetchMovies(currentPage);
  }, [currentPage, searchMovie]);

  const lastMovieRef = useRef();

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (lastMovieRef.current) {
      observer.current.observe(lastMovieRef.current);
    }

    return () => {
      if (lastMovieRef.current) {
        observer.current.unobserve(lastMovieRef.current);
      }
    };
  }, [currentPage, totalPages]);

  const filteredMovies = movies.filter(
    (movie) => movie.original_title.toLowerCase().includes(searchMovie.toLowerCase())
  );
  

  return (
    <>
      <div className="search-container">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          value={searchMovie}
          onChange={handleSearch}
        />
      </div>
      <div className="movie-list-container">
        {filteredMovies.map((movie, index) => {
          if (index === filteredMovies.length - 1) {
            return (
              <div
                ref={lastMovieRef}
                key={movie.id}
                style={{ marginBottom: "20px" }}
              >
                <MovieCard {...movie} />
              </div>
            );
          } else {
            return <MovieCard {...movie} key={movie.id} />;
          }
        })}
      </div>
    </>
  );
};

const posterBaseUrl = "https://image.tmdb.org/t/p/original";

function MovieCard({ original_title, vote_average, overview, poster_path }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterBaseUrl + poster_path} alt="dummy" />
      </div>
      <div className="movie-body">
        <h2>
          {original_title.length > 6
            ? original_title.slice(0, 25) + "..."
            : original_title}
        </h2>
        <p>
          {overview.length > 10 ? overview.slice(0, 25) + "..." : overview}
        </p>
        <p>{vote_average}</p>
      </div>
    </div>
  );
}

export default List;
