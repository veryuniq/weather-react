import "./Weather.css";

export default function App() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">The Weather App</h1>
      </div>
      <div className="container" id="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="search-form" id="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    autocomplete="off"
                    id="city-input"
                    className="form-control"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    id="button"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="container align-today">
              <div className="row">
                <div className="col-6 info">
                  <div className="clearfix weather-temperature">
                    <strong className="temperature" id="temperature">
                      {weatherData.temperature}
                    </strong>
                    <span className="units">
                      <a href="/" id="celsius-link" class="active">
                        °C
                      </a>{" "}
                      |
                      <a href="/" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-6 info">
                  <h1>{weatherData.city}</h1>
                  <ul>
                    <li id="description">{weatherData.description}</li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-6 icon">
                  <br />
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="float-left"
                  />
                </div>
                <div className="col-6">
                  <ul>
                    <li className="today">
                      Last updated:{weatherData.date}
                      <span id="calendar-date"></span>
                    </li>
                    <li className="time"></li>
                  </ul>
                </div>
              </div>
              <div className="column" id="humidity-wind">
                <span className="humidity">
                  Humidity: <span id="humidity"></span>
                  <span id="humidity-unit">%</span>
                </span>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="wind">
                  Wind: <span id="wind"></span>
                  <span id="wind-unit">km/h</span>
                </span>
              </div>
            </div>
            <div className="weather-forecast" id="forecast">
              <div className="row">
                <div className="col">
                  <div className="weather-forecast-date"></div>
                  <img src="" alt="" width="42" />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max"></span>
                    <span className="weather-forecast-temperature-min"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
