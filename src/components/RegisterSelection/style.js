import styled from "styled-components";

export const RegisterSelectionContainer = styled.div`
  min-height: calc(100vh - 80px);
  color: #0d2040;
  font-family: inherit;
  background-color: #e5e5e5;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-weight: bolder;

  .title {
    margin: 20px 0px 0px 0px;
    color: white;
    text-shadow: 3px 3px #454fcb, -2px 3px #ea6229, 2.5px -2px #33b3a6;
    font-size: calc(3rem + 1vw);
    font-weight: bold;
    transform: scale(1, 0.9);
  }
  .game-container {
    justify-content: center;
    align-items: center;
    display: flex;
    text-decoration: none !important;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .purple {
    background-color: #454fcb;
  }
  .purple h1 {
    color: white;
  }
  .yellow {
    background-color: #f2cf35;
  }
  .orange {
    background-color: #33b3a6;
  }
  .green {
    background-color: #ea6229;
  }
  .games {
    padding: 4vh 20px;
    margin: 5px;
    width: 40%;
    color: #0d2040 !important;
    text-decoration: none !important;
    transition: 0.25s;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(34, 25, 25, 0.4);
    word-wrap: break-word;
  }
  .games:hover {
    h1 {
      color: transparent;
    }
  }
  .dota:hover {
    // transform: scale(1.15);
    background-image: url("https://www.esl-one.com/archive/www.esl-one.com/fileadmin/templates/emsone_v1/images/esl-one-frankfurt14/dota2_logo.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .csgo:hover {
    background-image: url("https://www.freepnglogos.com/uploads/counter-strike-png-logo/counter-strike-symbol-png-logo-11.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .mobile:hover {
    background-image: url("https://i.pinimg.com/originals/ab/a1/fd/aba1fd8d914fd3455b0c24437645ff95.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .mario:hover {
    background-image: url("https://i.pinimg.com/originals/6e/bf/0a/6ebf0a43cc4dff1ce9146ed69211c793.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .super:hover {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Super_Smash_Bros._Ultimate_logo.svg/1024px-Super_Smash_Bros._Ultimate_logo.svg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .catur:hover {
    background-image: url("https://cdn.dribbble.com/users/3777206/screenshots/8495252/chess_logo.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .fifa:hover {
    background-image: url("https://i.imgur.com/40DMysW.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .codenames:hover {
    background-image: url("https://czechgames.com/for-press/codenames/codenames-13.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .futsal:hover {
    background-image: url("https://i.ytimg.com/vi/qKI85n7eWYQ/maxresdefault.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .choose {
    font-size: calc(1.5rem + 1vw);
    font-weight: bold;
  }
  .game-container h1 {
    margin: auto;
    font-size: 1.2em;
    font-weight: bold;
  }
`;
