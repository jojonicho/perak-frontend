import styled from "styled-components";
import background from "../../asset/Section5BG.png";
import backgorundmobile from "../../asset/Section5BG-mobile.svg";

export const Section5Container = styled.div`
  .section-5 {
    background-image: url(${background});
    min-height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 220px;
    font-family: Montserrat;
    color: #0d2040;
  }
  .title {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
    font-size: 3em;
    font-weight: 600;
    color: #e9622a;
  }
  .title-middle {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
    color: #444fcb;
    font-size: 2em;
  }
  .desc {
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 60% !important;
  }

  @media only screen and (max-width: 500px) {
    .section-5 {
      background-image: url(${backgorundmobile});
      background-position-x: center;
      padding-top: 120px;
      max-height: 100vh;
    }
    .title {
      font-size: 2em;
    }
    .title-middle {
      font-size: 1em;
    }
  }
`;
