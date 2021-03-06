import styled from "styled-components";
import background from "../../asset/Section4BG.png";
// import backgroundmobile from "../../asset/Section4BG-mobile.svg";
import backgroundmobile from "../../asset/Section4BG-mobile.png";

export const Section4Container = styled.div`
  .section-4 {
    background-image: url(${background});
    min-height: 130vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding-top: 28vh;
    font-family: Montserrat;
    color: #0d2040;
  }
  .title {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
    font-size: 3em;
    font-weight: 600;
  }
  .desc {
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 20px;
    line-height: 1.8;
    text-align: justify;
  }
  @media only screen and (max-width: 500px) {
    .section-4 {
      background-position-x: center;
      padding-top: 140px;
      width: 100vw;
      background-image: url(${backgroundmobile});
      min-height: 100vh;
    }
    .title {
      font-size: 2em;
      word-wrap: normal;
      width: 80vw;
    }
    .desc {
      max-width: 80vw !important;
      font-size: 0.8em;
      line-height: 20.48px !important;
    }
  }
  @media only screen and (max-width: 400px) {
    .section-4 {
      padding-top: 160px;
    }
  }
  @media only screen and (max-width: 325px) {
    .section-4 {
      padding-top: 100px;
    }
  }
`;
