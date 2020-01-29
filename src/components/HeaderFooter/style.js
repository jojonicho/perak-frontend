import styled from "styled-components";

export const HeaderFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  h2 {
    margin: auto;
  }
  .links {
    display: flex;
    .link {
      margin: 0 10px;
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
