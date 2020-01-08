import styled from "styled-components";

export const HeaderFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  .footer {
    position: absolute;
    height: 40px;

    p {
      margin-left: 10px;
      font-size: 0.8rem;
    }
  }
  .no-decor {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .header {
    position: fixed;
    height: 60px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
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
  @media only screen and (max-width: 690px) {
    .no-decor h2 {
      font-size: 1.2em;
    }
  }
`;
