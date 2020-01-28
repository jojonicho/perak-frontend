import styled from "styled-components";
import medsosBG from "../../asset/medsosBG.svg";
import medsosTransition from "../../asset/medsosTransition.svg";

export const MedSosContainer = styled.div`
  width: 100%;
  margin-top: -145px;
  /* padding: 50px 0px; */
  .medsos-title {
    font-family: Montserrat;
  }
  .medsos-transition {
    background-image: url(${medsosTransition});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 145px;
    width: 100%;
  }
  .medsos-main-container {
    background-image: url(${medsosBG});
    padding: 50px 0px 100px 0px;
    margin-top: -1px;
    min-height: 400px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-color: #f2cf35;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .medsos-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 50%;
    .a-container {
      width: 200px;
      margin: 10px 0px;
      padding-left: 50px;
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
        img {
          width: 30px;
          margin-right: 10px;
        }
      }
    }
  }
  @media only screen and (max-width: 820px) {
    .medsos-container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 420px) {
    .medsos-container {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      width: 100%;
      .a-container {
        width: 150px;
        margin: 10px 0px;
        padding-left: 20px;
        display: flex;
        align-items: center;
      }
    }
  }
`;
