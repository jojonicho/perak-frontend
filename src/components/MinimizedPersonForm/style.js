import styled from "styled-components";

export const MinimizedPersonFormContainer = styled.div`
  width: 75vw;
  margin: 25px;
  border: solid black 3px;
  color: white;
  font-size: 2em;
  height: 50px;
  background-color: #f24e07;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .x-button {
    cursor: pointer;
    color: black;
    background-color: white;
    width: 30px;
    height: 30px;
    margin-right: 20px;
    font-size: 0.7em;
    border-radius: 50%;
    border: solid black 2px;
  }
`;
export const MinimizePersonButton = styled.button`
  background-color: #f24e07;
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
