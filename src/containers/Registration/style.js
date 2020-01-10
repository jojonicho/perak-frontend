import styled from "styled-components";
import bg from "../../asset/regisbg.png";

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const SubmitButton = styled.div`
  width: 40%;
  max-width: 350px;
  height: 40px;
  font-family: Montserrat;
  border: none;
  font-weight: bold;
  color: white;
  font-family: Montserrat;
  border-radius: 10px;
  font-size: 1.5em;
  margin-top: 100px;
  background-color: #22b3a5;
  box-shadow: inset 0px -5px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  // padding-left: 20px;
  cursor: pointer;
  :active {
    box-shadow: inset 0px -8px 14px rgba(0, 0, 0, 0.25);
  }
`;
export const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  > div {
    width: 100%;
    justify-content: center;
    height: inherit !important;
  }
`;
export const TambahButton = styled.div`
  .plus {
    margin-right: 10px;
    font-weight: bold;
  }
  cursor: pointer;
  background-color: transparent;
  font-family: Montserrat;
  color: #f26522;
  border: solid #f26522 2px;
  border-radius: 7px;
  outline: none;
  :active {
    background-color: #f26522;
    color: #f0f0f0;
  }
  width: 75%;
  max-width: 600px;
  height: 40px;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 30px;
`;

export const RegistrationContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-attachment: unset;
  background-repeat: repeat-y;
  background-position: center;
  background-color: #f0f0f0;
  background-image: url(${bg});
  background-size: 100vw;
  text-align: center;
  position: relative;
  font-family: Helvetica;
  padding-bottom: 30px;
  overflow-x: hidden;
  color: black;
  button {
    font-family: Montserrat;
  }
  .x-buttona {
    cursor: pointer;
    color: #e96730;
    background-color: transparent;
    font-weight: normal;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border: none;
    margin-right: 10%;
    outline: none;
  }
  .garisnya {
    width: 80%;
    height: 1px;
    opacity: 0.3;
    background-color: #0d2040;
    align-self: center;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .pemain,
  .manager {
    text-align: left;
    width: 75%;
  }

  .section {
    margin: 0px auto;
    text-align: left;
    width: 100%;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }
  input {
    // padding: 0px 10px;
    margin: 20px 5px;
    background-color: white !important;
    border: none;
    border-radius: 3px;
    // border: 2px black solid;
    opacity: 1;
    color: #303030;
    font-size: 1rem;
    font-weight: 400;
    width: 40%;
    min-width: 170px;
    -webkit-box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
      1px 1px 0px rgba(255, 255, 255, 1);
    box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
      1px 1px 0px rgba(255, 255, 255, 1);
    outline: none;
  }

  .long {
    width: 100%;
  }

  /* button{
    border-radius: 5px;
  background-color: #a1cdf1;
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: 2px black solid;
  cursor: pointer;
} */
  p {
    font-family: Montserrat;
    font-size: 0.8rem;
    padding: 0 15px;
  }
  h3 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 32px;
    color: #454fcb;
    margin: 30px 0;
    margin-top: 50px;
  }
`;

export const Section = styled.div`
  margin: 0px auto;
  text-align: left;
  width: 70%;
  font-size: 32px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  font-size: 25px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #a1cdf1;
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: 2px black solid;
  cursor: pointer;
  background-color: ${props => {
    if (props.type === "tambah") return "#e97318";
    if (props.type === "submit") return "#18d1e9";
    return "#f5f109";
  }};
`;
export const Input = styled.input`
height: 32px;
width: ${props => {
  if (props.type === "long") return "100%";
  return "60%";
}}
// padding: 0px 10px;
margin: 0px auto;
background-color: white;
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

export const Title = styled.h3`
  /* // Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
  font-family: Helvetica;
  font-size: 48px !important;
  /* text-shadow: 2px 2px #F24E07; */
  color: #4b59a7;
  font-weight: 700 !important;
`;
