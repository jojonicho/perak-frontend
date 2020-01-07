import styled from "styled-components";

export const PersonFormRegistrationContainer = styled.div`
  height: 100%;
  margin-top: 18px;
  font-family: Helvetica;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  margin: 0px 0;

  input , .foto-preview{
    margin: 20px 5px !important;
    background-color: white !important;
    border-radius: 8px;
    min-width: 200px;
    padding: 5px 10px;
    width: 80%;
    max-width: 450px;
  }
  .input-long {
    width: 90%;
  }
  .input-info {
    font-size: 15px;
  }
  .idcard-preview {
    margin-top 18px;
    width: 70vw;
    height: 40vw;
    max-height: 300px;
    max-width: 500px;
    // border: 2px white solid;
    background-color: white;
    border-radius: 3px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .hide-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    margin: 0;
    display: none;
  }
  .labelfile {
    width: 100px;
    max-width: 350px;
    height: 40px;
    margin: 0 5px !important;
    border: none;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    font-size: 0.7em;
    background-color: #22b3a5;
    box-shadow: inset 0px -5px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 0 3px;
    cursor: pointer;
  :active {
    box-shadow: inset 0px -8px 14px rgba(0, 0, 0, 0.25);
  }
    cursor: pointer;
  }
`;

export const Section = styled.div`
  margin: 0px auto;
  text-align: left;
  width: 80%;
  font-size: 32px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  font-size: 25px;
`;

export const Header = styled.h2`
  padding: 10px 0px;
  margin 0px 0px 0px 0px;
  font-size: 40px;
  font-weight: 800;
  width: 100%;
  background-color: #4377fa;
  color: rgb(243, 227, 49);
  border-radius: 5px 5px 0px 0px;
`;

export const Input = styled.input`
  height: 32px;
  width: ${props => {
    if (props.type === "long") return "100%";
    return "60%";
  }}
  // padding: 0px 10px;
  margin: 5px 0px;
  background-color:#FFDE17 !important;
  // border: none;
  border: 2px black solid;
  opacity: 1;
  color: #303030;
  font-size: 20px;
  font-weight: 400;

  -webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
  -moz-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
  box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
`;
