import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=a04968f4";

const movie1 = {
  "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  "Year": "2007",
  "imdbID": "tt1132238",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}


const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies(`Spiderman`);
  }, []);

  return (
    <div className="app">
      <hi>MovieLand</hi>
      
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>movie1.Year</p>
          </div>

          <div>
            <img src={movie1.Poster} alt={movie1.Title}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;