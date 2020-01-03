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
    padding: 0 10px;
  }
  .header {
    position: fixed;
    height: 60px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
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
    padding-top: 60px;
  }
  position: relative;
`;
