import styled from "styled-components";
import section3 from "../../asset/section-3-background.svg";

export const Section3Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .section-3 {
    position: relative;
    min-height: 120vh;
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${section3});
    background-repeat: no-repeat;
    background-size: 115%;
    background-position-x: 20%;
    background-position-y: 70%;
    color: #0d2040;
  }

  .title {
    margin-top: 270px;
    font-size: 40px;
    font-weight: bold;
  }

  .title span {
    color: #f0f0f0;
  }

  .desc {
    margin-top: 30px;
    max-width: 50%;
    font-size: 20px;
    line-height: 1.8;
    text-align: justify;
  }

  /* IPAD */

  @media only screen and (max-width: 800px) {
    .section-3 {
      background-size: cover;
      background-position-x: 50%;
    }
    .title {
      position: absolute;
      left: 80px;
      top: 180px;
    }
    .desc {
      position: absolute;
      top: 300px;
      left: 80px;
      max-width: 60%;
      font-size: 1.2em;
      line-height: 1.6;
    }
  }

  @media only screen and (max-width: 420px) {
    .section-3 {
      background-size: 1300px;
      background-position-y: 0;
      background-position-x: 50%;
    }
    .title {
      max-width: 80%;
      text-align: center;
      position: static;
      font-size: 1.6em;
      margin-top: 150px;
    }
    .title span {
      display: inline-block;
    }
    .desc {
      position: static;
      max-width: 60%;
      font-size: 0.8em;
      line-height: 1.6;
    }
  }
`;
