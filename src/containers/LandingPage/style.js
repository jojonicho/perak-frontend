import styled from "styled-components";
import background from "../../asset/firstSectionBackground.png";
import backgroundLeft from "../../asset/firstSectionBackgroundLeft.png";
import secondBG from "../../asset/secondSectionBG.png";
import thirdBG from "../../asset/thirdSectionBG.png";
import fourthBG from "../../asset/fourthSectionBG.svg";
import daftarButton from "../../asset/daftarButton.png";
import ball from "../../asset/ball.png";
import ijugBG from "../../asset/ijugBackground.png";
import firstSection2 from "../../asset/firstSection2.png";
// import pohonCompressedLagi from "../../asset/pohonCompressedLagi.gif";

const yellow = "#F1CF33";
const green = "#33B3A6";
const white = "#E5E6DE";
const blue = "#4452C3";
const dark = "#0D2040";
const red = "#E9622A";

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

export const LandingPageContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  button:focus {
    outline: 0;
  }

  .FUN{
    height: 100vh;
  width: 100vw;
  /* background-color: ${green};
  background-size: 120px, contain;
  background-image: url(${backgroundLeft}), url(${background});
  background-repeat: no-repeat;
  background-position-x: left, right;
  background-position-y: bottom, 30px; */

  background-image: url("https://s5.gifyu.com/images/pohonCompressed.gif");
  /* background-image: url("https://s5.gifyu.com/images/pohonCompressedLagi.gif"); */
  background-size: 1200px;
  background-repeat: no-repeat;
  background-position: bottom left;
  /* background-size: 1000px; */
  background-position-x: -1px;
  background-color: ${white};
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  left:0;
  .tema{
    color: white;
    font-family: BigJohnPRO;
    font-size: 2em;
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-top: 65vh;
    height: 80px;
    width: 140px;
    border-radius: 90px;
    background-color: ${blue};
  }
  
  .selamat-datang{
    width: 650px;
    position: absolute;
    top:-240px;
    right:-200px;
    -webkit-animation: spin 25s linear infinite;
    -moz-animation: spin 25s linear infinite;
    animation: spin 25s linear infinite;
  }
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
  @media only screen and (max-width: 960px) {
    background-position-x: -60px;
    .selamat-datang{
    width: 500px;
    top:-240px;
    right:-200px;
  }
  }
  @media only screen and (max-width: 690px) {
    background-size: 900px;
    background-position-x: -100px;
    .selamat-datang{
    width: 500px;
    top:-240px;
    right:-200px;
  }
  }
  @media only screen and (max-width: 570px) {
    background-position-x: -100px;
    .tema{
      margin-top: 65vh;
    }
    .selamat-datang{
    width: 450px;
    top:-220px;
    right:-200px;
  }
  }
  @media only screen and (max-width: 480px) {
    background-position-x: -100px;
    .tema{
      margin-top: 65vh;
    }
  }
  @media only screen and (max-width: 370px) {
    background-size: 750px;
    background-position-x: -120px;
    .tema{
      margin-top: 65vh;
    }
  }
  @media only screen and (max-width: 320px) {
    background-size: 600px;
    background-position-x: -130px;
    .tema{
      margin-top: 65vh;
    }
  }
  }

  .FRESH{
  height: 100vh;
  width: 100vw;
  background-color: ${white};
  background-image: url(${firstSection2});
  background-size: 800px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 70px;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* .avatar {
    margin-top: 100px;
    width: 450px;
  } */

  .tema {
    color: white;
    font-size: 2em;
    font-family: BigJohnPRO;
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-top: 65vh;
    height: 80px;
    width: 150px;
    border-radius: 90px;
    background-color: ${red};
  }
  }

  .COMPREHENSIVE{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${blue};
    background-image: url(${ijugBG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 50px;
    background-attachment: fixed;

    .tema {
      color: black;
      font-size: 2em;
      font-family: BigJohnPRO;
      border: none;
      cursor: pointer;
      font-weight: bold;
      margin-top: 65vh;
      height: 80px;
      width: 350px;
      border-radius: 90px;
      background-color: ${yellow};
    }
  }
`;

// export const FirstSection = styled.section`

// `;

// export const FirstSection2 = styled.section`

// `;

// export const FirstSection3 = styled.section`

// `;

export const SecondSection = styled.section`
  height: 800px;
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
    z-index: 2;
    background-image: url(${ball});
    background-size: cover;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(100vh + 350px);
    left: 230px;
    cursor: pointer;
  }
  .apa-itu {
    font-family: BigJohnPRO;
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
    top: calc(310px + 100vh);
    right: -20px;
  }
  @media only screen and (max-width: 1190px) {
    .praya-ferdi {
      left: -100px;
    }
    .ball {
      left: 140px;
    }
    .om {
      right: 0px;
    }
  }
  @media only screen and (max-width: 960px) {
    .apa-itu {
      font-size: 4em;
    }
    .ball {
      left: 120px;
      top: calc(100vh + 420px);
      width: 60px;
      height: 60px;
    }
    .full-desc {
      font-size: 1em;
      margin-top: 30px;
      margin-left: 110px;
    }
    .praya-ferdi {
      height: 700px;
      top: 120vh;
      left: -60px;
    }
    .om {
      height: 350px;
      position: absolute;
      top: calc(450px + 100vh);
      right: 0px;
    }
  }
  @media only screen and (max-width: 790px) {
    .om {
      top: calc(500px + 100vh);
      right: 0px;
    }
    .praya-ferdi {
      top: 125vh;
      left: -80px;
    }
    .ball {
      left: 80px;
      top: calc(100vh + 450px);
    }
    .apa-itu {
      font-size: 3.5em;
    }
    .full-desc {
      width: 470px;
    }
  }
  @media only screen and (max-width: 650px) {
    .full-desc {
      width: 380px;
    }
    .praya-ferdi {
      height: 600px;
      top: 135vh;
      left: -80px;
    }
    .ball {
      left: 60px;
      top: calc(100vh + 470px);
      width: 50px;
      height: 50px;
    }
  }
  @media only screen and (max-width: 610px) {
    .apa-itu {
      margin-left: 10px;
    }
    .full-desc {
      margin-left: 60px;
      font-family: 1em;
      width: 360px;
    }
  }
  @media only screen and (max-width: 570px) {
    .apa-itu {
      margin-left: 10px;
    }
    .full-desc {
      margin-left: 60px;
      font-size: 0.9em;
      width: 320px;
    }
  }
  @media only screen and (max-width: 540px) {
    padding-top: 40px;
    .apa-itu {
      margin-left: 0px;
      margin-right: 100px;
      width: 300px;
    }
    .full-desc {
      width: 300px;
    }
    .ball {
      left: 60px;
      top: calc(100vh + 560px);
      width: 50px;
      height: 50px;
    }
    .praya-ferdi {
      height: 500px;
      top: calc(100vh + 350px);
      left: -60px;
    }
  }
  @media only screen and (max-width: 520px) {
    .ball {
      top: calc(100vh + 510px);
    }
    .full-desc {
      width: 280px;
    }
  }
  @media only screen and (max-width: 475px) {
    .apa-itu {
      font-size: 2.5em;
      margin-left: 30px;
    }
    .full-desc {
      font-size: 0.85em;
      width: 280px;
    }
    .om {
      height: 250px;
      top: calc(610px + 100vh);
      right: 0px;
    }
    .praya-ferdi {
      height: 500px;
    }
  }
  @media only screen and (max-width: 420px) {
    .apa-itu {
      margin-left: 70px;
    }
    .full-desc {
      margin-left: 60px;
      width: 220px;
      font-size: 0.85em;
    }
    .praya-ferdi {
      top: calc(100vh + 350px);
      left: -75px;
    }
    .ball {
      left: 40px;
      top: calc(100vh + 520px);
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 325px) {
    .apa-itu {
      margin-left: 100px;
    }
    .om {
      top: calc(610px + 100vh);
      right: 0px;
    }
    .praya-ferdi {
      top: calc(100vh + 350px);
      left: -80px;
    }
    .ball {
      left: 30px;
      top: calc(100vh + 520px);
      width: 40px;
      height: 40px;
    }
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
  background-color: ${white};
  background-image: url(${fourthBG});
  background-size: 80vw;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-carousel {
    margin: 30px 0;
    width: 500px;
  }
  .liga-title {
    font-family: BigJohnPRO;
    color: ${yellow};
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 4em;
    text-align: center;
  }
  .desc-liga {
    color: ${dark};
    text-align: center;
    width: 500px;
  }
  .daftar-button {
    margin-top: 20px;
    width: 600px;
    height: 110px;
    background-size: contain;
    background-position: center;
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
    padding-right: 20px;
  }
  @media only screen and (max-width: 1300px) {
    background-size: 90vw;
    .daftar-button {
      width: 550px;
      height: 90px;
      font-size: 2em;
      padding-top: 10px;
      padding-right: 0px;
    }
  }
  @media only screen and (max-width: 1190px) {
    background-size: 100vw;
  }
  @media only screen and (max-width: 1030px) {
    background-size: 110vw;
  }
  @media only screen and (max-width: 960px) {
    background-size: 120vw;
  }
  @media only screen and (max-width: 860px) {
    padding-top: 40px;
    height: 130vh;
    background-size: 110vw;
    background-position-y: 110px;
    .image-carousel {
      margin: 90px 0 30px 0;
      width: 500px;
    }
    .liga-title {
      font-size: 5em;
      color: ${blue};
    }
  }
  @media only screen and (max-width: 820px) {
    .desc-liga {
      margin-bottom: 120px;
    }
  }
  @media only screen and (max-width: 690px) {
    .image-carousel {
      margin: 90px 0 30px 0;
      width: 450px;
    }
  }
  @media only screen and (max-width: 650px) {
    height: 125vh;
    .image-carousel {
      margin: 110px 0 130px 0;
    }
    .desc-liga {
      font-size: 0.9em;
      margin: 10px;
    }
  }
  @media only screen and (max-width: 610px) {
    height: 115vh;
    .image-carousel {
      margin: 90px 0 110px 0;
    }
  }
  @media only screen and (max-width: 570px) {
    height: 110vh;
    .liga-title {
      font-size: 4em;
    }
    .image-carousel {
      width: 400px;
      margin: 100px 0 95px 0;
    }
    .desc-liga {
      width: 80%;
    }
  }
  @media only screen and (max-width: 520px) {
    height: 105vh;
    .image-carousel {
      width: 350px;
      margin: 95px 0 95px 0;
    }
    .daftar-button {
      width: 400px;
      padding-top: 15px;
    }
  }
  @media only screen and (max-width: 475px) {
    padding-top: 50px;
    .liga-title {
      font-size: 3em;
    }
    .daftar-button {
      width: 300px;
      font-size: 1.5em;
      padding-top: 10px;
      padding-right: 5px;
    }
  }
  @media only screen and (max-width: 440px) {
    .image-carousel {
      width: 300px;
      margin: 90px 0 95px 0;
    }
  }
  @media only screen and (max-width: 420px) {
    .image-carousel {
      width: 280px;
      margin: 85px 0 95px 0;
    }
    .desc-liga {
      font-size: 0.8em;
    }
  }
  @media only screen and (max-width: 380px) {
    padding-top: 100px;
    .image-carousel {
      width: 250px;
      margin: 70px 0 90px 0;
    }
    height: 120vh;
    background-position-y: 160px;
  }
  @media only screen and (max-width: 325px) {
    padding-top: 50px;
    background-position-y: 120px;
    height: 120vh;
  }
`;
// Kefas Satrio Bangkit Solid Liquid
// Halo Web Dev, aku ganteng
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
    font-family: BigJohnPRO;
    font-weight: bold;
    padding: 10px 20px;
    margin-top: 50px;
    text-align: center;
    font-size: 3em;
    border: solid 2px ${dark};
    background-color: ${green};
  }
  .row-social-medias {
    display: flex;
  }
  @media only screen and (max-width: 440px) {
    .social-media-title {
      width: 80%;
      font-size: 2em;
    }
  }
`;
