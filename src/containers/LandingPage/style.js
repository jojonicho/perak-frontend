import styled from "styled-components";

import background from "../../asset/firstSectionBackground.png";
import backgroundLeft from "../../asset/firstSectionBackgroundLeft.png";
import secondBG from "../../asset/secondSectionBG.png";
import secondBGLeft from "../../asset/secondSectionBGLeft.png";
import thirdBG from "../../asset/thirdSectionBG.png";
import fourthBG from "../../asset/fourthSectionBG.png";

const yellow = "#F1CF33";
const green = "#33B3A6";
const white = "#E5E6DE";
const blue = "#4452C3";

export const LandingPageContainer = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export const FirstSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${green};
  background-size: 500px, contain;
  background-image: url(${backgroundLeft}), url(${background});
  background-repeat: no-repeat;
  background-position-x: left, right;
  background-position-y: 0px, 30px;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-align: center;
    color: ${yellow};
    text-shadow: 5px 8px #0d2040;
    font-size: calc(3rem + 1vw);
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
  background-image: url(${secondBGLeft}), url(${secondBG});
  background-position-x: 250px, right;
  background-position-y: 300px, 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
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
  background-color: #0d2040;
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
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 180px;

  .liga-title {
    color: ${yellow};
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 4em;
    text-align: center;
  }
`;
