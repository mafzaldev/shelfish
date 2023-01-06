import { useRef } from "react";
import ImageUpload from "./components/ImageUpload";
import exportAsImage from "./exportAsImage";

import "./App.css";

function App() {
  const exportRef = useRef();

  return (
    <>
      <button
        onClick={() => exportAsImage(exportRef.current, "MoviesShowcase")}
      >
        Capture Image
      </button>
      <div className="app-container" ref={exportRef}>
        {Array(10)
          .fill(0)
          .map((e) => (
            <ImageUpload />
          ))}
      </div>
    </>
  );
}

export default App;
