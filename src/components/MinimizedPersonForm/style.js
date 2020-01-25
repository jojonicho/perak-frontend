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
    width: 250px;
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
    text-align: left;
    overflow-x: hidden;
    padding: 0 5px;
  }
  .upperMinimized {
    display: flex;
    justify-content: space-between;
  }
  .bottomMinimized {
    display: flex;
    justify-content: space-between;
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
    margin-right: 5px;
  }
`;
