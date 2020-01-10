import styled from "styled-components";

const blue = "#454FCB";
const red = "#E96730";
const dark = "#0D2040";

export const MinimizedPersonFormContainer = styled.div`
  width: 75vw;
  margin: 25px;
  border: none;
  color: #444444;
  font-size: 2em;
  background-color: white;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  position: relative;
  .nama {
    text-align: left;
    margin: auto;
  }
  .garisContainer {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .garis {
    width: 95%;
    height: 1px;
    opacity: 0.3;
    background-color: ${dark};
  }
  .x-button {
    cursor: pointer;
    color: ${red};
    background-color: transparent;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    border: none;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    height: 100%;
    max-width: 33%;
    overflow-x: hidden;
  }
  .info p {
    margin-bottom: 0;
  }
  .upperMinimized {
    display: flex;
    justify-content: space-between;
  }
  .bottomMinimized {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
  }
  .leftSideUpper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trash {
    margin-right: 10px;
  }
  @media only screen and (max-width: 790px) {
    padding: 15px 30px;
    .nama {
      font-size: 20px;
    }
    .garisContainer {
      margin: 15px 0;
    }
    .bottomMinimized {
      font-size: 12px;
    }
    .trash {
      width: 12px;
    }
    .x-button {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 90vw;
    padding: 15px 30px;
    .nama {
      font-size: 16px;
    }
    .bottomMinimized {
      font-size: 12px;
    }
    .x-button {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 15px 30px;
    .nama {
      font-size: 14px;
    }
    .bottomMinimized {
      font-size: 10px;
    }
    .x-button {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 15px 20px;
  }
  @media only screen and (max-width: 400px) {
    .nama {
      font-size: 12px;
    }
    .bottomMinimized {
      font-size: 10px;
    }
    .trash {
      margin-right: 4px;
    }
    .x-button {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 330px) {
    .nama {
      font-size: 10px;
    }
    .x-button {
      font-size: 9px;
    }
  }
`;
export const MinimizePersonButton = styled.button`
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  color: ${blue};
  border: solid ${blue} 2px;
  border-radius: 7px;
  display: flex;
  text-align: left;
  align-items: center;
  margin-left: 25px;
  padding: 8px 15px;
  .pencil {
    margin-right: 10px;
  }
  @media only screen and (max-width: 790px) {
    padding: 5px 15px;
    font-size: 13px;
    .pencil {
      width: 12px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 5px 10px;
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    padding: 4px 10px;
    font-size: 10px;
  }
  @media only screen and (max-width: 330px) {
    padding: 4px 8px;
    font-size: 9px;
  }
`;
