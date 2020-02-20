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
  }
  .blue {
    background-color: #444fcb;
  }
  .pink {
    background-color: #ff73a2;
  }
  .green {
    background-color: #22b3a5;
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
    text-align: center;
  }
  .img-box {
    width: 112px;
    height: 111px;
    border-radius: 50%;
    background: white;
  }
  .teamA {
    margin: 35px 20px;
    width: 40%;
  }
  .teamB {
    margin: 35px 20px;
    width: 40%;
  }
  .crown {
    margin-bottom: -12px;
  }
  .content {
    width: 100%;
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
  .crown-cont {
    margin-top: -10px;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    transition: 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    .score-card {
      margin: 10px 0px;
      padding: 10px 15px;
      width: 85vw;
      height: 160px;
      border-radius: 8px;
    }
    .teamA {
      margin: 10px 6px;
      width: 30%;
    }
    .teamB {
      margin: 10px 6px;
      width: 30%;
    }
    .body-txt {
      font-size: 14px;
    }
    .img-box {
      width: 53px;
      height: 52px;
    }
    .crown {
      width: 30px;
      height: 30px;
    }
    .crown-cont {
      margin-top: -5px;
    }
    .match-date {
      font-size: 10px;
    }
    .score-txt {
      font-size: 28px;
      margin: 0px 5px;
    }
  }
`;
