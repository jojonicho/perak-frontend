import styled from "styled-components";
import backgroundAbu from "../../asset/perakTahunIni/background-abu.svg";

export const PerakTahunIniContainer = styled.div`
  background-image: url(${backgroundAbu});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: -285px !important;
  height: 2050px;
  .bola-bulet {
    display: block;
    margin-left: auto;
    margin-right: auto;
    animation: rolling 3s linear 0s infinite;
  }

  @keyframes rolling {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .main-bg {
    position: absolute;
    z-index: 0;
    width: 100vw;
  }
  .main-section {
    margin-top: -500px;
    padding-top: 150px;
    height: 1380px;
  }
  .main-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 490px;
  }
  .sec-title {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
  .foto-kiri {
    position: absolute;
    left: 0;
    margin-top: 500px;
  }
  .decor-foto-kiri {
    position: absolute;
    left: 0;
    margin-top: 850px;
  }
  .foto-kanan {
    position: absolute;
    right: 0;
    margin-top: 550px;
  }
  .decor-foto-kanan {
    position: absolute;
    right: 0;
    margin-top: 620px;
  }
  .circle-text-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .circle-row {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 30px;
    width: max-content;
  }
  .circle-item {
    background-color: #eedd8f;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    margin-left: 5px;
    margin-right: 5px;
    color: #79681a;
    text-align: center;
    font-weight: 750;
    font-size: 28px;
    position: relative;
  }
  .circle-text {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .siapa-ini {
    position: absolute;
    margin-top: 550px;
    margin-left: 180px;
  }
  .main-bg-phone {
    display: none;
  }
  .bottom-section {
    position: absolute;
    z-index: 10;
    width: 100vw;
  }
  .kenalin-aang {
    position: absolute;
    z-index: 12;
    margin-top: 370px;
    margin-left: 300px;
  }
  .bottom-left-decor {
    position: absolute;
    left: 200px;
    margin-top: 1020px;
  }
  .bottom-right-decor {
    position: absolute;
    right: 200px;
    margin-top: 1020px;
  }

  @media only screen and (max-width: 550px) {
    margin-top: -190px !important;
    .main-section {
      margin-top: -100px;
      height: 950px;
    }
    .main-content {
      margin-top: 250px;
    }
    .bola-bulet {
      display: none;
    }
    .sec-title {
      margin-top: 20px;
    }
    .circle-item {
      width: 35px;
      height: 35px;
      font-size: 20px;
    }
    .circle-row {
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }
    .circle-item {
      display: none;
    }
    .parent-fixed {
      display: inline-block;
    }
    .siapa-ini {
      width: 30%;
      margin-top: 340px;
      margin-left: 80px;
    }
    .foto-kiri {
      width: 40%;
      margin-top: 320px;
    }
    .decor-foto-kiri {
      width: 20%;
      margin-top: 500px;
    }
    .foto-kanan {
      width: 35%;
      margin-top: 380px;
      margin-right: 0px;
    }
    .decor-foto-kanan {
      width: 20%;
      margin-top: 420px;
    }
    .main-bg {
      display: none;
    }
    .main-bg-phone {
      position: absolute;
      z-index: 0;
      width: 100vw;
      display: inline-block;
    }
    .bottom-section {
      position: absolute;
      z-index: 10;
      width: 100vw;
      /* margin-top: */
    }
    .kenalin-aang {
      position: absolute;
      z-index: 12;
      margin-top: 90px;
      margin-left: 40px;
      width: 30%;
    }
    .bottom-left-decor {
      left: 50px;
      width: 30%;
      margin-top: 730px;
    }
    .bottom-right-decor {
      right: 50px;
      width: 30%;
      margin-top: 730px;
    }
    height: 1200px;
  }
`;
