import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData";


function WeatherForecast (props) {
  return (
    <div className="weather">
      <h2>{props.forecast.day}</h2>
      <img src={props.forecast.day} alt={props.forecast.imgAlt} />
      <p>
        <span>conditions: </span>
        {props.forecast.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.forecast.time}
      </p>
    </div>
  );
};

export default WeatherForecast;