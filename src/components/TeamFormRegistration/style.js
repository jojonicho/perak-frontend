import styled from "styled-components";

export const TeamFormRegistrationContainer = styled.div`
overflow-x:hidden;
align-items: center;
margin-top: 30px;
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
}
input ,.logo-preview {    
    padding: 5px 10px;
    margin: 20px  5px;
    background-color: white !important;
    border: none;
    border-radius: 8px;
    border: none;
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
    // border: 2px white solid;
    // background-color: #FFDE17;
    // border-radius: 3px;
    img {
        width: 100%;
        height: 100%;
    }
  }

.long{
    width: 50%;
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
