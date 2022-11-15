import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState(null);

  useEffect(()=>{
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
    }

    function load() {
      let apiKey = "8bf00adf84db8e022a8baot3c26e8717";
      let units = "metric";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(handleResponse);

    }

  if (loaded) {
    console.log(forecast)
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );

  } else {
    load();

    return null;
}
}