import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;
  background: #0f0f0f;
  background: #e0e0e0;

  .arrow-left {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 25px;
    margin-left: 25px;
  }

  .weather-icon {
    margin-top: 5px;
  }

  .weather-infos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: 40px;
      font-weight: 300;
      color: #000;
    }

    h2 {
      font-size: 100px;
      font-weight: 400;
    }

    h4 {
      color: #fff;

      font-weight: 200;
      font-size: 28px;
      color: #333;
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

  .right-area-weather{
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
      .arrow-area{
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
    }
  }
`;
