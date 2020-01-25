import styled from "styled-components";
import landingSectionBG from "../../asset/landing-background.svg";
import landingLayer1 from "../../asset/landing-layer1-v2.svg";
import landingLayer2 from "../../asset/landing-layer2.svg";
import landingLayer3 from "../../asset/landing-layer3.svg";
import landingLayer3Right from "../../asset/landing-layer3-right.svg";
import landingLayer4 from "../../asset/landing-layer4.svg";
import landingLayer5 from "../../asset/landing-layer5.svg";

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

  .title {
    position: absolute;
  }
  .layer {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-color: transparent;
    position: absolute;
  }
  .parallax {
  }
  #layer1 {
    background-image: url(${landingLayer1});
    background-size: cover;
    height: 200vh;
    background-position-y: 250px;
    top: 250px;
    z-index: 5;
  }
  #layer2 {
    background-image: url(${landingLayer2});
    background-position-x: right;
    background-position-y: 250px;
    z-index: 4;
    background-size: 1200px;

    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      margin-left: 100px;
      margin-top: 100px;
      font-family: BigJohnPRO;
      font-size: 2em;
      color: white;
    }
  }
  #layer3 {
    background-image: url(${landingLayer3}), url(${landingLayer3Right});
    z-index: 3;
    background-position-y: 300px, 200px;
    background-position-x: left, right;
    background-size: 1200px, 750px;
  }
  #layer4 {
    background-image: url(${landingLayer4});
    background-position-y: 270px;
    background-size: 1200px;
    background-position-x: left;
    z-index: 2;
  }
  #layer5 {
    background-image: url(${landingLayer5});
    background-size: 750px;
    background-position-x: 250px;
    background-position-y: 150px;
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
  }
`;
