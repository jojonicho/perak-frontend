import styled from "styled-components";

export const HeaderFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  h2 {
    margin: auto;
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
  .no-decor {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
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
    transition: height 1s, padding-top 1s, padding-bottom 1s;
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
    width: 150px !important;
  }
  .dropdown-col {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
  .dropdown-col-left {
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: gray;
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
  }
  @media only screen and (max-width: 350px) {
    .logo {
      height: 35px;
    }
  }
`;
