import React from "react";

//styled components
import { Container, TempeatureInfos } from "./styles";

//libs
import { useParams } from "react-router-dom";

//icons
import { FaArrowLeft } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import api from "../../services/api";

export default function Weather() {
  let { city } = useParams();
  const util = require("util");

  function getDates() {
    api
      .get(`weather?q=london&appid=4f723f13e3103b9248ee95c6c653c48c`)
      .then((e) =>
        console.log(
          util.inspect(e.data, { showHidden: false, depth: null, colors: true })
        )
      )
      .catch((e) => console.log(e.response.data));
  }

  React.useEffect(() => {
    getDates();
  });

  return (
    <Container className="container">
      <FaArrowLeft size={30} className="arrow-left" />
      <div className="weather-infos">
        <h1>{city.toUpperCase()}</h1>
        <h4>snowy</h4>

        <TempeatureInfos>
          <h2>-2</h2>
          <div className="right-area-weather">
            <h5>°C</h5>
            <div className="max-min-area">
              <div className="arrow-area">
                <RiArrowUpFill size={20} color="#555" />
                <span>0°</span>
              </div>
              <div className="arrow-area">
                <RiArrowDownFill size={20} color="#555" />
                <span>0°</span>
              </div>
            </div>
          </div>
        </TempeatureInfos>

        <TiWeatherCloudy size={150} className="weather-icon" color="#333" />
      </div>
    </Container>
  );
}
