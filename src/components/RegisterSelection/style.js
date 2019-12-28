import styled from "styled-components";

export const RegisterSelectionContainer = styled.div`
  min-height: calc(100vh - 80px);
  color: #0d2040;
  font-family: inherit;
  background-color: #f2cf35;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  .game-container {
    justify-content: center;
    align-items: center;
    display: flex;
    text-decoration: none !important;
  }
  .title {
    color: white;
    text-shadow: 3px 3px #454fcb, -3px 3px #ea6229, -1px -2px #33b3a6;
    font-size: calc(3rem + 1vw);
  }
  .green {
    background-color: #33b3a6;
  }
  .games {
    padding: 6px 35px;
    color: #0d2040 !important;
    text-decoration: none !important;
    transition: 0.25s;
  }
  .games:hover {
    transform: scale(1.15);
  }
`;
