import styled from "styled-components";

export const HeaderFooterContainer = styled.div`
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
  }
  .header {
    position: fixed;
    height: 60px;
    padding: 0 10px;
    z-index: 1;
  }
  .logo {
    height: 50px;
    margin-right: 10px;
  }
  .header,
  .footer {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .childcontainer {
    padding-top: 40px;
  }
  position: relative;
`;
