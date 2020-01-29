import styled from "styled-components";
import scoreBG from "../../asset/score-bg.png";

export const FutsalScorePageContainer = styled.div`
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .column {
    flex-direction: column;
  }
  .row {
    flex-direction: row;
  }
  #score-title {
    margin: 50px 0px;
  }
  #body-cont {
    margin-bottom: 30px;
  }
  #score-page {
    justify-content: flex-start;
    width: 100%;
    background-image: url(${scoreBG});
    background-size: 100vw;
    background-attachment: unset;
    background-repeat: repeat-y;
    min-height: 84vh;
    overflow-x: hidden;
    position: relative;
  }
  .title {
    font-family: BigJohnPRO;
    color: #444fcb;
    font-size: 62px;
    font-weight: 600;
  }
  #footer-sc {
    margin-left: 15px;
  }
`;
