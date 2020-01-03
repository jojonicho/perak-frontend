import styled from "styled-components";

import background from "../../asset/firstSectionBackground.png";
import backgroundLeft from "../../asset/firstSectionBackgroundLeft.png";
import secondBG from "../../asset/secondSectionBG.png";
import thirdBG from "../../asset/thirdSectionBG.png";
import fourthBG from "../../asset/fourthSectionBG.svg";
import daftarButton from "../../asset/daftarButton.png";

const yellow = "#F1CF33";
const green = "#33B3A6";
const white = "#E5E6DE";
const blue = "#4452C3";
const dark = "#0D2040";

export const LandingPageContainer = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  button:focus {
    outline: 0;
  }
`;

export const FirstSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${green};
  background-size: 120px, contain;
  background-image: url(${backgroundLeft}), url(${background});
  background-repeat: no-repeat;
  background-position-x: left, right;
  background-position-y: bottom, 30px;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dekorBlue,
  .dekorYellow {
    position: absolute;
    width: 80px;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes spinLeft {
    100% {
      -moz-transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes spinLeft {
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }
  @keyframes spinLeft {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  .dekorYellow {
    top: 40px;
    left: -20px;
    -webkit-animation: spin 10s linear infinite;
    -moz-animation: spin 10s linear infinite;
    animation: spin 10s linear infinite;
  }
  .dekorBlue {
    top: 50vh;
    left: 10vw;
    -webkit-animation: spinLeft 10s linear infinite;
    -moz-animation: spinLeft 10s linear infinite;
    animation: spinLeft 10s linear infinite;
  }

  .title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-align: center;
    color: ${yellow};
    text-shadow: 5px 8px ${dark};
    font-size: calc(4rem + 1vw);
    margin: 50px;
  }
  .avatar {
    width: 450px;
  }
  .tema {
    margin-top: 50px;
    color: ${white};
    font-weight: bold;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
  }
  .avatar-button {
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background-color: transparent;
  }
  .circle {
    margin: 0 25px 0 25px;
    width: 10px;
    height: 10px;
    background-color: ${white};
    border-radius: 50%;
  }
  .yellowed {
    color: ${yellow};
  }
  .yellowedCircle {
    background-color: ${yellow};
  }
`;

export const SecondSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${yellow};
  background-repeat: no-repeat;
  background-image: url(${secondBG});
  background-position-x: right;
  background-position-y: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  .ball {
    position: absolute;
    top: calc(100vh + 350px);
    left: 230px;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
  }
  .apa-itu {
    color: ${blue};
    font-size: bold;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 5em;
    margin-left: 100px;
  }
  .full-desc {
    font-weight: bold;
    line-height: 1.5em;
    width: 520px;
    font-size: 1.1em;
    margin-top: 30px;
    margin-left: 130px;
  }
  .praya-ferdi {
    height: 1000px;
    position: absolute;
    top: 100vh;
    left: 0px;
  }
  .om {
    height: 550px;
    position: absolute;
    top: calc(300px + 100vh);
    right: 0px;
  }
`;
export const ThirdSection = styled.section`
  height: 80vh;
  width: 100%;
  background-color: ${dark};
  background-image: url(${thirdBG});
  background-repeat: no-repeat;
  background-position: center right;
  padding-top: 40px;
  h1 {
    text-align: center;
    color: white;
    font-size: 3.5em;
  }
`;
export const FourthSection = styled.section`
  height: 150vh;
  width: 100%;
  background-color: #e5e6de;
  background-image: url(${fourthBG});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .image-carousel {
    margin-top: 30px;
    width: 500px;
    height: 500px;
  }
  .liga-title {
    color: ${yellow};
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 4em;
    text-align: center;
  }
  .daftar-button {
    width: 600px;
    height: 120px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${daftarButton});
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.8em;
    cursor: pointer;
    font-weight: bold;
    color: ${dark};
    border: none;
    background-color: transparent;
    padding-top: 18px;
    padding-right: 10px;
  }
`;

export const FifthSection = styled.section`
  * {
    margin: 10px;
  }
  background-color: ${yellow};
  color: ${dark};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  .social-media-title {
    margin-top: 50px;
    font-size: 3em;
    border: solid 2px ${dark};
    background-color: ${green};
    padding: 10px 30px;
  }
  .row-social-medias {
    display: flex;
  }
`;