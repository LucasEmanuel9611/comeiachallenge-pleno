import React from "react";

//styled components
import {
  Container,
  TempeatureInfos,
  WeatherTimes,
  FooterInfos,
} from "./styles";

//libs
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import { WiSnowWind } from "react-icons/wi";

//icons
import { FaArrowLeft } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";

import moment from "moment";

export default function Weather() {
  const [dates, setDates] = React.useState({});
  const [sunrise, setSunrise] = React.useState();
  const [sunset, setSunset] = React.useState();
  let { city } = useParams();
  const navigate = useNavigate();

  function getDates() {
    api
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8669c16ce3c9d26e0c8f054801285154&units=metric`
      )
      .then((e) => {
        console.log(e.data);
        setDates(e.data);
      })
      .catch((e) => console.log(e.response.data));
  }

  React.useEffect(() => {
    getDates();

    console.log(sunset, sunrise);
  }, []);

  return (
    <Container className="container">
      <button className="arrow-left" onClick={() => navigate(-1)}>
        <FaArrowLeft size={30} />
      </button>
      <div className="weather-infos">
        <h1>{city.toUpperCase()}</h1>
        <h4>snowy</h4>

        <TempeatureInfos>
          <h2>{parseInt(dates?.main?.temp)}</h2>
          <div className="right-area-weather">
            <h5>°C</h5>
            <div className="max-min-area">
              <div className="arrow-area">
                <RiArrowUpFill size={20} color="#555" />
                <span>{parseInt(dates?.main?.temp_max)}°</span>
              </div>
              <div className="arrow-area">
                <RiArrowDownFill size={20} color="#555" />
                <span>{parseInt(dates?.main?.temp_min)}°</span>
              </div>
            </div>
          </div>
        </TempeatureInfos>

        <WiSnowWind size={150} className="weather-icon" color="#222" />

        <WeatherTimes>
          <div>
            <span>dawn</span>
            <WiSnowWind size={55} color="#333" />
            <span>8°C</span>
          </div>
          <div>
            <span>morning</span>
            <WiSnowWind size={55} color="#333" />
            <span>8°C</span>
          </div>
          <div>
            <span>afternoon</span>
            <WiSnowWind size={55} color="#333" />
            <span>8°C</span>
          </div>
          <div>
            <span>night</span>
            <WiSnowWind size={55} color="#333" />
            <span>8°C</span>
          </div>
        </WeatherTimes>

        <FooterInfos>
          <div>
            <span className="footer-title">wind speed</span>
            <span>{dates?.wind?.speed} m/s</span>
          </div>
          <span className="separator">|</span>

          <div>
            <span className="footer-title">sunrise</span>
            <span>{moment(new Date(dates?.sys?.sunrise)).format("LT")}</span>
          </div>
          <span className="separator">|</span>

          <div>
            <span className="footer-title">sunset</span>
            <span>{moment(new Date(dates?.sys?.sunset)).format("LT")}</span>
          </div>
          <span className="separator">|</span>

          <div>
            <span className="footer-title">humidity</span>
            <span>{parseInt(dates?.main?.humidity)}</span>
          </div>
        </FooterInfos>
      </div>
    </Container>
  );
}
