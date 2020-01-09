import styled from "styled-components";

export const MinimizedPersonFormContainer = styled.div`
  width: 75vw;
  margin: 25px;
  border: none;
  color: white;
  font-size: 2em;
  height: 50px;
  background-color: #f26522;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 1px -7px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  .x-button {
    cursor: pointer;
    color: black;
    background-color: #ffde17;
    width: 30px;
    font-weight: bold;
    height: 30px;
    position: absolute;
    right: 20px;
    font-size: 0.7em;
    border-radius: 50%;
    border: none;
  }
`;
export const MinimizePersonButton = styled.button`
  background-color: rgb(0, 0, 0, 0);
  cursor: pointer;
  color: white;
  border: none;
  display: flex;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  // height: 90%;
  padding-bottom: 5px;
  padding-left: 20px;
`;
