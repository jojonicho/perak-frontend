import styled from "styled-components";
import section2 from "../../asset/section-2-background-2.svg";

export const Section2Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .section-2 {
    position: relative;
    min-height: 100vh;
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0d2040;
    background-image: url(${section2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -220px;
  }

  .desc {
    color: #f0f0f0;
    margin-top: 40px;
    max-width: 60%;
    font-size: 1.3em;
    line-height: 1.6;
    text-align: justify;
  }

  @media only screen and (max-width: 800px) {
    .section-2 {
      background-position-y: top;
      background-position-x: center;
    }
    .desc {
      margin-top: 70px;
      position: absolute;
      top: 50px;
      max-width: 60%;
      font-size: 1em;
      line-height: 1.6;
    }
  }

  @media only screen and (max-width: 420px) {
    .section-2 {
      background-size: 170%;
      background-position-y: bottom;
      background-position-x: center;
    }
    .desc {
      margin-top: 150px;
      max-width: 70%;
      font-size: 0.8em;
      line-height: 1.6;
    }
  }

  @media only screen and (max-width: 360px) {
    .desc {
      margin-top: 30px;
    }
  }
`;
