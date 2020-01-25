import styled from "styled-components";

export const TeamFormRegistrationContainer = styled.div`
overflow-x:hidden;
align-items: center;
font-family: Montserrat;
font-weight: lighter;
margin-top: 30px;
.section {
    margin: 0px auto;
    text-align: left;
    width: 80%;
    font-size: 32px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    font-size: 25px;
}

.logo-tim{
    display: flex;
    flex-wrap: wrap;
}
.labelfile {
    width: 100px;
    max-width: 350px;
    height: 40px;
    margin: 0 5px 10px 5px !important;
    border: none;
    font-family: Montserrat;
    font-weight: lighter;
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
}
input ,.logo-preview {    
    margin: 10px 5px 20px 5px !important;
    background-color: white !important;
    border-radius: 8px;
    min-width: 200px;
    padding: 5px 10px;
    width: 100%;
}

.logo-preview{
    margin: 10px 5px 20px 5px !important;
    background-color: white !important;
    border-radius: 8px;
    min-width: 200px;
    padding: 5px 10px;
    width: calc(100% - 120px);
  }


h3 {
    Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 32px;
font-weight: normal;
}
.hide-input{
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
    z-index: -1;
    margin: 0;
    display: none;
}

`;
