import styled from "styled-components";
import adaApaAjaCenter from "../../asset/AdaApaAja/adaApaAjaCenter.svg";
import adaApaAjaLeft from "../../asset/AdaApaAja/adaApaAjaLeft.svg";
import adaApaAjaRight from "../../asset/AdaApaAja/adaApaAjaRight.svg";

export const AdaApaAjaContainer = styled.div`
  h1 {
    font-family: BigJohnPRO;
    text-align: center;
    font-size: 3.5em;
    color: #4452c5;
  }
  min-height: 130vh;
  width: 100vw;
  background-color: #e6e5de;
  background-image: url(${adaApaAjaLeft}), url(${adaApaAjaRight}),
    url(${adaApaAjaCenter});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: left, right, right;
  background-size: 30%, 30%, 90%;
  @media only screen and (max-width: 900px) {
    padding-top: 30vh;
    h1 {
      font-size: 3em;
      padding: 0 50px;
    }
  }
  @media only screen and (max-width: 330px) {
    h1 {
      font-size: 2.5em;
    }
  }
  @media only screen and (min-width: 1360px) {
    padding-top: 25vh;
  }
`;
