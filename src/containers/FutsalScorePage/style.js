import styled from "styled-components";
import scoreBG from "../../asset/score-bg.png";

const dark = "#0D2040";

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
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }
  .blm-ada {
    text-align: center;
  }
  .title {
    font-family: BigJohnPRO;
    color: #444fcb;
    font-size: 62px;
    font-weight: 600;
    text-align: center;
  }
  #footer-sc {
    margin-left: 15px;
  }
  #load {
    margin: 0px 0px 15px;
  }
  #button {
    width: 220px;
    height: 40px;
    font-family: BigJohnPRO;
    font-weight: 600;
    font-size: 30px;
    border-radius: 10px;
    background-color: #444fcb;
    color: white;
  }
  #button:hover {
    background-color: white;
    color: #444fcb;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 33px;
      text-align: center;
    }
    #score-page {
      width: 100vw;
    }
    #score-title {
      width: 95vw;
    }
    h2 {
      margin: 0px 10px;
    }
    .blm-ada {
      font-size: 1em;
    }
    #button {
      width: 170px;
      height: 35px;
      font-family: BigJohnPRO;
      font-weight: 600;
      font-size: 25px;
    }
  }
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
