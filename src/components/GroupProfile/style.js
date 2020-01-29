import styled from "styled-components";
import background from "../../asset/GroupProfile/background.svg";

export const GroupProfileContainer = styled.div`
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
    margin: 5vw 2vw;
    min-height: 96vw;
    width: 96vw;
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 700px;
    text-align: center;
  }

  .logo {
    margin: 10vw auto 0 auto;
    width: 20vw;
    border: 1px solid white;
  }
  h1 {
    font-size: 5vw;
    margin-top: 3vw;
    font-family: BigJohnPro;
    color: #444fcb;
  }
  .line {
    height: 0;
    width: 70%;
    margin: 3vw auto;
    border-bottom: 2px solid #f2cf35;
  }
  h3 {
    font-family: Montserrat;
    color: #0d2040;
    font-size: 2.5vw;
  }
  .card-container {
    margin-top: 4vw;
    width: 60vw;
    height: 30vw;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .card {
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 18vw;
    margin: 0 2vw 0 2vw;
    background-color: #ffffff;
  }

  .desc {
    padding: 2vw;
    background-color: #f2cf35;
    font-size: 1.7vw;
  }

  .card-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  .card-container::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  .card-container::-webkit-scrollbar-thumb {
    background-color: #f2cf35;
    border: 2px solid #f2cf35;
  }
`;
