import styled from "styled-components";
import landingSectionBG from "../../asset/landing-background.svg";
import landingLayer1 from "../../asset/landing-layer1-v2.svg";
import landingLayer2 from "../../asset/landing-layer2.svg";
import landingLayer3 from "../../asset/landing-layer3.svg";
import landingLayer3Right from "../../asset/landing-layer3-right.svg";
import landingLayer4 from "../../asset/landing-layer4.svg";
import landingLayer5 from "../../asset/landing-layer5.svg";
import apaItuBGLeft from "../../asset/apaItuBGLeft.svg";
import apaItuBGLeftMobile from "../../asset/apaItuBGLeftMobile.svg";
import landingBackgroundMobile from "../../asset/landing-background-mobile.svg";
import landingBackgroundMobileTop from "../../asset/landing-background-mobile-top.svg";

const blue = "#4452C5";

export const LandingPage2Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .section-title {
    color: ${blue};
    font-family: BigJohnPRO;
    font-size: 3.5em;
  }
  .desc {
    margin-top: 35px;
    line-height: 35px;
    max-width: 50%;
    min-width: 200px;
    text-align: justify;
  }
  .daftar-awal {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1.3em;
    color: #e5e6de;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    color: white;
    text-decoration: none;
  }
  .daftar-awal-container {
    padding: 20px 30px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 100%;
  }

  .daftar-awal-link {
    text-decoration: none;
  }
  p,
  h1 {
    z-index: 101;
  }
  .leaf {
    position: absolute;
    display: block;
    z-index: 100;
  }
  .leaf:nth-child(1) {
    left: 20%;
    top: 50px;
    transform: rotate(-50deg);
    animation: animate-leaves 25s linear infinite;
    /* filter: blur(2px); */
  }
  .leaf:nth-child(2) {
    left: 30%;
    top: 220px;
    animation: animate-leaves 15s linear infinite;
  }
  .leaf:nth-child(3) {
    left: 45%;
    top: 55px;
    /* filter: blur(1px); */
    transform: scale(0.8);
    animation: animate-leaves 30s linear infinite;
  }
  .leaf:nth-child(4) {
    transform: rotate(50deg);
    left: 55%;
    top: 200px;
    animation: animate-leaves 35s linear infinite;
  }
  .leaf:nth-child(5) {
    left: 70%;
    top: 150px;
    /* filter: blur(1px); */
    animation: animate-leaves 25s linear infinite;
  }
  .leaf:nth-child(6) {
    transform: rotate(-50deg);
    top: 500px;
    left: 30%;
    /* filter: blur(2px);     */
    animation: animate-leaves 35s linear infinite;
  }
  .leaf:nth-child(7) {
    top: 550px;
    left: 45%;
    /* filter: blur(1px);     */
    animation: animate-leaves 30s linear infinite;
  }
  .leaf:nth-child(8) {
    top: 570px;
    left: 55%;
    animation: animate-leaves 20s linear infinite;
  }
  .leaf:nth-child(9) {
    top: 500px;
    /* filter: blur(1px);     */
    left: 75%;
    animation: animate-leaves 25s linear infinite;
  }
  @keyframes animate-leaves {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    10% {
      opacity: 1;
    }
    20% {
      transform: translateX(-20px) rotate(45deg);
    }
    40% {
      transform: translateX(-20px) rotate(90deg);
    }
    60% {
      transform: translateX(20px) rotate(135deg);
    }
    80% {
      transform: translateX(-20px) rotate(180deg);
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 80%;
      opacity: 0;
      transform: translateX(-20px) rotate(225deg);
    }
  }
`;

export const LandingSection = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: #e5e6de;
  position: relative;
  .mobile-landing {
    display: none;
  }
  .title {
    position: absolute;
  }
  .pesta-rakyat {
    display: flex;
  }
  .pesta {
    margin-top: 30px;
    transform: rotate(-10deg);
  }
  .rakyat {
    transform: rotate(5deg);
  }
  .komputer {
    margin-top: -20px;
    margin-left: 100px;
    transform: rotate(-5deg);
  }
  .layer {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-color: transparent;
    position: absolute;
  }
  #layer1 {
    background-image: url(${landingLayer1});
    background-size: 100%;
    height: 200vh;
    background-position-y: 220px;
    top: 300px;
    z-index: 5;
  }
  #layer2 {
    background-image: url(${landingLayer2});
    background-position-x: right;
    background-position-y: 220px;
    z-index: 4;
    background-size: 1200px;

    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      margin-left: 80px;
      margin-top: 80px;
      font-family: BigJohnPRO;
      font-size: 2em;
      color: white;
    }
  }
  #layer3 {
    background-image: url(${landingLayer3}), url(${landingLayer3Right});
    z-index: 3;
    background-position-y: 270px, 170px;
    background-position-x: left, right;
    background-size: 1200px, 750px;
  }
  #layer4 {
    background-image: url(${landingLayer4});
    background-position-y: 240px;
    background-size: 1200px;
    background-position-x: left;
    z-index: 2;
  }
  #layer5 {
    background-image: url(${landingLayer5});
    background-size: 750px;
    background-position-x: 250px;
    background-position-y: 120px;
    z-index: 1;
  }
  #layer6 {
    background-image: url(${landingSectionBG});
    background-position-y: -30px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media only screen and (max-width: 800px) {
    .layer,
    #layer2 {
      display: none;
    }
    .mobile-landing {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${landingBackgroundMobile}),
        url(${landingBackgroundMobileTop});
      background-position: bottom, top;
      background-repeat: no-repeat;
      background-size: 100%;
      .title {
        margin-top: 70px;
        font-family: BigJohnPRO;
        font-size: 1.5em;
        color: white;
      }
    }
  }
  @media only screen and (max-width: 550px) {
    .mobile-landing {
      .title {
        font-size: 0.9em;
      }
    }
  }
  @media only screen and (min-height: 1360px) {
    #layer1 {
      top: 700px;
    }
  }
`;

export const ApaItuSection = styled.div`
  height: 710px;
  background-color: white;
  margin-top: 0px;
  position: "relative";
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${apaItuBGLeft});
  background-repeat: no-repeat;
  background-position-y: top, 0px;
  background-position-x: left;
  background-size: 100%, contain;
  .desc {
    font-family: Montserrat;
  }
  @media only screen and (max-width: 800px) {
    background-position-y: bottom, 180px;
    background-position-x: left, -50px;
    background-size: 100%, 300px;
    .section-title {
      width: 300px;
      font-size: 3em;
      text-align: center;
    }
  }
  @media only screen and (max-width: 550px) {
    background-image: url(${apaItuBGLeftMobile});
    background-position-y: bottom, 380px;
    background-position-x: left, -30px;
    background-size: 22%, 250px;
    .section-title {
      font-size: 2.5em;
    }
    .desc {
      font-size: 0.8em;
      line-height: 1.8;
    }
  }
`;
