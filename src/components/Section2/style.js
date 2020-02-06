import styled from "styled-components";
// import section2 from "../../asset/section-2-background-2.svg";
import section2 from "../../asset/section-2-background-3.png";

export const Section2Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .section-2 {
    position: relative;
    min-height: 130vh;
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0d2040;
    background-image: url(${section2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 0px;
    background-position-x: center;
  }

  .desc {
    color: #f0f0f0;
    margin-top: 39vh;
    max-width: 60%;
    font-size: 1.3em;
    line-height: 1.6;
    text-align: justify;
  }

  @media only screen and (max-width: 800px) {
    .section-2 {
      background-position-y: top;
      background-position-x: center;
      min-height: 100vh;
    }
    .desc {
      margin-top: 150px;
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
      line-height: 1.8;
    }
  }
  @media only screen and (max-width: 420px) {
    .desc {
      margin-top: 200px;
    }
  }
  @media only screen and (max-width: 325px) {
    .desc {
      margin-top: 100px;
      line-height: 1.6;
      font-size: 0.7em;
    }
  }

  @media only screen and (max-width: 360px) {
    .desc {
      margin-top: 30px;
    }
  } */
`;
