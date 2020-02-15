import styled from "styled-components";
// import hamburger from "../../asset/hamburger.svg";

export const HeaderFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
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
    transform: translateY(+100%);
  }
  .menu-bar {
    display: flex;
    flex-direction: row;
  }
  .dropdown {
    padding-left: 25px;
    padding-right: 25px;
    position: relative;
    display: inline-block;
    height: 60px;
  }
  .dropdown-menu {
    position: absolute;
    display: flex;
    flex-direction: row;
    right: -20%;
    top: 100%;
    width: max-content;
    background-color: rgba(7, 21, 46, 0.94);
    height: 0px;
    overflow: hidden;
    padding-top: 0px;
    padding-bottom: 0px;
    transition: height 0.5s, padding-top 0.5s, padding-bottom 0.5s;
  }
  .dropdown:hover .dropdown-menu {
    height: 270px !important;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .dropdown:hover {
    background-color: rgba(7, 21, 46, 1);
  }
  .dropdown-menu-klasemen {
    right: 0% !important;
  }
  .dropdown:hover .dropdown-menu-klasemen {
    height: 200px !important;
  }
  .dropdown-col-klasemen {
    width: 145px !important;
  }
  .dropdown-col {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
  .dropdown-col-left {
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: rgba(255, 255, 255, 0.2);
  }

  .button-menu {
    padding: 15px;
    color: #e5e6de;
    text-align: center;
  }
  .button-menu:hover {
    background-color: #07152e;
  }
  .dropdown-item {
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
  }
  .button-menu:hover .dropdown-item {
    color: #f2cf35;
  }
  .dropdown-mobile {
    display: none;
  }
  .mobile-menu-button {
    height: 50%;
    transform: translateY(50%);
    cursor: pointer;
  }
  .dropdown-mobile-container {
    position: absolute;
    right: 0px;
    top: 100%;
    background-color: #07152e;
    width: 60vw;
    transition: height 0.5s;
    overflow: hidden;
  }
  .dropdown-mobile-submenu {
    padding: 20px;
    font-family: "Montserrat";
    font-weight: 600;
    cursor: pointer;
    background-color: #07152e;
  }
  .dropdown-mobile-item {
    padding-left: 20px;
    text-align: left;
    font-weight: 600;
    font-family: "Montserrat";
  }
  .dropdown-mobile-subcontainer {
    background-color: #07152e;
    overflow: hidden;
    transition: height 0.5s;
  }
  .menu-down-arrow {
    margin-left: 10px;
  }
  @media only screen and (max-width: 450px) {
    .logo {
      height: 35px;
    }
    .dropdown-mobile {
      display: inline-block;
    }
    .dropdown {
      display: none;
    }
  }
`;
