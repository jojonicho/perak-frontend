import styled from "styled-components";

export const RegistrationContainer = styled.div`
font-family: "Calibri";
display: flex;
flex-direction: column;
background-color: #d2d2d3;
text-align: center;
border: 3px black solid;

.section {
    margin: 0px auto;
    text-align: left;
    width: 80%;
    font-size: 32px;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    font-size: 25px;
}
input {
    // padding: 0px 10px;
    margin: 0px  auto;
    background-color: white;
    // border: none;
    border: 2px black solid;
    opacity: 1;
    color: #303030;
    font-size: 22px;
    font-weight: 400;
    width: 40%;

    -webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
    box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);

}

.logo-preview{
    width:50vw;
    height:50vw;
    max-height: 200px;
    max-width: 200px;
    background-color:white;
    border: 2px black solid;
    img {
        width: 100%;
        height: 100%;
    }
  }

.long{
    width: 100%;
}

button{
    border-radius: 5px;
  background-color: #a1cdf1;
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: 2px black solid;
  cursor: pointer;
}
h3 {
    Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 32px;
font-weight: 800;
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
margin: 0px  auto;
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

export const Title = styled.h3`
Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 32px;
font-weight: 800;
`;
