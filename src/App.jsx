import { useState, useRef } from "react";
import ImageUpload from "./components/ImageUpload";
import exportAsImage from "./utils/exportAsImage";

import "./App.css";

function App() {
  const [movies, setMovies] = useState(5);
  const exportRef = useRef();

  const moviesHandler = () => {
    if (movies === 20) return;
    setMovies((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <h1>Movies Showcase</h1>
      <button className="button add" role="button" onClick={moviesHandler}>
        <img src="https://img.icons8.com/ios-filled/35/null/plus-math.png" />
      </button>
      <button
        className="button download"
        role="button"
        onClick={() => exportAsImage(exportRef.current, "MoviesShowcase")}
      >
        <img src="https://img.icons8.com/material-rounded/35/000000/downloading-updates.png" />
      </button>
      <div className="movies-container" ref={exportRef}>
        {Array(movies)
          .fill(0)
          .map((e) => (
            <ImageUpload />
          ))}
      </div>
    </div>
  );
}

export default App;
