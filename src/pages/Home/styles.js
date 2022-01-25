import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;
  background: #0f0f0f;

  

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation-duration: 3s;
  animation-name: slideup;

    @keyframes slideup {
      from {
        padding-top: 400px;
      }

      to {
      }
    }

    h1 {
      color: #fff;
      font-size: 38px;
      font-weight: 300;
    }

    h4 {
      color: #fff;

      font-weight: 200;
      font-size: 28px;
    }

    img {
      width: 150px;
      margin-top: 20px;
    }
  }
`;

export const CityButtons = styled.div`
  display: flex;
  flex-direction: column;

  /* background-color: red; */
  margin-top: 30px;
  min-height: 150px;
  width: 350px;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
  }

  button {
    border: none;
    background: transparent;
    flex: 1;
    font-size: 22px;
    color: #fff;
    font-weight: 300;
    padding: 5px;
  }
`;
