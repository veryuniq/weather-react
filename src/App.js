import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Córdoba" />
        <footer>
          This was coded by{" "}
          <a
            href="https://rococo-cupcake-63a9d5.netlify.app"
            aria-label=" Véronique"
            target="_blank"
            rel="noopener noreferrer"
            alt=" Véronique Website"
          >
            Véronique
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/veryuniq/weather-react"
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer"
            alt="Github"
          >
            open-sourced on Github
          </a>{" "}
          .
        </footer>
      </div>
    </div>
  );
}