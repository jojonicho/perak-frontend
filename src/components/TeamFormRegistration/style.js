import styled from "styled-components";

export const TeamFormRegistrationContainer = styled.div`
  overflow-x: hidden;
  align-items: center;
  font-family: Montserrat;
  font-weight: lighter;
  margin-top: 30px;
  width: 75%;

  .section {
    margin: 0px auto;
    text-align: left;
    font-size: 32px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }

  .logo-tim {
    display: flex;
    flex-wrap: wrap;
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
  input,
  .logo-preview {
    margin: 10px 5px 20px 0px !important;
    background-color: white !important;
    border-radius: 8px;
    min-width: 200px;
    padding: 5px 10px;
    width: 100%;
  }

  .logo-preview {
    margin: 10px 5px 20px 0px !important;
    background-color: white !important;
    border-radius: 8px;
    min-width: 200px;
    padding: 5px 10px;
    width: calc(100% - 120px);
    color: #00000060;
    background-color: #fafafa !important;
  }

  .logo-preview:focus {
    border: 2px solid black;
  }

  h3 {
    /* Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
    font-size: 32px;
    font-weight: normal;
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
`;
