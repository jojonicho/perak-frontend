import styled from "styled-components";

export const PersonFormRegistrationContainer = styled.div`
  height: 100%;
  margin-top: 18px;
  font-family: "Calibri";
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  input {
    margin: 20px 5px !important;
  }
  .input-long {
    width: 60%;
  }
  .input-info {
    font-size: 15px;
  }
  .idcard-preview {
    width: 80vw;
    height: 70vw;
    max-height: 300px;
    max-width: 500px;
    background-color: white;
    border: 2px black solid;
    img {
      width: 100%;
      height: 100%;
    }
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
  background-color: white;
  // border: none;
  border: 2px black solid;
  opacity: 1;
  color: #303030;
  font-size: 22px;
  font-weight: 400;

  -webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
  -moz-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
  box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
`;
