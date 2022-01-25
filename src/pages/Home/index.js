import React from "react";

//assets
import earthImg from "../../assets/earth-white.png";

//styled components
import { Container, CityButtons } from "./styles";


//libs
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="container" >
      <div>
        <h1>WEATHER</h1>
        <h4>select a city</h4>
        <img src={earthImg} />

        <CityButtons>
          <div>
            <button
              style={{ display: "flex", justifyContent: "flex-start" }}
              onClick={() => navigate("/weather/dallol")}
            >
              Dallol
            </button>
            <button
              className="center-buttons"
              onClick={() => navigate("/weather/fairbanks")}
            >
              Fairbanks
            </button>
            <button
              style={{ display: "flex", justifyContent: "flex-end" }}
              onClick={() => navigate("/weather/london")}
            >
              London
            </button>
          </div>

          <div>
            <button
              style={{ display: "flex", justifyContent: "flex-start" }}
              onClick={() => navigate("/weather/caruaru")}
            >
              Caruaru
            </button>
            <button
              className="center-buttons"
              onClick={() => navigate("/weather/vancouver")}
            >
              Vancouver
            </button>
            <button
              style={{ display: "flex", justifyContent: "flex-end" }}
              onClick={() => navigate("/weather/yakutsk")}
            >
              Yakutsk
            </button>
          </div>
        </CityButtons>
      </div>
    </Container>
  );
}
