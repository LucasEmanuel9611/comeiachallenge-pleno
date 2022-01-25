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
import { useNavigate } from "react-router-dom";
import moment from "moment";

//icons
import {
  WiSnowWind,
  WiThunderstorm,
  WiSleet,
  WiStormShowers,
  WiSnow,
  WiFog,
  WiDaySunny,
  WiNightClear,
  WiDayFog,
  WiNightFog,
  WiNightThunderstorm,
  WiNightStormShowers,
  WiNightSnow
} from "react-icons/wi";

import { FaArrowLeft } from "react-icons/fa";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";

//my imports
import api from "../../services/api";

export default function Weather() {
  const [dates, setDates] = React.useState({});
  const [weather, setWeather] = React.useState();
  const [temp, setTemp] = React.useState();
  const [forecast, setForecast] = React.useState([]);

  let { city } = useParams();
  const navigate = useNavigate();

  function getWheather() {
    api
      .get(
        `weather?q=${city}&appid=7acd82c636b3dfe48b420904d4b5eed7&exclude=minutely&units=metric`
      )
      .then((e) => {
        // console.log(e.data);
        setDates(e.data);
        setWeather(e.data?.weather[0]?.main);
        setTemp(e.data?.main?.temp);

        console.log(e.data);
        api
          .get(
            `onecall?lat=${e.data.coord.lat}&lon=${e.data.coord.lon}&exclude=current&appid=7acd82c636b3dfe48b420904d4b5eed7&units=metric`
          )
          .then(async (e) => {
            // // console.log(forecast)
            setForecast(e.data.hourly);
          });
      })

      .catch((e) => console.log(e.data));
  }

  React.useEffect(async () => {
    await getWheather();

    var reorderArray = forecast.map((item) => {
      if (
        moment(new Date(item.dt * 1000))
          .format("LT")
          .indexOf("PM")
      ) {
        return reorderArray.push(item);
      } else {
        return reorderArray[item.length - 1];
      }
    });
  }, []);

  var max = 0;
  var position = 0;
  return (
    <div>
      {dates.weather != undefined ? (
        <Container
          className="container"
          style={
            temp > 20
              ? { background: "#57CBDB" }
              : temp > 10
              ? {
                  backgroundImage:
                    "linear-gradient(to bottom, #616978 60%, #3C4353)",
                }
              : {}
          }
        >
          <button className="arrow-left" onClick={() => navigate(-1)}>
            <FaArrowLeft size={30} color={temp > 20 ? "#fff" : "#333"} />
          </button>
          <div className="weather-infos">
            <h1 style={temp > 20 ? { color: "#fff" } : {}}>
              {city.toUpperCase()}
            </h1>
            <h4 style={temp > 20 ? { color: "#fff" } : {}}>{weather}</h4>

            <TempeatureInfos>
              <h2 style={temp > 20 ? { color: "#fff" } : {}}>
                {parseInt(dates?.main?.temp)}
              </h2>
              <div className="right-area-weather">
                <h5 style={temp > 20 ? { color: "#fff" } : {}}>°C</h5>
                <div className="max-min-area">
                  <div className="arrow-area">
                    <RiArrowUpFill
                      size={20}
                      color={temp > 20 ? "#fff" : "#555"}
                    />
                    <span style={temp > 20 ? { color: "#fff" } : {}}>
                      {parseInt(dates?.main?.temp_max)}°
                    </span>
                  </div>
                  <div className="arrow-area">
                    <RiArrowDownFill
                      size={20}
                      color={temp > 20 ? "#fff" : "#555"}
                    />
                    <span style={temp > 20 ? { color: "#fff" } : {}}>
                      {parseInt(dates?.main?.temp_min)}°
                    </span>
                  </div>
                </div>
              </div>
            </TempeatureInfos>

            {weather === "Thunderstorm" ? (
              <WiThunderstorm
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : weather === "Drizzle" ? (
              <WiSleet
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : weather === "Rain" ? (
              <WiStormShowers
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : weather === "Snow" ? (
              <WiSnow
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : weather === "Atmosphere" ? (
              <WiFog
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : weather === "Clear" ? (
              <WiDaySunny
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : weather === "Clouds" ? (
              <WiDayFog
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : weather === "Fog" ? (
              <WiFog
                size={150}
                className="weather-icon"
                color={temp > 20 ? "#fff" : "#333"}
              />
            ) : (
              <></>
            )}

            <WeatherTimes>
              {forecast.map((item) => {
                if (
                  (moment(new Date(item.dt * 1000)).format("LT") ===
                    "3:00 AM") |
                  (moment(new Date(item.dt * 1000)).format("LT") ===
                    "9:00 AM") |
                  (moment(new Date(item.dt * 1000)).format("LT") ===
                    "3:00 PM") |
                  (moment(new Date(item.dt * 1000)).format("LT") === "9:00 PM")
                ) {
                  max += 1;
                  position += 1;
                  return (
                    <>
                      
                        {max < 5 ? (
                          <div>
                            <span style={temp > 20 ? { color: "#fff" } : {}}>
                              {item.weather[0].main}
                            </span>
                            {weather === "Thunderstorm" ? (
                              <>
                                {position != 4 ? (
                                  <WiThunderstorm
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightThunderstorm
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : weather === "Drizzle" ? (
                              <>
                                {position != 4 ? (
                                  <WiSleet
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : weather === "Rain" ? (
                              <>
                                {position != 4 ? (
                                  <WiStormShowers
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightStormShowers
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : weather === "Snow" ? (
                              <>
                                {position != 4 ? (
                                  <WiSnow
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightSnow
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : weather === "Atmosphere" ? (
                              <>
                                {position != 4 ? (
                                  <WiFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : weather === "Clear" ? (
                              <>
                                {position != 4 ? (
                                  <WiDaySunny
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightClear
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : weather === "Clouds" ? (
                              <>
                                {position != 4 ? (
                                  <WiDayFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : weather === "Fog" ? (
                              <>
                                {position != 4 ? (
                                  <WiFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 20 ? "#fff" : "#333"}
                                  />
                                )}
                              </>
                            ) : (
                              <></>
                            )}

                            <span style={temp > 20 ? { color: "#fff" } : {}}>
                              {item.temp}°C
                            </span>
                          </div>
                        ) : (
                          <></>
                        )}
                    </>
                  );
                }
              })}
            </WeatherTimes>

            <FooterInfos>
              <div>
                <span
                  className="footer-title"
                  style={temp > 20 ? { color: "#f0f0f0" } : {}}
                >
                  wind speed
                </span>
                <spa style={temp > 20 ? { color: "#fff" } : {}}>
                  {dates?.wind?.speed} m/s
                </spa>
              </div>
              <span
                className="separator"
                style={temp > 20 ? { color: "#fff" } : {}}
              >
                |
              </span>

              <div>
                <span
                  className="footer-title"
                  style={temp > 20 ? { color: "#f0f0f0" } : {}}
                >
                  sunrise
                </span>
                <span style={temp > 20 ? { color: "#fff" } : {}}>
                  {moment(new Date(dates?.sys?.sunrise * 1000)).format("LT")}
                </span>
              </div>
              <span
                className="separator"
                style={temp > 20 ? { color: "#fff" } : {}}
              >
                |
              </span>

              <div>
                <span
                  className="footer-title"
                  style={temp > 20 ? { color: "#f0f0f0" } : {}}
                >
                  sunset
                </span>
                <span style={temp > 20 ? { color: "#fff" } : {}}>
                  {moment(new Date(dates?.sys?.sunset * 1000)).format("LT")}
                </span>
              </div>
              <span
                className="separator"
                style={temp > 20 ? { color: "#fff" } : {}}
              >
                |
              </span>

              <div>
                <span
                  className="footer-title"
                  style={temp > 20 ? { color: "#f0f0f0" } : {}}
                >
                  humidity
                </span>
                <span style={temp > 20 ? { color: "#fff" } : {}}>
                  {parseInt(dates?.main?.humidity)}
                </span>
              </div>
            </FooterInfos>
          </div>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
}
