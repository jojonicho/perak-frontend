import styled from "styled-components";
import dotaCompressed from "../../asset/dotaCompressed.png";
import csgoCompressed from "../../asset/csgoCompressed.png";
import marioKartCompressed from "../../asset/marioKart.png";
import mobileLegendsCompressed from "../../asset/mobileLegendsCompressed.png";
import smashBrosCompressed from "../../asset/smashBrosCompressed.png";
import fifaCompressed from "../../asset/fifaCompressed.png";
import caturCompressed from "../../asset/caturCompressed.png";
import codenamesCompressed from "../../asset/codenamesCompressed.png";
import futsalCompressed from "../../asset/futsalCompressed.jpg";

const dark = "#0D2040";

export const RegisterSelectionContainer = styled.div`
  min-height: calc(100vh - 80px);
  color: #0d2040;
  font-family: Montserrat;
  background-color: #e5e5e5;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  padding: 25px 0px;
  .decor {
    position: absolute;
    z-index: 2;
  }
  .purple-yellow-ball {
    top: 0;
    left: 40%;
    width: 20%;
    transform: translate(0, -50%);
    cursor: pointer;
  }
  .purple-yellow-ball-2 {
    bottom: 0;
    left: 65%;
    width: 15%;
    transform: translate(0, 50%);
    cursor: pointer;
  }
  .black-white-rect {
    height: 70%;
    top: 0;
    right: 0;
    transform: translate(50%, 15%);
    cursor: pointer;
  }
  .orange-ellipse {
    width: 20%;
    top: 0;
    right: 0;
    transform: translate(40%, -30%);
    cursor: pointer;
  }
  .purple-ball {
    width: 20%;
    top: 0;
    left: 0;
    transform: translate(-25%, -25%);
    cursor: pointer;
  }
  .orange-ellipse-2 {
    width: 20%;
    left: 40%;
    bottom: 0;
    transform: translate(0, 40%);
    cursor: pointer;
  }
  .orange-green-ball-rect {
    width: 20%;
    left: 40%;
    bottom: 0;
    transform: translate(0, 40%);
    cursor: pointer;
  }
  .purple-rect {
    width: 40%;
    top: 0;
    right: 10%;
    transform: translate(0, -40%);
    cursor: pointer;
  }
  .orange-green-ball {
    width: 15%;
    right: 0;
    top: 0;
    transform: translate(50%, 50%);
    cursor: pointer;
  }
  .title {
    margin: 20px 0px 20px 0px;
    color: white;
    text-shadow: 3px 3px #454fcb, -2px 3px #ea6229, 2.5px -2px #33b3a6;
    font-size: calc(2.5rem + 1vw);
    font-weight: bold;
    // transform: scale(1, 0.9);
  }
  .game-container {
    justify-content: center;
    align-items: center;
    display: flex;
    text-decoration: none !important;
    padding: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 40px 0px;
  }

  .purple {
    background-color: #454fcb;
  }
  .purple h1 {
    color: white;
  }
  .yellow {
    background-color: #f2cf35;
  }
  .orange {
    background-color: #33b3a6;
  }
  .green {
    background-color: #ea6229;
  }
  .games {
    padding: 0px 4px 0px 4px;
    margin: 7px;
    width: 30vw;
    height: 12vw;
    color: #0d2040 !important;
    text-decoration: none !important;
    transition: 0.25s;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(34, 25, 25, 0.4);
    word-wrap: break-word;
    display: flex;
    justify-content: center;
    align-content: center;
    min-width: 135px;
    position: relative;
    min-height: 90px;
  }
  .games:hover {
    h1 {
      color: transparent;
    }
  }
  .dota:hover {
    // transform: scale(1.15);
    background-image: url(${dotaCompressed});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .csgo:hover {
    background-image: url(${csgoCompressed});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .mobile:hover {
    background-image: url(${mobileLegendsCompressed});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .mario:hover {
    background-image: url(${marioKartCompressed});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .super:hover {
    background-image: url(${smashBrosCompressed});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .catur:hover {
    background-image: url(${caturCompressed});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .fifa:hover {
    background-image: url(${fifaCompressed});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .code:hover {
    background-image: url(${codenamesCompressed});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .futsal:hover {
    background-image: url(${futsalCompressed});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .choose {
    font-size: calc(1.5rem + 0.7vw);
    font-weight: bold;
  }
  .game-container h1 {
    margin: auto;
    font-size: calc(1.5vw + 15px);
    font-weight: bold;
  }
  // @media only screen and (max-width: 800px) {
  //   .purple-yellow-ball {
  //     width: 30px;
  //     left: calc(100% / 4 + 16px);
  //     top: calc(35vh + 12px);
  //   }
  //   .purple-ball {
  //     left: 15px;
  //     width: 30px;
  //     top: calc(59vh);
  //   }
  //   .orange-ellipse{
  //     width: 40px;
  //     top: calc(40vh + 12px);
  //   }
  //   .orange-ellipse-2{
  //     width: 40px;
  //     left: 10px;
  //     top: calc(90vh);
  //   }
  //   .orange-green-ball-rect{
  //     width: 40px;
  //     top: 74.5vh;
  //     left: 83px;
  //   }
  //   .orange-green-ball{
  //     width: 40px;
  //     right: 0px;
  //     top: 99vh;
  //     transform: translate(7.5%);
  //   }
  //   .purple-rect {
  //     width: 30px;
  //     top: 75vh;
  //     right: 11px;
  //   }
  //   .black-white-rect{
  //     width:10px
  //     top: 114vh;
  //     right: 83px;
  //   }
  // }
`;

export const LoadingScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${dark};
  flex-direction: column;
  padding-top: 150px;
  .logo-loading {
    width: 150px;
    margin-bottom: 20px;
  }
  .loading-bar svg {
  }
`;
