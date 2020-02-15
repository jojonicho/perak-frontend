import styled from "styled-components";

export const PersonFormRegistrationContainer = styled.div`
  height: 85%;
  font-family: Montserrat;
  font-weight: lighter;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  margin: 0px 0;
  margin-top: 30px;

  input,
  .foto-preview {
    margin: 10px 5px 20px 0px !important;
    background-color: white !important;
    border-radius: 8px;
    min-width: 200px;
    padding: 5px 10px;
    width: 100%;
    // max-width: 450px;
  }
  .foto-preview {
    background-color: #fafafa !important;
    width: calc(100% - 120px);
  }
  .input-info {
    font-size: 15px;
  }
  .idcard-preview {
    margin-top: 18px;
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
  .unggah-foto-person {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .labelfile {
    width: 100px;
    max-width: 350px;
    height: 34px;
    margin: 0 5px 10px 5px !important;
    font-family: Montserrat;
    font-weight: lighter;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    color: #22b3a5;
    border: solid #22b3a5 2px;
    border-radius: 7px;
    outline: none;
    :active {
      background-color: #22b3a5;
      color: #f0f0f0;
    }
  }
  .saveb {
    cursor: pointer;
    background-color: transparent;
    color: #454fcb;
    border: solid #454fcb 2.5px;
    border-radius: 7px;
    font-size: 1.2em;
    margin: 10px 5px 20px 5px;
    outline: none;
    height: 50px;
    font-weight: bold;
    :active {
      background-color: #454fcb;
      color: #f0f0f0;
    }
  }

  .half-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .half {
      width: 47%;
    }
    @media screen and (max-width: 645px) {
      display: block;
      .half {
        width: 100%;
      }
    }
  }
`;

export const Section = styled.div`
  margin: 0px auto;
  text-align: left;
  width: 75%;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

export const Header = styled.h2`
  padding: 10px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 40px;
  font-weight: 800;
  width: 100%;
  background-color: #4377fa;
  color: rgb(243, 227, 49);
  border-radius: 5px 5px 0px 0px;
  font-family: Montserrat;
  font-weight: bold;
`;

export const Input = styled.input`
  height: 32px;
  width: ${props => {
    if (props.type === "long") return "100%";
    return "60%";
  }};
  // padding: 0px 10px;
  margin: 5px 0px;
  background-color: #ffde17 !important;
  // border: none;
  border: 2px black solid;
  opacity: 1;
  color: #303030;
  font-size: 20px;
  font-weight: 400;

  -webkit-box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
    1px 1px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
    1px 1px 0px rgba(255, 255, 255, 1);
  box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
    1px 1px 0px rgba(255, 255, 255, 1);
`;
