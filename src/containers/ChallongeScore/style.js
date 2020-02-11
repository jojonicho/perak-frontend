import styled from "styled-components";

export const ChallongeScoreContainer = styled.div`
  min-height: calc(100vh - 100px);
  font-family: montserrat;
  background: #e5e5e5;

  .con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 62px;
    /* font-size: 2.5em; */
    font-family: BigJohnPRO;
    color: #444fcb;
    margin-top: 0;
    padding-top: 40px;
    margin-bottom: 70px;
    text-align: center;
  }
  .bracket {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 840px) {
    padding-bottom: 50px;
    .title {
      font-size: 33px;
      padding-top: 20px;
      margin-bottom: 40px;
    }
  }
`;
