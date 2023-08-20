
# Movie Search App

This is a React application that allows users to search and browse upcoming movies. It utilizes the TMDB API to fetch movie data and display it in a list format. Users can also click on individual movies to view more detailed information.

## Features

- Search for upcoming movies
- Infinite scrolling to load more movies
- View detailed information about a specific movie

## Getting Started

1. Clone the repository to your local machine:
git clone https://github.com/Pragati246/GSIV23_Pragati_Tomar.git


2. Navigate to the project directory:
cd movie-search-app


3. Install the required dependencies:
npm install


4. Start the development server:
npm start


5. Open your web browser and visit `http://localhost:3000` to see the app in action.

## Usage

- On the homepage, you can search for upcoming movies using the search bar.
- Scroll through the list of movies to load more as you reach the end.
- Click on a movie card to view detailed information about that movie.

## Technologies Used

- React
- Material-UI
- react-router-dom

## Code Overview

The application is divided into different components:

- `List` component: Displays the list of movies, handles search, pagination, and infinite scrolling.
- `MovieCard` component: Renders individual movie cards in the list.
- `Details` component: Displays detailed information about a specific movie.
- `App` component: Handles routing using `react-router-dom`.

## API Integration

The app uses the TMDB API to fetch movie data. API requests are made using the `fetch` function with appropriate headers and query parameters.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to fork the repository and submit a pull request.

