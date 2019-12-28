import styled from "styled-components";

export const HeaderFooterContainer = styled.div`
  .footer {
    position: absolute;
    p {
      margin-left: 10px;
      font-size: 0.8rem;
    }
  }
  .no-decor {
    color: inherit;
    text-decoration: none;
  }
  .header {
    position: fixed;
    padding: 0 10px;
    z-index: 1;
  }
  .header,
  .footer {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
  }
  .childcontainer {
    padding-top: 40px;
  }
  position: relative;
`;
