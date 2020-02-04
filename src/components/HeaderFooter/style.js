import styled from "styled-components";
import hamburger from "../../asset/hamburger.svg";

export const HeaderFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  h2 {
    margin: auto;
  }
  .hamburger {
    display: none;
  }
  .links {
    display: flex;
    .link {
      margin: 0 10px;
    }
  }
  .no-decor {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .notShown {
    transform: translateY(-100vh);
  }
  .links-mobile {
    transition: 0.3s ease-in-out;
    position: fixed;
    z-index: 105;
    top: 0;
    right: 0;
    width: 100vw;
    padding: 20px 20px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    text-align: right;
    background-color: #0d2040;
    .link-mobile {
      margin: 10px 0;
    }
  }
  .footer {
    position: absolute;
    height: 40px;

    p {
      margin: auto;
      margin-left: 10px;
      font-size: 0.8rem;
    }
  }

  .header {
    position: fixed;
    height: 60px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }

  .logo {
    height: 40px;
  }
  .header,
  .footer {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .childcontainer {
    padding-top: 60px;
  }
  .no-padding-top {
    padding-top: 0px;
  }
  .daftar {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1em;
    color: #e5e6de;
  }
  @media only screen and (max-width: 500px) {
    .links {
      display: none;
    }
    .hamburger {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-end;
      width: 45px;
      height: 40px;
      background-color: transparent;
      background-image: url(${hamburger});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      /* .hamburger-line-1, .hamburger-line-2, .hamburger-line-3{
        width: 100%;
        height: 5px;
        border-radius: 10px;
        background-color: #e5e6de;
      }
      .hamburger-line-2{
        width: 80%;
      }
      .hamburger-line-3{
        width: 45%;      
      }       */
    }
  }
  @media only screen and (max-width: 350px) {
    .logo {
      height: 35px;
    }
    .links {
      .link {
        h2 {
          font-size: 0.7em;
        }
      }
    }
  }
`;
