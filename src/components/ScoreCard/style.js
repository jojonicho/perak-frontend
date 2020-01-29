import styled from "styled-components";

export const ScoreCardContainer = styled.div`
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
  .score-card {
    margin: 10px 0px;
    padding: 10px 20px;
    width: 946px;
    height: 321px;
    border-radius: 8px;
    background-color: #444fcb;
  }
  .body-txt {
    font-family: Montserrat;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #f0f0f0;
  }
  .img-cont {
    align-items: center;
  }
  .img-box {
    width: 112px;
    height: 111px;
    border-radius: 50%;
    background: white;
  }
  .teamA {
    margin-right: 30px;
  }
  .teamB {
    margin-left: 30px;
  }
  .score-txt {
    color: #f0f0f0;
    font-family: Montserrat;
    font-size: 64px;
    font-weight: 600;
    margin: 0px 10px;
  }
  .match-date {
    color: #f0f0f0;
    font-family: Montserrat;
    font-weight: 300;
    font-size: 16px;
  }
`;
