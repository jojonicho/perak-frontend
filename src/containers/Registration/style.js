import styled from "styled-components";

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
  border: solid white 3px;
  color: white;
  font-size: 1.5em;
  margin-top: 100px;
  background-color: #f24e07;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding-left: 20px;
  cursor: pointer;
`;
export const LeftDiv = styled.div`
  width: 89%;
  display: flex;
  align-items: left;
  justify-content: space-between;
`;
export const TambahButton = styled.div`
  .plus {
    margin-right: 10px;
    font-weight: bold;
  }
  width: 75%;
  max-width: 450px;
  height: 50px;
  border: solid white 3px;
  color: white;
  font-size: 2em;
  background-color: #22b3a5;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding-left: 20px;
  cursor: pointer;
`;

export const RegistrationContainer = styled.div`
font-family: "Calibri";
display: flex;
flex-direction: column;
background-color: #454FCB;
text-align: center;
position: relative;
font-family: Helvetica;
padding-bottom: 30px;
overflow-x: hidden;
color: white;
.x-button {
  cursor: pointer;
  color: black;
  background-color: #FFDE17;
  width: 30px;
  font-weight: bold;
  height: 30px;
  margin-right: 20px;
  font-size: 1.4em;
  border-radius: 50%;
  border: solid black 2px;
}

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
    margin: 20px  5px;
    background-color: #FFDE17 !important;
    border: none;
    border-radius: 3px;
    // border: 2px black solid;
    opacity: 1;
    color: #303030;
    font-size: 20px;
    font-weight: 400;
    width: 40%;
    min-width: 170px;
    -webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
    box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);

}

.logo-preview{
    width:50vw;
    height:50vw;
    max-height: 200px;
    max-width: 200px;
    border: 2px white solid;
    background-color: #FFDE17;
    border-radius: 3px;
    img {
        width: 100%;
        height: 100%;
    }
  }

  .foto-preview{
    width:40vw;
    height:60vw;
    max-height: 300px;
    max-width: 200px;
    border: 2px white solid;
    background-color: #FFDE17;
    border-radius: 3px;
    img {
        width: 100%;
        height: 100%;
    }
  }

.long{
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
// Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-family: Helvetica
font-size: 32px;
text-shadow: 2px 2px #F24E07;
font-weight: 800;
`;
