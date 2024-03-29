import styled from "styled-components";
import background from "../../asset/GroupProfile/background.svg";
import backgroundPhone from "../../asset/GroupProfile/backgroundPhone.svg";

export const GroupProfileContainer = styled.div`
  background-color: #f0f0f0;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    min-height: 92vh;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container-inside {
    margin: 4em auto 0 auto;
    min-height: 75em;
    width: 75em;
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .nama-tim {
    text-transform: uppercase;
  }
  .logo {
    margin: 7em auto 0 auto;
    width: 17em;
    height: 17em;
    border-radius: 50%;
  }
  h1 {
    font-size: 4em;
    margin-top: 0.5em;
    font-family: BigJohnPro;
    color: #444fcb;
  }
  .line {
    height: 0;
    width: 70%;
    margin: 1em auto;
    border-bottom: 0.2em solid #f2cf35;
  }
  h3 {
    font-family: Montserrat;
    color: #0d2040;
    font-size: 2em;
  }
  .card-container {
    margin: 3em auto;
    width: 43em;
    height: 25em;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .card {
    display: inline-block;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    width: 15em;
    margin: 0 1.6em 0 0;
    background-color: #ffffff;
    height: 21.5em;
  }

  .card-img {
    height: 16em;
    width: 100%;
  }
  .card-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .desc {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5.5em;
    width: 100%;
    background-color: #f2cf35;
    padding: 0.7em 0.5em;
    font-size: 1em;
    white-space: normal;
  }
  .desc h4 {
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }

  .card-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  .card-container::-webkit-scrollbar {
    width: 2px;
    height: 5px;
    background-color: #f5f5f5;
  }

  .card-container::-webkit-scrollbar-thumb {
    background-color: #f2cf35;
    border: 0.5px solid #f2cf35;
  }

  @media only screen and (max-width: 800px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .container-inside {
      font-size: 1.2vw;
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 430px) {
    .container-inside {
      background: url(${backgroundPhone});
      background-repeat: no-repeat;
      font-size: 1.3vw;
      margin: 2em auto;
      width: 97vw;
      height: 180vw;
      background-size: contain;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .logo {
      margin-top: -2em;
      width: 38em;
      height: 38em;
      padding: 1.5em;
    }
    h1 {
      font-size: 7em;
      margin-top: 1em;
    }
    .line {
      margin-top: 1em;
      width: 45em;
      border-bottom: 0.7em solid #f2cf35;
    }
    h3 {
      margin-top: 0.6em;
      font-size: 3.4em;
      line-height: 1.4;
    }
    h3 span {
      font-size: 1em;
      display: block;
    }
    .card-container {
      margin-top: 4em;
      height: 38em;
      width: 50em;
    }
    .card {
      width: 23em;
    }
    .card-img {
      height: 24em;
    }
    .desc {
      font-size: 1.8em;
      height: 5em;
    }
    .desc h4 {
      font-size: 1.2em;
    }
  }
`;
