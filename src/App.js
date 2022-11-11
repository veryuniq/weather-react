import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <header className="App-header">
          <Weather defaultCity="Córdoba" />
        </header>
        <footer>
          This was coded by{" "}
          <a
            href="https://rococo-cupcake-63a9d5.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Véronique
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/veryuniq/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
