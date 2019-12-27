import styled from "styled-components";

export const TeamFormRegistrationContainer = styled.div`
overflow-x:hidden;
align-items: center;
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

.logo-tim{
    margin: 20px  5px;
    display: flex;
    flex-wrap: wrap;
}
.labelfile{
    margin: 20px 0;
    align-self: flex-end;
    background-color: #22B3A5;
    border: 2px white solid;
    opacity: 1;
    color: white;
    font-size: 20px;
    width: 30%;
    min-width: 170px;
    max-width: 270px;
    padding: 5px 0px;
    outline: none;
    text-align:center;
    font-weight: 600;
    cursor: pointer;
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
    margin-right: 20px;
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

.long{
    width: 100%;
}

h3 {
    Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 32px;
font-weight: 800;
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
