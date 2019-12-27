import styled from "styled-components";

export const MinimizedPersonFormContainer = styled.div`
  width: 75vw;
  margin: 25px;
  border: solid white 3px;
  color: white;
  font-size: 2em;
  height: 50px;
  background-color: #22b3a5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .x-button {
    cursor: pointer;
    color: black;
    background-color: #ffde17;
    width: 30px;
    font-weight: bold;
    height: 30px;
    margin-right: 20px;
    font-size: 0.7em;
    border-radius: 50%;
    border: solid black 2px;
  }
`;
export const MinimizePersonButton = styled.button`
  background-color: #22b3a5;
  cursor: pointer;
  color: white;
  border: none;
  display: flex;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 90%;
  padding-left: 20px;
`;
