import React from "react";

//assets
import earthImg from "../../assets/earth.png";

//styled components
import { Container, CityButtons } from "./styles";

import { useNavigate } from "react-router-dom";

import api from '../../services/api'

export default function Home() {
  const navigate = useNavigate();

  // function getDates() {
  //   api
  //     .get(`weather?q=caruaru&appid=4f723f13e3103b9248ee95c6c653c48c`)
  //     .then((e) => console.log('then',e.data))
  //     .catch((e) => console.log('error',e.data));
  // }

  // React.useEffect(() => {
  //   getDates();
  // });

  return (
    <Container className="container">
      <div>
        <h1>WEATHER</h1>
        <h4>select a city</h4>
        <img src={earthImg} />

        <CityButtons>
          <div>
            <button
              style={{ display: "flex", justifyContent: "flex-start" }}
              onClick={() => navigate("/weather/dallol", {name: 'dallol'})}
            >
              Dallol
            </button>
            <button className="center-buttons">Fairbanks</button>
            <button style={{ display: "flex", justifyContent: "flex-end" }}>
              London
            </button>
          </div>

          <div>
            <button style={{ display: "flex", justifyContent: "flex-start" }}>
              Paris
            </button>
            <button className="center-buttons">Garanhus</button>
            <button style={{ display: "flex", justifyContent: "flex-end" }}>
              Lima
            </button>
          </div>
        </CityButtons>
      </div>
    </Container>
  );
}
