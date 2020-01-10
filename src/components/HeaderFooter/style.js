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
    z-index: 100;
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
  .daftar {
    font-family: Montserrat;
    font-weight: normal;
    font-size: 1em;
    color: #e5e6de;
  }
`;
