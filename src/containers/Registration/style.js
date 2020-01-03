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
  border: none;
  font-weight: bold;
  color: white;
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
  width: 89%;
  display: flex;
  align-items: left;
  justify-content: space-between;
  > div {
    width: 100%;
  }
`;
export const TambahButton = styled.div`
  .plus {
    margin-right: 10px;
    font-weight: bold;
  }
  width: 75%;
  max-width: 420px;
  height: 40px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  // box-shadow:  0 4px 2px 0px rgb(156, 64, 21);
  box-shadow: inset 0px -5px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 1.5em;
  background-color: #f26522;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding-left: 20px;
  cursor: pointer;
  :active {
    box-shadow: inset 0px -8px 14px rgba(0, 0, 0, 0.25);
  }
`;

export const RegistrationContainer = styled.div`
font-family: inherit;
display: flex;
flex-direction: column;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
background-color: #E5E6DE;
text-align: center;
position: relative;
font-family: Helvetica;
padding-bottom: 30px;
overflow-x: hidden;
color: black;
.x-buttona {
  cursor: pointer;
  color: white;
  background-color: #EA6229;
  width: 35px;
  font-weight: bold;
  height: 35px;
  position: absolute;
  right: 20px;
  font-size: 1.6em;
  border-radius: 50%;
  border: solid white 2px;
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
    background-color: white !important;
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
    margin-top 18px;
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
    font-family: Helvetica;
font-size: 32px;
font-weight: 800;
color: #4B59A7;
margin: 30px 0;

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
  font-family: Helvetica;
  font-size: 48px !important;
  // text-shadow: 2px 2px #F24E07;
  color: #4b59a7;
  font-weight: 800;
`;
