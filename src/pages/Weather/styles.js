import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(to bottom, #eee 60%, #c4c4c4);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;

 

  .arrow-left {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 25px;
    margin-left: 25px;
    background: transparent;
    border: none;
  }

  .weather-icon {
    margin-top: 5px;
  }

  .weather-infos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 70px;

 

    h1 {
      color: #333;
      font-size: 40px;
      font-weight: 300;
    }

    h2 {
      font-size: 100px;
      font-weight: 400;
    }

    h4 {
      color: #333;

      font-weight: 200;
      font-size: 28px;
    }

    img {
      width: 150px;
      margin-top: 20px;
    }
  }
`;

export const TempeatureInfos = styled.div`
  display: flex;
  /* background-color: blue; */
  align-items: flex-start;
  margin-top: 35px;
  
  h2 {
    color: #333;
  }

  .right-area-weather {
    display: flex;
    flex-direction: column;
    width: 55px;
    min-height: 100%;
    /* background-color: red; */
    justify-content: space-between;

    .max-min-area {
      display: flex;
      flex-direction: column;
      margin-top: 17px;
      .arrow-area {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
      }
    }

    h5 {
      font-size: 25px;
      font-weight: 400;
      padding-left: 25px;
      color: #333;
    }
  }
`;

export const WeatherTimes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: red; */
  width: 100%;
  margin: 10px;
  margin-top: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
  }
`;

export const FooterInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  width: 330px;
  margin: 10px;
  margin-top: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .footer-title {
      color: #555;
      margin-bottom: 5px;
    }
  }

  .separator {
    color: #999;
  }
`;
