import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "8bf00adf84db8e022a8baot3c26e8717";
    let longitude = "37";
    let latitude = "-4";
    let apiUrl =
      `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thurs</div>
            <div>
              <span className="WeatherForecast-temperature-max">19</span>
              <span className="WeatherForecast-temperature-min">10</span>
            </div>
          </div>
        </div>
      </div>
    );
}