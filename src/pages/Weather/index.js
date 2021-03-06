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
import colors from '../../configs/colors'

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

  // max number for items in forecast 
  var max = 0;
  // night icon in forecast
  var position = 0;
  //Day period for forecast
  var forecastPosition = 0;
  
  return (
    <div>
      {dates.weather != undefined ? (
        <Container
          className="container"
          style={
            temp > 20
              ? { background: "#57CBDB" }
              : temp > 17
              ? {
                  backgroundImage:
                    "linear-gradient(to bottom, #616978 60%, #3C4353)",
                }
              : {}
          }
        >
          <button className="arrow-left" onClick={() => navigate(-1)}>
            <FaArrowLeft size={30} color={temp > 17 ? `${colors.white}` : `${colors.gray}`} />
          </button>
          <div className="weather-infos">
            <h1 style={temp > 17 ? { color: `${colors.white}` } : {}}>
              {city.toUpperCase()}
            </h1>
            <h4 style={temp > 17 ? { color: `${colors.white}` } : {}}>{weather}</h4>

            <TempeatureInfos>
              <h2 style={temp > 17 ? { color: `${colors.white}` } : {}}>
                {parseInt(dates?.main?.temp)}
              </h2>
              <div className="right-area-weather">
                <h5 style={temp > 17 ? { color: `${colors.white}` } : {}}>??C</h5>
                <div className="max-min-area">
                  <div className="arrow-area">
                    <RiArrowUpFill
                      size={20}
                      color={temp > 17 ? `${colors.white}` : `${colors.lightGray}`}
                    />
                    <span style={temp > 17 ? { color: `${colors.white}` } : {}}>
                      {parseInt(dates?.main?.temp_max)}??
                    </span>
                  </div>
                  <div className="arrow-area">
                    <RiArrowDownFill
                      size={20}
                      color={temp > 17 ? `${colors.white}` : `${colors.lightGray}`}
                    />
                    <span style={temp > 17 ? { color: `${colors.white}` } : {}}>
                      {parseInt(dates?.main?.temp_min)}??
                    </span>
                  </div>
                </div>
              </div>
            </TempeatureInfos>

            {weather === "Thunderstorm" ? (
              <WiThunderstorm
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
              />
            ) : weather === "Drizzle" ? (
              <WiSleet
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
              />
            ) : weather === "Rain" ? (
              <WiStormShowers
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
              />
            ) : weather === "Snow" ? (
              <WiSnow
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
              />
            ) : weather === "Atmosphere" ? (
              <WiFog
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
              />
            ) : weather === "Clear" ? (
              <WiDaySunny
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
              />
            ) : weather === "Clouds" ? (
              <WiDayFog
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
              />
            ) : weather === "Fog" ? (
              <WiFog
                size={150}
                className="weather-icon"
                color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
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
                  forecastPosition += 1
                  return (
                    <>
                      
                        {max < 5 ? (
                          <div>
                            <span style={temp > 17 ? { color: `${colors.white}` } : {}}>
                            {forecastPosition === 1 ? 'dawn' : forecastPosition === 2 ? 'morning' : forecastPosition === 3 ? 'afternoon' : forecastPosition === 4 ? 'night' : null}
                            </span>
                            {weather === "Thunderstorm" ? (
                              <>
                                {position != 4 ? (
                                  <WiThunderstorm
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightThunderstorm
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : weather === "Drizzle" ? (
                              <>
                                {position != 4 ? (
                                  <WiSleet
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : weather === "Rain" ? (
                              <>
                                {position != 4 ? (
                                  <WiStormShowers
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightStormShowers
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : weather === "Snow" ? (
                              <>
                                {position != 4 ? (
                                  <WiSnow
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightSnow
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : weather === "Atmosphere" ? (
                              <>
                                {position != 4 ? (
                                  <WiFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : weather === "Clear" ? (
                              <>
                                {position != 4 ? (
                                  <WiDaySunny
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightClear
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : weather === "Clouds" ? (
                              <>
                                {position != 4 ? (
                                  <WiDayFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : weather === "Fog" ? (
                              <>
                                {position != 4 ? (
                                  <WiFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                ) : (
                                  <WiNightFog
                                    size={55}
                                    className="weather-icon"
                                    color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
                                  />
                                )}
                              </>
                            ) : (
                              <></>
                            )}

                            <span style={temp > 17 ? { color: `${colors.white}` } : {}}>
                              {item.temp}??C
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
                  style={temp > 17 ? { color: "#f0f0f0" } : {}}
                >
                  wind speed
                </span>
                <spa style={temp > 17 ? { color: `${colors.white}` } : {}}>
                  {dates?.wind?.speed} m/s
                </spa>
              </div>
              <span
                className="separator"
                style={temp > 17 ? { color: `${colors.white}` } : {}}
              >
                |
              </span>

              <div>
                <span
                  className="footer-title"
                  style={temp > 17 ? { color: "#f0f0f0" } : {}}
                >
                  sunrise
                </span>
                <span style={temp > 17 ? { color: `${colors.white}` } : {}}>
                  {moment(new Date(dates?.sys?.sunrise * 1000)).format("LT")}
                </span>
              </div>
              <span
                className="separator"
                style={temp > 17 ? { color: `${colors.white}` } : {}}
              >
                |
              </span>

              <div>
                <span
                  className="footer-title"
                  style={temp > 17 ? { color: "#f0f0f0" } : {}}
                >
                  sunset
                </span>
                <span style={temp > 17 ? { color: `${colors.white}` } : {}}>
                  {moment(new Date(dates?.sys?.sunset * 1000)).format("LT")}
                </span>
              </div>
              <span
                className="separator"
                style={temp > 17 ? { color: `${colors.white}` } : {}}
              >
                |
              </span>

              <div>
                <span
                  className="footer-title"
                  style={temp > 17 ? { color: "#f0f0f0" } : {}}
                >
                  humidity
                </span>
                <span style={temp > 17 ? { color: `${colors.white}` } : {}}>
                  {parseInt(dates?.main?.humidity)}%
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
