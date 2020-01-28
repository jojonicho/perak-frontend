import styled from "styled-components";
import section1 from "../../asset/section-1-background.svg";

export const Section1Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .section-1 {
    position: relative;
    min-height: 100vh;
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${section1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -200px;
    color: #0d2040;
  }

  .title {
    margin-top: 70px;
    font-size: 3em;
    font-weight: bold;
  }

  .desc {
    margin: 30px 0 30px 0;
    max-width: 70%;
    font-size: 1.3em;
    line-height: 1.8;
    text-align: justify;
  }

  /* IPAD */

  @media only screen and (max-width: 800px) {
    .section-1 {
      background-position-y: top;
      background-position-x: left;
    }
    .title {
      font-size: 3em;
    }
    .desc {
      max-width: 60%;
      font-size: 1.3em;
      line-height: 1.6;
    }
  }

  @media only screen and (max-width: 420px) {
    .section-1 {
      background-size: 350%;
      background-position-y: top;
      background-position-x: 20%;
    }
    .title {
      font-size: 1.7em;
      margin-top: 100px;
    }
    .desc {
      margin-top: 20px;
      max-width: 60%;
      font-size: 0.8em;
      line-height: 1.6;
    }
  }
`;
